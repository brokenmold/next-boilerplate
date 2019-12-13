import React from "react";
import Head from "next/head";
import Link from 'next/link';

import "./_Layout.scss";

import Header from "./Header";

const Layout = () => (
    <div className="Layout">

        <Head>
            <title>Next-Boilerplate</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
        </Head>

        <Header />
        
    </div>
);

export default Layout;