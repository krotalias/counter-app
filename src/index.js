/**
 * @file
 *
 * Summary.
 * <p>Mastering React by Mosh.</p>
 *
 * Loads the application:
 * a navbar and a set of counters.
 *
 * @author {@link https://codewithmosh.com|Mosh Hamedani}
 * @author Paulo Roma
 * @since 08/10/2021
 * @see <a href="../src/index.js">source</a>
 * @see https://github.com/fishstick22/mastering-react-mosh
 */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "fontawesome-4.7";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
