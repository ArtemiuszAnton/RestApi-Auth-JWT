import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from '../Auth/auth.module.css'
const Auth = () => {
    return <>
        <main className={style.wrapper}>
            <div>
                <h1>Sign In</h1>
                <p>
                    Log in to access your account or create one.
                    Verify your email for seamless access.
                </p>
            </div>


            <div>
                <TextField className={style.TextField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            <div>
                <TextField className={style.TextField} id="outlined-basic" label="Must be at least 8 characters." variant="outlined" />
            </div>
            <Button variant="contained">Continue</Button>

            <p>Not registered yet? Sign Up</p>
        </main>
    </>
}

export default Auth;