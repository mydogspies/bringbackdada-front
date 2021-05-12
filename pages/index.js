import Head from 'next/head';
import {useUser} from "@auth0/nextjs-auth0";

export default function Home() {

    const user = useUser();

    console.log(user);

        return (
            <div>
                <Head>
                    <title>Bringbackdada.com - fine art body and portrait photography - welcome!</title>
                </Head>

                <main>
                    <div>
                        <h3>
                            SITE ONLINE!
                        </h3>
                    </div>
                </main>

            </div>
        );
};


