import { Button } from '@mui/material';
import React from 'react';
import google from '../image/google.png';
import {signInWithPopup} from "firebase/auth";
import {auth, database, googleProvider} from '../firebase/setup';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

function Signin() {

    const navigate = useNavigate();

    const addUser = async() =>{
        const userDoc = doc(database,"Users",`${auth.currentUser?.email}`)
        try {
            await setDoc(userDoc,{
                username:auth.currentUser?.displayName,
                email:auth.currentUser?.email,
                id:auth.currentUser?.uid
            })
        } catch (err) {
            console.error(err);
        }
       
    }

    const googleSignin = async ()=>{
        try {
            await signInWithPopup(auth,googleProvider);
            addUser();
              navigate('/main');
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{position:"absolute",left:"25%",padding:"150px"}}>

            <div style={{border:"1px solid grey",padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"310px",maxWidth:"350px"}}>
                <img style={{width:"70px"}} src={google} alt="Google" />
            <h2 style={{fontWeight:"200"}}>Create your google clone account</h2>
            <h3 style={{fontWeight:"200"}}>Click the signin button</h3>
            <Button onClick={googleSignin} variant='contained'>Signin with Google</Button>
            </div>
            
        </div>
    )
}

export default Signin
