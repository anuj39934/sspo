import React from "react";
import { graphql } from "gatsby";
import { css } from "react-emotion";
import { rhythm } from "../utils/typography";

import Layout from "../components/layout";

export default ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div>
        <h1
          className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
        Amazing Pandas Eating Things</h1>
        <h4>
          {data.allMarkdownRemark.totalCount}Posts
        </h4>
        {}
      </div>
    </Layout>
  );
};
