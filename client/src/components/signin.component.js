import React, { Component } from "react";
import {Link} from 'react-router-dom';
//Now with link coming from react-router you can use **to**
import backgroundVideo from "../resources/backgroundVideo.mp4"


export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <video autoPlay loop muted
                    style = {{
                        position: "absolute",
                        width: "100%",
                        left: "0%",
                        top: "0%",
                        height: "100%",
                        objectFit: "cover",
                        // transform: "translate(-50%,-50%)",
                        zIndex: "-1",
                        opacity: "90%"
                    }}
                    >
                        <source src = {backgroundVideo} type ="video/mp4"></source>
                    </video>
                </div>
                <h3>Welcome</h3>

                {/* Username Field */}
                <div className="form-group">
                    <label>Username</label>
                    <input type="email" className="form-control" placeholder="Username/Email" />
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" />
                </div>

                {/* Remember me button */}
                <div className="form-group">
                    <div className="custom-control custom-checkbox" >
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block" >Sign in</button>
                </div>
                
                <p className="have-an-account">
                    Don't have an account?
                    <Link to="/sign-up" > Sign up</Link>
                </p>
            </form>
        );
    }
}