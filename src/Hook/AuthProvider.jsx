import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";





export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, displayName ) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName )
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }
    useEffect(()=>{
        
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    }) 
    return ()=>{
        unSubscribe
    }
    },[])


    const googleSingUp = () => {
        return signInWithPopup(auth, googleProvider)
    }




    const AuthInfo = {
        loading,
        user,
        googleSingUp,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;