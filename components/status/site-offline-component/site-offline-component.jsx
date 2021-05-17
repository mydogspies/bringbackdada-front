import Head from "next/head";
import Image from 'next/image';

const OfflinePage = () => {

    return (
        <div className="admin-content-box">

            <Head>
                <title>Bringbackdada.com - fine art body and portrait photography - site is offline</title>
            </Head>

            <div className="admin-content">
                <Image
                    id="offline-image"
                    src="/default/images/bbd_front.jpg"
                    alt="Bringbackdada photo series"
                    width={650}
                    height={650}
                />
                <div id="offline-text">
                    <h3>This site is under some serious re-construction and will be up in early summer 2021</h3>
                </div>
                <div id="offline-logo">
                    <h1>bri+gba*kDADA</h1>
                </div>

            </div>

        </div>
    );
};

export default OfflinePage;
