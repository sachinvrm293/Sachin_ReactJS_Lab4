import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    //React State
    const [errMsg, setErrMsg] = useState({});

    const errorMessage = (fieldName) => {
        return fieldName === errMsg.name && <div className="error">{errMsg.message}</div>;
    }
    const handleSubmit = (event) => {
        event.preventDefault(); //Prevent reloading of the form  
        const { username, password } = document.forms[0]; //destructing in es6 

        //Find user login info
        const userData = databaseRegisteredUsers.find(user => user.username === username.value);

        //Validate for username
        if (userData) {
            //Validate for password
            if (userData.password !== password.value) {
                setErrMsg({ name: "password", message: "Invalid Username" });
            } else {
                setErrMsg({}); //Clear error message object
                //Navigate to Home Page!
                navigate("/home");
            }
        } else {
            setErrMsg({ name: "username", message: "Invalid Password" });
        }
    }


    //Database Feteched Users
    const databaseRegisteredUsers = [
        { username: 'john', password: 'johnpass' },
        { username: 'kelly', password: 'passkelly' },
        { username: 'ram', password: 'rama' },
        { username: 'sachin', password: 'sachin@123' },
    ];

    //input -> username, password => 

    return (
        <div className="container m-3">
            <h2>Login Default Page!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username :-</label>
                    <input type="text" name="username" required className="form-control mt-2 mb-2 " placeholder="Enter Username" />
                    {errorMessage("username")}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password :-</label>
                    <input type="password" name="password" required className="form-control mt-2" placeholder="Enter Password" />
                    {errorMessage("password")}
                </div>

                <div className="form-group">
                    <input type="submit" value="Submit Form" className="btn btn-primary mt-3" />
                </div>
            </form>
        </div>
    );
}

export default Login;