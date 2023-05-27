import { Link } from "react-router-dom";
import img from "../../assets/others/authentication1.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";


const Login = () => {
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return (
        <div className="my-10">
            <h2 className='text-5xl text-yellow-600 my-6 font-bold text-center'>Login</h2>
            <div className=" md:flex md:justify-between w-full">
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 h-1/2 mx-auto">

                    <div className=' flex flex-col justify-center'>
                        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>

                            <div className='flex flex-col py-2'>
                                <label>Email Address</label>
                                <input className='rounded-lg border mt-2 p-2 focus:border-yellow-500 focus:outline-none' type="text" name='email' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <input className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' type="password" name='password' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <LoadCanvasTemplate />
                                <input ref={captchaRef} className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' type="text" name='captcha' required placeholder="Type the captcha above" />
                                <button  onClick={handleValidateCaptcha} className="btn btn-warning btn-outline my-4">Validate</button>
                            </div>
                            <div className='flex justify-between py-2'>
                                <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>
                                <p>Forgot Password</p>
                            </div>
                            <button disabled={disabled} className='w-full my-5 py-2 btn btn-warning'>Login</button>
                            <div className='text-center flex flex-col gap-3 mx-8 mb-2'>
                                {/* <button onClick={handleGoogleSignIn} className="btn btn-outline hover:bg-yellow-600"> Sign in with Google</button> */}


                            </div>
                            <p className='text-center'>Do not have an account? <Link className='text-blue-500' to='/signup'>Sign Up</Link></p>

                            <p className='text-red-500'></p>
                            <p className='text-blue-500'></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
