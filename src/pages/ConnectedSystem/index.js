import classNames from 'classnames/bind';

import styles from './ConnectedSystem.module.scss';
import lineBelowTitle from '../../assets/images/normal_line_fpt_color.png';

const sx = classNames.bind(styles);

function ConnectedSystem() {
    return (
        <div className={sx('wrapper')}>
            <div className={sx('page-title-container')}>
                <h2>Hệ thống kết nối</h2>
                <img src={lineBelowTitle} alt='' />
            </div>
        </div>
    );
}

export default ConnectedSystem;
