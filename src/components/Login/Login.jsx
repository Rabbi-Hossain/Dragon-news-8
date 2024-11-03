import { Link,  useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";

const Login = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const { signIn, googleProvider, gitHubProvider  } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        signIn(email, password)

            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
              
            })
            .catch(error => {
                console.log(error)
            })

    }


    const handleGoogle =()=>{
        googleProvider()
        .then(res=>{
            console.log(res.user)
            
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const handleGithub = ()=>{
        gitHubProvider()
        .then(res=>{
            console.log(res.user)
            
        })
        .catch(error=>{
            console.log(error)
        })
        
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" autoComplete="off" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="mt-6">Dont have an account? <Link className="text-blue-600" to='/register'>Register</Link></p>
                        </form>
                        <div className="text-center mt-6">
                            <button onClick={handleGoogle} className="items-center text-4xl btn btn-outline "><FcGoogle /></button>
                            <button onClick={handleGithub} className="items-center ml-4 text-4xl btn btn-outline "><RxGithubLogo /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;