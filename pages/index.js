import Head from 'next/head';

export default function Home() {


        return (
            <div>
                <Head>
                    <title>Bringbackdada.com - fine art body and portrait photography - welcome!</title>
                </Head>

                <main>
                    <div>
                        <h3>
                            Site is ...
                        </h3>
                    </div>
                </main>

            </div>
        );
};

Home.requireAuth = true;


