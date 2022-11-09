import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '~/routes';
import Header from './layouts/Header';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}

                {privateRoutes.map((privateRoute, privateIndex) => {
                    const PrivatePage = privateRoute.component;
                    return <Route key={privateIndex} path={privateRoute.path} element={<PrivatePage />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
