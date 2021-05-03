import Head from 'next/head';
import styles from '../styles/Home.module.css';
import OfflinePage from "../components/status/site-offline-component/site-offline-component";

export default function Home({status}) {

    if (status) {
        return (
            <div className={styles.container}>

                <Head>
                    <title>Bringbackdada.com - fine art body and portrait photography</title>
                </Head>

                <main className={styles.main}>
                    <div>
                        <h3>
                            SITE ONLINE!
                        </h3>
                    </div>
                </main>

            </div>
        );
    } else {
        return (
            <OfflinePage/>
        );
    }
};
