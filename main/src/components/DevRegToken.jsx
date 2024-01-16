import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function DevRegToken() {
  return (
    <span>
      <p>
        Your OsmAnd Cloud activation code is <b>
          <BrowserOnly>
            {() => new URLSearchParams(window.location.search).get("token")}
          </BrowserOnly>
        </b>
      </p>
      <p>Enter the code in OsmAnd App to activate your account.</p>
      <p>
        Read details about OsmAnd Cloud in the{" "}
        <a href="/docs/user/personal/osmand-cloud">documentation</a>.
      </p>
    </span>
  );
}
