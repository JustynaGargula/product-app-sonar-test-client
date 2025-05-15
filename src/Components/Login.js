import {useNavigate} from "react-router-dom";

function Login(){

    const navigate = useNavigate()
    function handleLogin(){
        alert("Successfully logged in")
        navigate("/")
    }

    return (
        <div>
            <h1>Log in</h1>
            <form action={handleLogin}>
                <div>
                    <label>
                        User name<br/>
                        <input type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label>
                        Password<br/>
                        <input type="password" name="password" />
                    </label>
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}
export default Login