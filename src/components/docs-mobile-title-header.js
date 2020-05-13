import React from "react"

import DocsTitle from "./docs-title"

const DocsMobileTitleHeader = () => (
  <div className="DocsMobileTitleHeader">
    <a className="DocsMobileTitleHeader--logo-link Link Link-without-underline" href="./"> {/* TODO - href */}
      <div className="DocsNavLogoLockup">
        <div className="DocsNavLogoLockup--logo">
          {/* TODO - make a logo component */}
          <svg id="DocsMobileTitleHeaderLogomark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-labelledby="DocsMobileTitleHeaderLogomark--title DocsMobileTitleHeaderLogomark--desc" fill="currentColor">
            <defs>
              <title id="DocsMobileTitleHeaderLogomark--title">Cloudflare <DocsTitle/> dashboard logomark</title>
              <desc id="DocsMobileTitleHeaderLogomark--desc">The logomark used to represent Cloudflare <DocsTitle/> inside the Cloudflare dashboard</desc>
            </defs>
            <path d="M13.112 9.832c.164-.276.362-.528.59-.75l3.71 6.508-4.02 7.054a3.742 3.742 0 000 3.712l4.02 7.056a14410.466 14410.466 0 00-3.705 6.511 3.648 3.648 0 01-.595-.755L5.495 26.3a3.517 3.517 0 010-3.6l7.617-12.868zM31.617 41h-5.354l8.346-14.644a3.742 3.742 0 000-3.712L26.263 8h5.354c1.355 0 2.602.702 3.27 1.832L42.506 22.7a3.517 3.517 0 010 3.6l-7.617 12.868c-.669 1.13-1.916 1.832-3.27 1.832zm-15.234 0c-.088 0-.176-.003-.263-.009l1.504-2.644c1.564-2.747 3.91-6.867 7.04-12.36a3 3 0 000-2.974L16.114 8.01c.089-.006.179-.009.269-.009h6.858l9.095 15.959c.193.338.193.744 0 1.082L23.24 41h-6.858z"/>
          </svg>
        </div>

        <span className="DocsNavLogoLockup--text"><DocsTitle/></span>
      </div>
    </a>
  </div>
)

export default DocsMobileTitleHeader
