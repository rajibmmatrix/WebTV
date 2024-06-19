import React from "react";
import { HorizontalList } from "react-key-navigation";

import Sidebar from "./Sidebar.js";

export default function Layout({ children }) {
  return (
    <div id="container">
      <HorizontalList>
        <Sidebar />
        <div class="mainbox">{children}</div>
      </HorizontalList>
    </div>
  );
}
