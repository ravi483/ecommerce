import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-kl70ks54fexg70yv.us.auth0.com"
    clientId="mR4CGbSOcSrC7g1lv0ygfNFoqDXWBBmx"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
