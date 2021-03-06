import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ user, authenticated }) => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">Recipes</Link>
            {authenticated ? (
                <span className="navbar-text float-left mr-2 d-sm-inline d-md-none">Welcome, {user.name.givenName}</span>
            ): (<></>)}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span data-toggle="collapse" data-target=".navbar-collapse.show">
                            <Link className="nav-link" to="/">Home</Link>
                        </span>
                    </li>
                    {authenticated ?
                        (<>
                        <li className="nav-item">
                            <span data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/createRecipe">Create Recipe</Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="nav-link" to="/userRecipes">{user.name.givenName}'s Recipes</Link>
                            </span>
                        </li>
                        </>) : (
                            <span></span>
                        )
                    }

                </ul>
                {!authenticated ? (
                    <span data-toggle="collapse" data-target=".navbar-collapse.show">
                        <Link className="btn btn-secondary my-2 my-sm-0" to="/login">Login</Link>
                    </span>
                ) : (
                        <>
                            <span className="navbar-text mr-2 d-none d-md-inline">Welcome, {user.name.givenName}</span>
                            <span data-toggle="collapse" data-target=".navbar-collapse.show">
                                <Link className="btn btn-secondary my-2 my-sm-0" to="/logout">Logout</Link>
                            </span>
                        </>
                    )}
            </div>
        </nav>
    );
}

export default NavBar;