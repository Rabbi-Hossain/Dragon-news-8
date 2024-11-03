import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.confige";

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {



    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = ()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const gitHubProvider = ()=>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }



    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{

      const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }

    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut, 
        googleProvider,
        gitHubProvider 
    }

    return (
        < AuthContext.Provider value={userInfo}>
            { children}
        </ AuthContext.Provider>
    );
};

export default AuthProvider;