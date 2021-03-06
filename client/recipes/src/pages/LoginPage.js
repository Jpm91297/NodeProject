import React from 'react';

const LoginPage = ({url}) => {
    const login = () => {
        window.open(`${url}/api/auth/google`, "_self");
    }
    return (
        <div className="container" style={{ height: "80vh" }}>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h2>Welcome to Recipes!</h2>
                    <p>Login to gain access to saving recipes and more!</p>
                    <button className="btn btn-primary" onClick={() => login()} >Sign in with google</button>
                </div>
                <div className="col-3"></div>
            </div>

        </div>
    )
}

export default LoginPage;