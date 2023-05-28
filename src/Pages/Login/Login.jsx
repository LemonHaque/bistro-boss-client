import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication1.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";



const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Logged In Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }

    return (
        <div className="py-20">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <h2 className='text-5xl text-yellow-600  font-bold text-center'>Login</h2>
            <div className=" md:flex md:justify-between w-full">
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 h-1/2 mx-auto">

                    <div className=' flex flex-col justify-center'>
                        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>

                            <div className='flex flex-col py-2'>
                                <label>Email Address</label>
                                <input className='rounded-lg border p-2 focus:border-yellow-500 focus:outline-none' type="text" name='email' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <input className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' type="password" name='password' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <LoadCanvasTemplate />
                                <input onBlur={handleValidateCaptcha} type="text" className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' name='captcha' placeholder="Type the captcha above" />
                            </div>
                            <div className="form-control">

                                <input disabled={disabled} className='w-full my-4 btn btn-warning' type="submit" value="Login" />


                                <p className='text-center'>Do not have an account? <Link className='text-blue-500' to='/signup'>Sign Up</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;