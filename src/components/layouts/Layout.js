import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';

const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Dropify Tech - Shop Now",
  description: "Ecommerce Services Amazon, Shopify, eBay, Tiktok top-ups, ",
  keywords: "mern,node,react,mongodb",
  author: "dropify tech",
};

export default Layout;