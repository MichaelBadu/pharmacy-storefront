import "./scss/index.scss";

import classNames from "classnames";
import _ from "lodash";
import NukaCarousel from "nuka-carousel";
import * as React from "react";
import { Link } from "react-router-dom";
// import ReactSVG from "react-svg";

import { ProductsFeatured } from "../../components";
import { generateCategoryUrl, generateProductUrl } from "../../core/utils";

import {
  ProductsList_featured2,
  ProductsList_featuredBanner,
  ProductsList_featuredCategories,
  ProductsList_shop,
  ProductsList_slider,
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import { RichTextContent } from "@temp/@next/components/atoms";
import { CachedImage } from "@temp/@next/components/molecules";
import { generateCollectionUrl } from "@temp/@next/utils/core";

import adviseImg from "../../images/advise.jpg";
import doc1Img from "../../images/doc1.jpg";
import doc2Img from "../../images/doc2.jpg";
import doctorsImg from "../../images/doctors.jpg";
import labImg from "../../images/lab.jpg";
import microscopeImg from "../../images/microscope.jpg";
import noPhotoImg from "../../images/no-photo.svg";

const CatBox = ({ id, name, icon }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href={generateCategoryUrl(id, name)}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={classNames("home-page__categories__card-row__card", {
            ["sec-color-bg"]: hovered,
          })}
        >
          {/* <ReactSVG path={hovered ? catBoxHoverImg : catBoxImg} /> */}
          <img
            className={classNames({
              ["hovered"]: hovered,
            })}
            src={icon?.url}
            alt={icon?.alt}
          />
        </div>
        <div>
          <span>{name}</span>
        </div>
      </div>
    </a>
  );
};

const Page: React.FC<{
  loading: boolean;
  featuredCategories: ProductsList_featuredCategories;
  featuredBanner: ProductsList_featuredBanner;
  slider: ProductsList_slider;
  featured2: ProductsList_featured2;
  shop: ProductsList_shop;
}> = ({
  loading,
  featured2,
  featuredBanner,
  featuredCategories,
  slider,
  shop,
}) => {
  const [docsTab, setDocsTab] = React.useState<"docs" | "lab" | "advise">(
    "docs"
  );
  const featured2Products =
    featured2?.items[0]?.collection?.products ||
    featured2?.items[0]?.category?.products;
  const feat2ProdsShuffled = _.shuffle(featured2Products?.edges).slice(0, 2);
  const bannerItem = featuredBanner?.items?.[0];
  const banner = (bannerItem?.category || bannerItem?.collection)
    ?.backgroundImage?.url;
  let bannerLink;
  if (banner) {
    bannerLink = bannerItem.category
      ? generateCategoryUrl(bannerItem.category.id, bannerItem.category.name)
      : generateCollectionUrl(
          bannerItem.collection.id,
          bannerItem.collection.name
        );
  }

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      <div className="home-page__hero">
        <NukaCarousel
          autoplay
          renderCenterLeftControls={() => null}
          renderCenterRightControls={() => null}
          renderBottomCenterControls={() => null}
          swiping
          wrapAround
        >
          {slider?.items.map(sliderItem => {
            const image =
              sliderItem.collection?.backgroundImage ||
              sliderItem.category?.backgroundImage;
            let url = sliderItem.url;
            if (sliderItem.collection) {
              url = generateCollectionUrl(
                sliderItem.collection.id,
                sliderItem.collection.name
              );
            }
            if (sliderItem.category) {
              url = generateCategoryUrl(
                sliderItem.category.id,
                sliderItem.category.name
              );
            }
            return (
              <Link to={url}>
                <CachedImage url={image?.url || noPhotoImg} key={sliderItem.id}>
                  <img src={noPhotoImg} />
                </CachedImage>
              </Link>
            );
          })}
        </NukaCarousel>
      </div>
      <div className="home-page__docs">
        <div className="container">
          <div className="home-page__docs__grid">
            <div>
              <h1 className="home-page__docs__hero">
                We have group services & products for all your health and beauty
                needs in one single{" "}
                <span className="sec-color-text">digital hub</span>
              </h1>
            </div>
            <div className="home-page__docs__grid__tab-grid">
              <div
                className="home-page__docs__grid__tab"
                onClick={() => setDocsTab("docs")}
              >
                <div className="home-page__docs__grid__tab__img">
                  <img src={doctorsImg} alt="doctors" />
                </div>
                <div
                  className={classNames("home-page__docs__grid__tab__title", {
                    ["active"]: docsTab === "docs",
                  })}
                >
                  <h1>Doctors & Pharmacists</h1>
                </div>
              </div>
              <div
                className="home-page__docs__grid__tab"
                onClick={() => setDocsTab("lab")}
              >
                <div className="home-page__docs__grid__tab__img">
                  <img src={labImg} alt="lab" />
                </div>
                <div
                  className={classNames("home-page__docs__grid__tab__title", {
                    ["active"]: docsTab === "lab",
                  })}
                >
                  <h1>Lab</h1>
                </div>
              </div>
              <div
                className="home-page__docs__grid__tab"
                onClick={() => setDocsTab("advise")}
              >
                <div className="home-page__docs__grid__tab__img">
                  <img src={adviseImg} alt="advise" />
                </div>
                <div
                  className={classNames("home-page__docs__grid__tab__title", {
                    ["active"]: docsTab === "advise",
                  })}
                >
                  <h1>Advise</h1>
                </div>
              </div>
            </div>
          </div>
          {docsTab === "docs" && (
            <div className="home-page__docs__doctors">
              <div className="home-page__docs__doctors__card">
                <div className="home-page__docs__doctors__card__top">
                  <img src={doc1Img} />
                </div>
                <div className="home-page__docs__doctors__card__bottom">
                  <h4 className="home-page__docs__doctors__card__bottom__name">
                    Dr Nawfal Atchia
                  </h4>
                  <h4 className="home-page__docs__doctors__card__bottom__title">
                    Generalist
                  </h4>
                  <h4 className="home-page__docs__doctors__card__bottom__contact">
                    Contact: <a href="tel:+23059097877">59097877</a>
                  </h4>
                </div>
              </div>
              <div className="home-page__docs__doctors__card">
                <div className="home-page__docs__doctors__card__top">
                  <img src={doc2Img} />
                </div>
                <div className="home-page__docs__doctors__card__bottom">
                  <h4 className="home-page__docs__doctors__card__bottom__name">
                    Mr Ashfaaq Beeharry
                  </h4>
                  <h4 className="home-page__docs__doctors__card__bottom__title">
                    Pharmacist at Health and Beauty Pharma
                  </h4>
                  <h4 className="home-page__docs__doctors__card__bottom__contact">
                    Contact: <a href="tel:+23057519684">57519684</a>
                  </h4>
                </div>
              </div>
            </div>
          )}
          {docsTab !== "docs" && (
            <div className="home-page__docs__soon">
              <div className="home-page__docs__soon__text-grid">
                <div>
                  <h1 className="home-page__docs__soon__hero">Coming soon</h1>
                  <h1 className="home-page__docs__soon__hero-sec">
                    We are working on it ! Thanks for your patience
                  </h1>
                </div>
              </div>
              <div className="home-page__docs__soon__image">
                <img src={microscopeImg} />
              </div>
            </div>
          )}
        </div>
      </div>
      {featuredCategories?.items.length > 0 && (
        <div className="home-page__categories">
          <div className="container">
            <h3 className="home-page__title">Browse Our Categories</h3>
            <div style={{ overflow: "auto hidden" }}>
              <div className="home-page__categories__card-row">
                {featuredCategories?.items.map(catItem => (
                  <
                    CatBox
                    key={catItem.category.id}
                    id={catItem.category.id}
                    name={catItem.category.name}
                    icon={''}
                    // icon={catItem.category.iconImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ProductsFeatured title="Our Latest Products" />
      {banner && (
        <div className="home-page__featured-banner">
          <a href={bannerLink}>
            <img src={banner} />
          </a>
        </div>
      )}
      <div className="home-page__featured2">
        <div className="container">
          <h3 className="home-page__title">Don't miss our Featured Products</h3>
          <div
            style={{
              display: "grid",
              justifyItems: "center",
              overflow: "auto hidden",
            }}
          >
            <div className="home-page__featured2__row">
              {feat2ProdsShuffled.map(edge => {
                const product = edge.node;
                const price = product.pricing.priceRange.start;
                return (
                  <div key={product.id} className="home-page__featured2__card">
                    <div className="home-page__featured2__top">
                      <div className="home-page__featured2__image">
                        <Link to={generateProductUrl(product.id, product.name)}>
                          <img src={product.thumbnail?.url} />
                        </Link>
                      </div>
                      <div className="home-page__featured2__pricing">
                        <div className="home-page__featured2__currency">
                          MUR
                        </div>
                        <div className="home-page__featured2__price">
                          {price.gross.amount.toLocaleString(undefined, {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                          })}
                        </div>
                        <div>
                          {/* <Button className="border-btn">Add to cart</Button> */}
                        </div>
                      </div>
                    </div>
                    <div className="home-page__featured2__details">
                      <Link to={generateProductUrl(product.id, product.name)}>
                        <h4>{product.name}</h4>
                      </Link>
                      <RichTextContent
                        descriptionJson={product.descriptionJson}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
