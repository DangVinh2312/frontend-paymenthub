import classNames from 'classnames/bind';

import styles from './Monitor.module.scss';
import lineBelowTitle from '../../assets/images/normal_line_fpt_color.png';

const sx = classNames.bind(styles);

function Monitor() {
    return (
        <div className={sx('wrapper')}>
            <div className={sx('page-title-container')}>
                <h2>Bảng điều khiển</h2>
                <img src={lineBelowTitle} alt='' />
            </div>
        </div>
    );
}

export default Monitor;
