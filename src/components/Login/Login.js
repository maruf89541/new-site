import React from 'react';
import useAuth from '../../Hook/useAuth';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-container">



            <body class="text-center  login">
                <div class="form-signin bg-light">

                    <img class="mb-4" src="https://www.dropbox.com/s/zgbbayj1iqd9fjf/CF_Mark.jpg?raw=1" alt="" width="72" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">Log in</button>
                    <button onClick={signInUsingGoogle} class="w-100 btn btn-lg btn-warning mt-3" type="submit">Google</button>
                    <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Facebook</button>

                    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

                </div>


            </body>


        </div>
    );
};

export default Login;