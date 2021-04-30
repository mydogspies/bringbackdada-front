import Head from 'next/head'
import Offline from '../components/status/site-offline-component/site-offline-component'
import styles from '../styles/Home.module.css'

export default function Home({siteStatus}) {

    // test text 1

    if (siteStatus) {

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

                    <div>
                        <h4>Site online: {siteStatus.toString()}</h4>
                    </div>
                </main>

            </div>
        );

    } else {

        return (
            <Offline />
        );

    }

};

export async function getStaticProps() {

    try {
        const res = await fetch(process.env.DB_API + '/api/v1/status');
        const status = await res.json();
        const siteStatus = status.online;
        return {
            props: {
                siteStatus
            },
            revalidate: 10, // In seconds
        };
    } catch (e) {
        console.log(e); // TODO refactor to Morgan
        const siteStatus = false;
        return {
            props: {
                siteStatus
            },
            revalidate: 10, // In seconds
        };
    }

}
