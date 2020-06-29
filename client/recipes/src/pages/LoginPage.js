import React from 'react';

const LoginPage = () => {
    const login = () => {
        window.open("http://localhost:8000/api/auth/google", "_self");
    }
    // const login = async () => {
    //     const results = await fetch('/api/auth/google', {
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": true
    //         },
    //     });
    //     console.log(results);
    //     const body = await results.json();
    //     return (<p>Logged in, {body.name.familyName}</p>)
    // }
    return (
        <div className="container">
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