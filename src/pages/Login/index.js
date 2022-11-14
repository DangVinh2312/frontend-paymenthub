import { Button } from '@mui/material';
import { useFormik } from 'formik';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';

const sx = classNames.bind(styles);

function Login() {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: (values) => {},
    });

    return (
        <div className={sx('wrapper')}>
            <div className={sx('container')}>
                <form onSubmit={formik.onSubmit}>
                    <div>
                        <h3>Welcome to</h3>
                        <h1>MPRO GUI</h1>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <input
                                id='username'
                                type='text'
                                name='username'
                                placeholder='username'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            type='password'
                            name='password'
                            placeholder='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <div>
                        <Button>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
