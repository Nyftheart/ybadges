import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SideNavBar from "./component/SideNavBar";
import Main from "./Main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <SideNavBar></SideNavBar>
      <Component {...pageProps} />
    </div>);
}

export default MyApp
