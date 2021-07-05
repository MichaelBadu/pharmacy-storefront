import React, { useContext } from "react";
import { mediumScreen, smallScreen } from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import { useSignOut, useUserDetails } from "@sdk/react";

import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { MenuDropdown, Offline, Online, OverlayContext, OverlayTheme, OverlayType } from "..";
import * as appPaths from "../../app/routes";
import { CheckoutContext } from "../../checkout/context";
import { maybe } from "../../core/utils";
import { CartContext } from "../CartProvider/context";
import NavDropdown from "./NavDropdown";
import { TypedMainMenuQuery } from "./queries";

import { anotherMenuItem, menuItem, yetAnotherMenuItem } from "@temp/components/MainMenu/menu_items";
import cartImg from "../../images/cart.svg";
import hamburgerImg from "../../images/hamburger-icon.svg";
import logoSmallImg from "../../images/logo-small.svg";
import logoImg from "../../images/logo.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";

const MainMenu: React.FC = () => {
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();
  const { clear: clearCart } = useContext(CartContext);
  const { clear: clearCheckout } = useContext(CheckoutContext);

  const handleSignOut = () => {
    signOut();
    clearCart();
    clearCheckout();
  };

  // tslint:disable-next-line:no-console
  // const print = ()=>console.log(orderFormUrl)

  return (
    <OverlayContext.Consumer>
      {overlayContext => {
        // print();
        const logo = (
          <Link to={appPaths.baseUrl}>
            <Media
              query={{ maxWidth: mediumScreen }}
              render={() => (
                <div className="main-menu__logo-small">
                  <ReactSVG path={logoSmallImg} />
                </div>
              )}
            />
            <Media
              query={{ minWidth: mediumScreen }}
              render={() => <ReactSVG path={logoImg} />}
            />
          </Link>
        );
        const burgerOrMenu = (
          <TypedMainMenuQuery renderOnError displayLoader={false}>
            {({ data }) => {
              // const items = maybe(() => data.shop.navigation.main.items, []);
              const items = maybe(() => [menuItem, anotherMenuItem, yetAnotherMenuItem], []);

              return (
                <ul>
                  <Media
                    query={{ maxWidth: mediumScreen }}
                    render={() => (
                      <li
                        className="main-menu__hamburger"
                        onClick={() =>
                          overlayContext.show(
                            OverlayType.sideNav,
                            OverlayTheme.left,
                            { data: items }
                          )
                        }
                      >
                        <ReactSVG
                          path={hamburgerImg}
                          className={"main-menu__hamburger--icon"}
                        />
                      </li>
                    )}
                  />
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() =>
                      items.map(item => (
                        <li
                          data-cy="main-menu__item"
                          className="main-menu__item"
                          key={item.id}
                        >
                          <
                            // @ts-ignore
                          NavDropdown overlay={overlayContext} {...item} />
                        </li>
                      ))
                    }
                  />
                </ul>
              );
            }}
          </TypedMainMenuQuery>
        );
        const userMenu = (
          <>
            {user ? (
              <MenuDropdown
                head={
                  <li className="main-menu__icon main-menu__user--active">
                    <ReactSVG path={userImg} />
                  </li>
                }
                content={
                  <ul className="main-menu__dropdown">
                    <li data-testid="my_account__link">
                      <Link to={appPaths.accountUrl}>My Account</Link>
                    </li>
                    <li data-testid="order_history__link">
                      <Link to={appPaths.orderHistoryUrl}>Order history</Link>
                    </li>
                    <li data-testid="address_book__link">
                      <Link to={appPaths.addressBookUrl}>Address book</Link>
                    </li>
                    <li data-testid="payment_options__link">
                      <Link to={appPaths.paymentOptionsUrl}>
                        Payment options
                      </Link>
                    </li>
                    <li onClick={handleSignOut} data-testid="logout-link">
                      Log Out
                    </li>
                  </ul>
                }
              />
            ) : (
              <li
                data-testid="login-btn"
                className="main-menu__icon"
                onClick={() =>
                  overlayContext.show(OverlayType.login, OverlayTheme.right)
                }
              >
                <ReactSVG path={userImg} />
              </li>
            )}
          </>
        );
        return (
          <nav className="main-menu" id="header">
            <div className="main-menu__left">
              <Media
                query={{ maxWidth: mediumScreen }}
                render={() => (
                  <ul>
                    <li>{burgerOrMenu}</li>
                    <li>{userMenu}</li>
                  </ul>
                )}
              />
              <Media query={{ minWidth: mediumScreen }} render={() => logo} />
            </div>

            <div className="main-menu__center">
              <Media query={{ maxWidth: mediumScreen }} render={() => logo} />
              <Media
                query={{ minWidth: mediumScreen }}
                render={() => burgerOrMenu}
              />
            </div>

            <div className="main-menu__right">
              <ul>
                <Online>
                  <Media
                    query={{ minWidth: smallScreen }}
                    render={() => userMenu}
                  />
                  <CartContext.Consumer>
                    {cart => (
                      <li
                        className="main-menu__icon main-menu__cart"
                        onClick={() => {
                          overlayContext.show(
                            OverlayType.cart,
                            OverlayTheme.right
                          );
                        }}
                      >
                        <ReactSVG path={cartImg} />
                        {cart.getQuantity() > 0 ? (
                          <span className="main-menu__cart__quantity">
                            {cart.getQuantity()}
                          </span>
                        ) : null}
                      </li>
                    )}
                  </CartContext.Consumer>
                </Online>
                <Offline>
                  <li className="main-menu__offline">
                    <Media
                      query={{ minWidth: mediumScreen }}
                      render={() => <span>Offline</span>}
                    />
                  </li>
                </Offline>
                <li
                  className="main-menu__search"
                  onClick={() =>
                    overlayContext.show(OverlayType.search, OverlayTheme.right)
                  }
                >
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Search</span>}
                  />
                  <ReactSVG path={searchImg} />
                </li>
              </ul>
            </div>
          </nav>
        );
      }}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;
