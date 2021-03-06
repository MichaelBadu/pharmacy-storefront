import "./scss/index.scss";

import * as React from "react";

import { MetaWrapper } from "../../components";
import Page from "./Page";
import { TypedHomePageQuery } from "./queries";

const View: React.FC = () => (
  <div className="home-page">
    <TypedHomePageQuery alwaysRender displayLoader={false} errorPolicy="all">
      {({ data, loading }) => {
        return (
          <MetaWrapper
            meta={{
              description: data.shop ? data.shop.description : "",
              title: data.shop ? data.shop.name : "",
            }}
          >
            <Page
              loading={loading}
              slider={data.slider}
              featured2={data.featured2}
              featuredCategories={data.featuredCategories}
              featuredBanner={data.featuredBanner}
              shop={data.shop}
            />
          </MetaWrapper>
        );
      }}
    </TypedHomePageQuery>
  </div>
);

export default View;
