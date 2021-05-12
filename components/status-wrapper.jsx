import {useUser} from "@auth0/nextjs-auth0";

import OfflineHeader from "./status/site-offline-header/site-offline-header";
import SiteOffline from "./status/site-offline-component/site-offline-component";

export default function StatusWrapper({children, status}) {

    const user = useUser();

    console.log('status: ' + status);
    console.log('user: ' + user);

    if (user.user && !status) {
        return (
            <>
                <OfflineHeader/>
                {children}
            </>

        )
    } else if (!user.user && !status) {
        return (
            <SiteOffline/>
        )
    } else {
        return (
            <>
                {children}
            </>
        )
    }
};



