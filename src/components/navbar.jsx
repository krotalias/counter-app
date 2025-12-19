/**
 * @file
 *
 * Summary.
 * <p>A Stateless Functional Component.</p>
 *
 * Instead of using a class we use a function that returns a react element.
 *
 * @author {@link https://codewithmosh.com|Mosh Hamedani}
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/components/navbar.jsx">source</a>
 */

import React from "react";
import logo from "../logo.svg";
import vercel from "../vercel.png";
import Boot_logo from "../Bootstrap_logo.svg";

/**
 * <p>A function to return a <a href="/cwdc/5-bootstrap/5.4.html">navbar</a> element.</p>
 *
 * To simplify this code, we use objetc destructuring, to avoid using this.props, but
 * just totalCounters.
 *
 * @return {HTMLElement} a &lt;nav&gt; tag with the total of non-zero counters.
 * @see {@link https://getbootstrap.com/docs/5.0/components/navbar/ Navbar}
 * @see {@link https://getbootstrap.com/docs/5.0/components/badge/ Badges}
 */
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div style={{ fontSize: "32px" }}>
        {" Total "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </div>
      <a href="https://react.dev">
        <img
          className="App-logo"
          src={logo}
          style={{ height: "48px" }}
          alt="logo"
        />
      </a>
      <a href="https://vercel.com/krotalias-projects/counter-app">
        <img src={vercel} style={{ height: "48px" }} alt="vercel" />
      </a>
      <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/">
        <img src={Boot_logo} style={{ height: "48px" }} alt="logo" />
      </a>
      <a
        className="navbar-brand"
        href="https://www.youtube.com/watch?v=Ke90Tje7VS0"
      >
        Watch: "React for Beginners"
      </a>
    </nav>
  );
};

export default NavBar;
