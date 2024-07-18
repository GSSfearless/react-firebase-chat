import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { auth, db } from "../../lib/firebase";
import upload from "../../lib/upload";
import "./login.css";


const Login = () =>{
    const [avatar, setAvatar] = useState({
        file:null,
        url:""
    })

    const[loading, setLoading] = useState(false)

    const handleAvatar = (e) =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url:URL.createObjectURL(e.target.files[0])
            })
        }
    }


    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData(e.target);
    
        const { username, email, password } = Object.fromEntries(formData);
    
    
        try {
            toast.success("We are preparing your account...");

            const res = await createUserWithEmailAndPassword(auth, email, password);

            const imgUrl = await upload(avatar.file)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar:imgUrl,
                id:res.user.uid,
                blocked:[],
            });
            await setDoc(doc(db, "userchats", res.user.uid),{
                chats:[],
            });

            toast.success("Welcome " + username + "! You can login now");

        }   catch (error) {
            console.log(error);
            toast.error(error.message);
        }   finally {
            setLoading(false)
        }
    }


    const handleLogin = async(e) =>{
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);


        try{
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Welcome back! ");
        }catch(error){
            console.log(error);
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome back</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button disable={loading}>{loading ? "Loading..." : "Login"}</button>
                </form>
            </div>  
            <div className="seperator"></div>
            <div className="item">
            <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        Upload an image
                    </label>
                    <input type="file" id="file" style={{display:"none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button disable={loading}>{loading ? "Loading..." : "Sign Up"}</button>
                </form>
            </div>
            </div>
    );
}
export default Login