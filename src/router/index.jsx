import {lazy} from 'react'
import { Navigate } from 'react-router-dom';
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import AuthComponent from '../component/authComponent';
// import Article from '../pages/Article';
// import Home from '../pages/Home';
// import Publish from '../pages/Publish';
const Home = lazy(() => import('../pages/Home'))
const Article = lazy(() => import('../pages/Article'))
const Publish = lazy(() => import('../pages/Publish'))

const routes = [
    { path: '/login', element: <Login /> },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            { path: '/layout/article', element: <Article /> },
            { path: '/layout/home', element: <Home /> },
            { path: '/layout/publish', element: <Publish /> },
        ]
    },
    // token验证重定向登录--先不用
    // {
    //     path: '/layout', element:
    //         <AuthComponent>
    //             <Layout />
    //         </AuthComponent>
    // },
    { path: '/', element: <Navigate to='/layout/home' /> },

]

export default routes