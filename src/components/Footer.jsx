import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="white-section" id="footer">
    <div class="container-fluid">

  <br /><br />
  <p>Diego Bettega Copyright ⓒ {year}</p>
</div>

    </footer>
  );
}

export default Footer;
