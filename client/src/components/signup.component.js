import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username/Email" />
                </div>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>

                <p className="have-an-account">
                    Already have an account?
                    <Link to="/sign-in" > Sign in</Link>
                </p>
            </form>
        );
    }
}