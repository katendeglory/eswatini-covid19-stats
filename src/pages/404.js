import React from "react"
import Layout from './../components/Layout/Layout';

export default () => {
  return (
    <Layout>
      <div style={{ width: "100%", height: "75vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 className="sul-box-inset-1" style={{ color: "var(--main-text-color)", padding: "5rem 1rem", textAlign: "center" }}>
          PAGE NOT FOUND ⚠
        </h2>
      </div>
    </Layout>
  );
}