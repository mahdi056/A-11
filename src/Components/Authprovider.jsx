import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase.init";


export const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {

    const [user, setUser] = useState(null);
    // console.log(user);
    const provider = new GoogleAuthProvider();

    const createNewUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };
    const logout = () => {
       
        return signOut(auth)
    }

    const signinWithgoogle = () => {
        return signInWithPopup(auth,provider);
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }


    
    const authInfo = {
        user,
        setUser,
        createNewUser,
        updateUserProfile,
        logout,
        signinWithgoogle,
        userLogin,
        
        
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return () => {
            unsubscibe();
        }
    },[])
  



    return <AuthContext.Provider value={authInfo}>
    {children}
        </AuthContext.Provider>
};

export default Authprovider;