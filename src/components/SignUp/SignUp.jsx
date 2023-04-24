import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const[success,setSuccess]=useState('')

    const {createUser}=useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();

        setError('');
        setSuccess('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        // console.log(email,password,confirm);

        if (password !== confirm) {
            setError('Password did not match');
            return
        }
        else if (password.length < 6) {
            setError('Password length must 6 characters')
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
            setSuccess('Successfully Sign Up ')
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div className="form-container">
            <form onSubmit={handleSignUp}>
                <h1 className='form-title'>Please Sign Up</h1>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p className='text'>Already have an account?  <Link className='new' to='/login'>Login</Link></p>
                <p className='text-error'>{error}</p>
                <p className='text-error'>{success}</p>
            </form>
        </div>
    );
};

export default SignUp;