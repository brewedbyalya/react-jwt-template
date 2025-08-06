import { useState } from "react";
import { useNavigate } from "react-router";

const signUp = () => {

    return (
        <>
        <h1>Sign up form.</h1>
        <form>
            <label>Username:</label>
            <input type="text"/>
            <br/>
            <label>Password:</label>
            <input type= "text"/>
        </form>
        </>
    )

}

export default signUp;