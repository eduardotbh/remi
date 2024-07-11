import { GoogleLogout } from 'react-google-login';

const clientId = "648410281622-i6k0ns4v3s291bgtjseeceob9o1802rh.apps.googleusercontent.com";

function Logout() { 
    const onSuccess = () => {
        console.log("Logout Success");
    }

    return (
        <div id="signOutButton">
        <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
        </div>
    )
}

export default Logout;