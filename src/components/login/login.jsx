import { GoogleLogin } from 'react-google-login';

const clientId = "648410281622-i6k0ns4v3s291bgtjseeceob9o1802rh.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Login Success: currentUser:", res.profileObj);
    };

    const onFailure = (res) => {
        console.log("Login failed: res:", res);
    };
  
    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
            />
        </div>

  );
}

export default Login;