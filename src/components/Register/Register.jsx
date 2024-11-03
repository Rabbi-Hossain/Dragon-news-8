import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photoUrl.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photo, email, password)
        createUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="Text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phot URL</span>
                                </label>
                                <input type="photo" name="photoUrl" placeholder="phot url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="mt-6">Allrady have an account? <Link className="text-blue-600" to='/Login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;