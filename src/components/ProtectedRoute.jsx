import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axiosInstance from "../services";
import { userActions } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProtectedRoutes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const unauthorizedHandler=()=>{
        dispatch(userActions.userLoggedIn(false));
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/');
    }
    axiosInstance.interceptors.response.use(
        (response) => Promise.resolve(response),
        (err) => err.response.status===401? unauthorizedHandler():Promise.reject(err)
    );

    return <>{isLoggedIn ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default ProtectedRoutes;
