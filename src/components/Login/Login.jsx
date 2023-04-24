import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false);


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();
    console.log(location)

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {


        setError('')
        setSuccess('')
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSuccess('Login Successfully')
                form.reset()
                navigate(from)

            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
                <h1 className='form-title'>Please Login</h1>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? "text": "password"} name="password" id="" required />
                    <p onClick={() => setShow(!show)}><small>
                        {show ? <span>Hide password</span> : <span>Show Password</span>}
                    </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='text'>New to Ema-john? <Link className='new' to='/signup'>Create New Account</Link></p>
                <p className='text-error'>{error}</p>
                <p className='text-error'>{success}</p>
            </form>
        </div>
    );
};

export default Login;           