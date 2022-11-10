import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService/AddService";
import Forget from "../components/Authentication/Forget";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../components/Home/Home";
import MyReviews from "../components/MyReviews/MyReviews";
import UpdateMyReview from "../components/MyReviews/UpdateMyReview";
import ServiceDetail from "../components/Services/ServiceDetail";
import Services from "../components/Services/Services";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service/service-detail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params})=>fetch(`https://croft-server.vercel.app/service/${params.id}`)
            },
            {
                path: '/my-reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/my-reviews/update-review/:id',
                element: <UpdateMyReview></UpdateMyReview>,
                loader: ({params}) => fetch(`https://croft-server.vercel.app/reviews/${params.id}`)
            },
            {
                path: '/add-service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/forget',
                element: <Forget></Forget>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])