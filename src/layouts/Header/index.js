import classNames from 'classnames/bind';
import { Menu, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AccountCircle, Logout } from '@mui/icons-material';
import { useState } from 'react';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const ACTIONS_LIST = [
    {
        title: 'Bảng điều khiển',
        children: [
            {
                title: 'Giám sát giao dịch',
                path: '/monitor/transaction_history',
            },
        ],
    },
    {
        title: 'Kết nối',
        children: [
            {
                title: 'Hệ thống kết nối',
                path: '/connection/connected_system',
            },
            {
                title: 'Tham số hệ thống',
                path: '/connection/param',
            },
        ],
    },
    {
        title: 'Quản trị',
        children: [
            {
                title: 'Quản trị người dùng',
                path: '/admin/user_manager',
            },
            {
                title: 'Quản trị phân quyền',
                path: '/admin/user_permission',
            },
            {
                title: 'Quản lý dịch vụ',
                path: '/product/channel',
            },
        ],
    },
];

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);

    const open = Boolean(anchorEl);
    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);

    const getAnchorEl = (index) => {
        switch (index) {
            case 1:
                return anchorEl1;
            case 2:
                return anchorEl2;
            default:
                return anchorEl;
        }
    };

    const getOpen = (index) => {
        switch (index) {
            case 1:
                return open1;
            case 2:
                return open2;
            default:
                return open;
        }
    };

    const handleClick = (event, index) => {
        switch (index) {
            case 1:
                setAnchorEl1(event.currentTarget);
                break;
            case 2:
                setAnchorEl2(event.currentTarget);
                break;
            default:
                setAnchorEl(event.currentTarget);
                break;
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorEl1(null);
        setAnchorEl2(null);
    };

    const handleLogout = () => {};

    const handleViewProfile = () => {};
    return (
        <header className={cx('wrapper')}>
            <div className={cx('action-container')}>
                {/* Logo */}
                <h1 className={cx('title')}>Menu</h1>

                {/* Actions */}
                {ACTIONS_LIST.map((action, index) => {
                    return (
                        <div className={cx('user-actions')} key={index}>
                            <Button
                                id={`button-${index}`}
                                aria-controls={getOpen(index) ? `menu-${index}` : undefined}
                                aria-haspopup='true'
                                aria-expanded={getOpen(index) ? 'true' : undefined}
                                variant='contained'
                                disableElevation
                                onClick={(e) => handleClick(e, index)}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                {action.title}
                            </Button>
                            <Menu
                                id={`menu-${index}`}
                                MenuListProps={{
                                    'aria-labelledby': `button-${index}`,
                                }}
                                anchorEl={getAnchorEl(index)}
                                open={getOpen(index)}
                                onClose={handleClose}
                            >
                                {action.children.map((child, childKey) => {
                                    return (
                                        <MenuItem key={childKey} onClick={handleClose} disableRipple>
                                            <Link to={child.path}>{child.title}</Link>
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </div>
                    );
                })}
            </div>

            <div className={cx('user-menu')}>
                <Button
                    startIcon={<AccountCircle />}
                    variant='contained'
                    disableElevation
                    onClick={() => handleViewProfile}
                >
                    Admin
                </Button>
                <Button startIcon={<Logout />} variant='contained' disableElevation onClick={() => handleLogout}>
                    Đăng xuất
                </Button>
            </div>
        </header>
    );
}

export default Header;
