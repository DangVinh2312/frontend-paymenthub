import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { privateRoutes } from '~/routes';
import Header from './layouts/Header';
import Login from './pages/Login';

function App() {
    const [user, setUser] = useState(true);

    if (!user) {
        return (
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        );
    }

    return (
        <div className='App'>
            <Header />
            <Routes>
                {privateRoutes.map((privateRoute, privateIndex) => {
                    const PrivatePage = privateRoute.component;
                    return <Route key={privateIndex} path={privateRoute.path} element={<PrivatePage />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
