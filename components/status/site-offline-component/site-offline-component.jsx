// This is the default page in case the site is marked as offline.

import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const OfflinePage = () => {

    return (
        <div className={styles.container}>

            <Head>
                <title>Bringbackdada.com - fine art body and portrait photography - site offline</title>
            </Head>

            <main className={styles.main}>
                <div>
                    <h3>
                        This site is under some serious re-construction and will be up in early summer 2021
                    </h3>
                </div>

            </main>

        </div>
    );
};

export default OfflinePage;
