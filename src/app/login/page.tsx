"use client"

import Image from "next/image";
import LoginIcon from "/public/login_icon.png"
import styles from "./styles.module.css"
import { userRegExp } from '../../regExp';

export default function Login() {

    function validateInput() {
        var inputField = document.getElementById("username") as HTMLInputElement;
        var inputValue = inputField.value.trim(); // Remove leading and trailing whitespace
        if (userRegExp.test(inputValue)) {
            alert("Valid input!");
        } else {
            alert("Input does not match the required pattern!");
        }
    }

    return ( <>
    <form name="login" method="post" className={styles.loginForm}>
        <Image priority={true} src={LoginIcon} alt="login_icon" className={styles.login_icon}/>
        <div className={styles.inputsContainer}>
        <label htmlFor="username">
            <input placeholder="Usuario" className={styles.formInput} type="text" name="username" id="username" />
        </label>
        <label htmlFor="password">
            <input placeholder="Contraseña" className={styles.formInput} type="password" name="password" id="password" />
        </label>
        <small className={styles.forgotPassword}><a href="">Recuperar contraseña</a></small>
        </div>
        <button className={styles.submitButton}>Iniciar sesión</button>
    </form>
    </> );
}