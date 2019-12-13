import Head from "next/head";
import "./_Layout.scss";
import Header from "./Header";

const Layout = () => (
    <div className="Layout">
        <p>(Layout Here)</p>
        <Header />
    </div>
    // <div><Header /></div>
);

export default Layout;