import {NextPage} from "next"
import {UserProvider} from '@auth0/nextjs-auth0'

import StatusWrapper from "../components/status-wrapper"

import type {AppProps /*, AppContext */} from 'next/app'

import '../styles/globals.scss'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
    requireAuth?: boolean
};

export default function ThisApp(props: AppProps) {

    const {
        Component,
        pageProps,
    }: { Component: NextApplicationPage; pageProps: AppProps } = props;

    return (
        <UserProvider>

            <StatusWrapper>
                    <Component {...pageProps}/>
            </StatusWrapper>

        </UserProvider>
    );
};


