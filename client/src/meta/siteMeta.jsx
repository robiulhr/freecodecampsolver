import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { metaContent as routes } from "../meta/metaContent";
export default function SiteMeta() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const currentPath = location.pathname;
  useEffect(() => {
    routes.some((route) => route.pathname === currentPath && setPageTitle(route.title));
  }, [location, routes]);
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta content="website" property="og:type" />
      <meta content="Freecodecamp Solver" property="og:site_name" />
      <meta content="image/png" property="og:image:type" />
      <meta content="1200" property="og:image:width" />
      <meta content="628" property="og:image:height" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="Freecodecamp Solver" data-react-helmet="true" name="description" />
      <meta content="Freecodecamp Solver" data-react-helmet="true" property="og:description" />
      <meta content={pageTitle} data-react-helmet="true" property="og:title" />
      {/* <meta
        content="https://freecodecampsolver.com/logo.png" // React should default these to public
        data-react-helmet="true"
        property="og:image"
      /> */}
      <meta content="Freecodecamp Solver" data-react-helmet="true" property="og:image:alt" />
      {/* <meta
        content="https://freecodecampsolver.com"
        data-react-helmet="true"
        property="og:url"
      /> */}
      <meta content={pageTitle} data-react-helmet="true" name="twitter:title" />
      <meta content="Freecodecamp Solver" data-react-helmet="true" name="twitter:description" />
      {/* <meta
        content="https://freecodecampsolver.com/logo.png" // React should default these to public
        data-react-helmet="true"
        name="twitter:image"
      /> */}
    </Helmet>
  );
}
