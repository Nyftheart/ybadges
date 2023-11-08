import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideNavBar from "../component/SideNavBar"
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
    const connected: boolean = false;
    return (
        <div className={connected ? "connected-container" : "login-container"}>
            {connected ? (
                <>
                    <div className="sidebar">
                        <SideNavBar></SideNavBar>
                    </div>
                    <div className="content">
                        <Component {...pageProps} />
                    </div>
                </>
            ) : (
                <Login></Login>
            )}
        </div>
    );
}

export default MyApp
