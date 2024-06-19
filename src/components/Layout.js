import React from "react";
import Navigation, { HorizontalList } from "react-key-navigation";

import Sidebar from "./Sidebar.js";

export default function Layout({ children }) {
  return (
    <Navigation>
      <div id="container">
        <HorizontalList>
          <Sidebar />
          <div class="mainbox">{children}</div>
        </HorizontalList>
      </div>
    </Navigation>
  );
}
