// src/components/PageMeta.js
import { Helmet } from "react-helmet";

function PageMeta({ title, favicon }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={favicon || "/favicon.png"} />
    </Helmet>
  );
}

export default PageMeta;
