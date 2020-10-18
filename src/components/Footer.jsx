import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <div>
    <a href="mailto:diego.bettega.90@gmail.com" class="link-decoration"><i class="fa fa-envelope footer-symbol"></i></a>
    &nbsp; &nbsp;
    <a href="https://www.linkedin.com/in/diego-bettega-59a649b7/" class="link-decoration"><i class="fa fa-linkedin footer-symbol"></i></a>
    &nbsp; &nbsp;
    <a href="https://github.com/diegobettega?tab=repositories" class="link-decoration"><i class="fa fa-github footer-symbol"></i></a>
    <br /><br />
      <p>ⓒ Copyright {year} Diego Bettega</p>
      </div>
    </footer>
  );
}

export default Footer;
