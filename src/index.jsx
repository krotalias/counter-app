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
 * @see <a href="../src/index.jsx">source</a>
 * @see https://github.com/fishstick22/mastering-react-mosh
 */

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "fontawesome-4.7";

/**
 * Create a root to display React components inside a browser DOM node.
 * After you’ve created a root, you need to call root.render to display a React component inside of it.
 * @method createRoot
 * @memberof external:react-dom
 * @see https://react.dev/reference/react-dom/client/createRoot
 */
const root = createRoot(document.getElementById("root"));
root.render(<App />);
registerServiceWorker();
