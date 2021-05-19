import {useUser} from "@auth0/nextjs-auth0";
import {useEffect, useRef, useState} from "react";

const logger = require('pino')({
    prettyPrint: {
        levelFirst: true
    }
});

export default function StatusWrapper({children}) {

    const {user, error, isLoading} = useUser();
    const [site, setSite] = useState('');

    async function getSiteStatus() {
        try {
            const res = await fetch('http://localhost:5010/api/v1/status');
            const status = await res.json();
            setSite(status.online.toString());
        } catch (error) {
            logger.error(error);
        }
    }

    useEffect(async () => {
        await getSiteStatus();
    },[]);

    if (user) {
        return (
            <>
                <div>I am logged in as {user.name} and site is {site}</div>
                {children}
            </>

        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
};





