import '../styles/globals.css'
import App from "next/app";

export default function MyApp({ Component, pageProps, status }) {
    return <Component {...pageProps} status={status} />
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const status = await getSiteStatus();
  return { appProps, status }
}

// check if the on/offline flag is set in the db
async function getSiteStatus() {
  try {
    const res = await fetch(process.env.DB_API + '/api/v1/status');
    const status = await res.json();
    return status.online;
  } catch (error) {
    console.log(error); // TODO refactor to Morgan
    return false;
  }
}
