import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import style from '../Reg/reg.module.css'


const Reg = () => {
    return <div className={style.wrapper}>

        <h1>Welcome, let's create an account</h1>

        <p>
            Create an account to keep track of your customers, and contributors.
            Once your account has been created then don’t forget to verify your
            account through mail.
        </p>

        <div className={style.reg_form}>
            <div className={style.name_surname}>
                <TextField className={style.TextField} id="outlined-basic" label="Your email" variant="outlined" />
                <TextField className={style.TextField} id="outlined-basic" label="Your email" variant="outlined" />
            </div>
            <TextField className={style.EmailPass} id="outlined-basic" label="Your email" variant="outlined" />
            <TextField className={style.EmailPass} id="outlined-basic" label="Your email" variant="outlined" />
        </div>

        <Button variant="contained">Continue</Button>

        <p>Already registered? Sign In</p>

    </div>
}

export default Reg;