import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './UserManagement.module.scss';
import lineBelowTitle from '../../assets/images/normal_line_fpt_color.png';

const sx = classNames.bind(styles);

function UserManagement() {
    const [account, setAccount] = useState();
    const [code, setCode] = useState();
    const [group, setGroup] = useState();
    const [userData, setUserData] = useState({});

    return (
        <div className={sx('wrapper')}>
            <div className={sx('page-title-container')}>
                <h2>Quản trị người dùng</h2>
                <img src={lineBelowTitle} alt='' />
            </div>
        </div>
    );
}

export default UserManagement;
