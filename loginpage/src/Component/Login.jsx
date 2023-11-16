import React, { useState } from "react";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

    const handleLogin = () => {
        axios.post("http://localhost:8080/api/PostSignUpDetails", {
            username,
            password
        }).then(response => {
            if (response.data.success) {
                setIsLoggedIn(true);
            } else {
                alert("Invalid username or password");
            }
        });
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {isLoggedIn && <p>You are logged in!</p>}
        </div>
    );
}

export default Login;