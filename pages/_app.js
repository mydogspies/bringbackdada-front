import App from "next/app";
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.scss';

import SiteOffline from '../components/status/site-offline-component/site-offline-component';

// adding logger
const logger = require('pino')({
    prettyPrint: {
        levelFirst: true
    }
});

export default function MyApp({Component, pageProps, status}) {

        if(status) {
            return (
                <UserProvider>
                    <Component {...pageProps} status={status}/>
                </UserProvider>
            );
        } else {
            return (
                <SiteOffline />
            )
        }
};

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const status = await getSiteStatus();
    return {appProps, status};
};

// check if the on/offline flag is set in the db
async function getSiteStatus() {
    try {
        const res = await fetch(process.env.DB_API + '/api/v1/status');
        const status = await res.json();
        return status.online;
    } catch (error) {
        logger.error(error);
        return false;
    }
}
