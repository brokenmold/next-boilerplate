import React from "react";
import Head from "next/head";
import Link from 'next/link';

import "./_Layout.scss";
import Header from "./Header";

const Layout = () => (
    <div className="Layout">
        <p>(Layout Here)</p>

        <Header />
    </div>
);

export default Layout;