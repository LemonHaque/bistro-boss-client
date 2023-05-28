import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="radial-progress bg-yellow-600 text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"  state={{from:location}}replace></Navigate>
};

export default PrivateRoute;