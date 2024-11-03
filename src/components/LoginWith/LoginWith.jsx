import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { AuthContext } from "../Provider/AuthProvider";



const LoginWith = () => {

    const{ googleProvider, gitHubProvider} = useContext(AuthContext)

    const googleHandler =()=>{
        googleProvider()
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }


    const handleGitHub = ()=>{
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
            <h3 className="text-xl font-semibold">LOGIN WITH</h3>
            <button onClick={googleHandler} className="btn btn-outline text-3xl mt-6 w-full"><FcGoogle /></button>
            <button onClick={handleGitHub} className="btn btn-outline mt-2 text-3xl w-full"><RxGithubLogo /></button>
        </div>
    );
};

export default LoginWith;