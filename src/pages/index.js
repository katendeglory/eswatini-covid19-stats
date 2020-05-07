import React from "react"
import Layout from './../components/Layout/Layout';
import Summary from './../components/Summary';
import RecentStats from "../components/RecentStats";
import AllTimeStats from "../components/AllTimeStats";

export default () => {
  return (
    <Layout>
      <Summary />
      <RecentStats />
      <AllTimeStats />
    </Layout>
  );
}