import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../services";
import { userActions } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const ProtectedRoutes = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [userLoggedIn, setUserLoggedIn] = useState();
    const unauthorizedHandler = () => {
        dispatch(userActions.userLoggedIn(false));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }
    axiosInstance.interceptors.response.use(
        (response) => Promise.resolve(response),
        (err) => err.response.status === 401 ? unauthorizedHandler() : Promise.reject(err)
    );

    useEffect(() => {
        isLoggedIn === true ? setUserLoggedIn(true) : isLoggedIn === false ? setUserLoggedIn(false) : setUserLoggedIn(null);
    }, [isLoggedIn])

    return <>{userLoggedIn === true ? <Outlet /> : userLoggedIn === false ? <Navigate to='/auth' /> : null}</>;
};

export default ProtectedRoutes;
