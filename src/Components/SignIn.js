import {useNavigate} from "react-router-dom";

function SignIn(){
    let navigate = useNavigate()
    function handleSignIn(){
        alert("Successfully signed in!")
        navigate("/login")
    }

    return (
        <div>
            <h1>Sign in</h1>
            <form action={handleSignIn}>
                <div>
                    <label id="username">
                        User name<br/>
                        <input type="text" name="username"/>
                    </label>
                </div>
                <div>
                    <label id="email">
                        Email<br/>
                        <input type="email" name="email"/>
                    </label>
                </div>
                <div>
                    <label id="password">
                        Password<br/>
                        <input type="password" name="password"/>
                    </label>
                </div>
                <button type="submit">Sign in</button>
            </form>
        </div>
    )
}
export default SignIn