import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providres/AuthProvider';

const SignUp = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegister=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
      
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h2 className='text-center font-extrabold text-5xl'>Regiter now !</h2>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn btn-primary">SignUp</button>
              </div>
            </form>

            <div className='flex'>
                <p>Already have account ? </p>
                <Link className='text-blue-600 pl-5 font-bold' to='/login'>Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;