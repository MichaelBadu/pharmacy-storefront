import * as React from "react";
import { Link } from "react-router-dom";

import { NavLink, SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";

class Nav extends React.PureComponent {
  render() {
    return (
      <footer className="footer-nav">
        <div className="container rule">
          <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h3
                    className="footer-nav__section-header"
                    style={{
                      visibility: item.name.toLowerCase().startsWith("column")
                        ? "hidden"
                        : undefined,
                    }}
                  >
                    {item.name}
                  </h3>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}>
                        <NavLink item={subItem} />
                      </p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery>
          <div className="footer-nav__section">
            <h3 className="footer-nav__section-header">Follow Us</h3>
            <div className="footer-nav__section-content__icons">
              {SOCIAL_MEDIA.map(medium => (
                <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-nav__bottom">
            <div className="footer-nav__bottom__copyright">
              <p>
                © 2020 Pharmacy - All rights reserved. Powered by{" "}
                <span className="highlight">Warehouz</span>.
              </p>
            </div>
            <div>
              <Link to="/page/terms">Terms & Conditions</Link> |{" "}
              <Link to="/page/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Nav;
