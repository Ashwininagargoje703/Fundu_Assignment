import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="main">
      <div className="inDiv">
        <div className="flexDiv">
          <div>
            {" "}
            <i class="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-youtube fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
          </div>

          <div>
            <i class="fa-regular fa-hand-pointer fa-2x"></i>
            <span>Back to top</span>
          </div>
        </div>
        <div className="middleDiv"></div>
        <div>
          <h3 style={{ color: "#FFFFFF" }}>Made By Our Company</h3>
          <span>Battle Breakers</span>
          <span>Robo Recall</span>
          <br />
          <span>Fortnite</span>
          <span>Shadow Complex</span>
          <br />
          <span>Infinity Blade</span>
          <span>Unreal Tournament</span>
        </div>
        <hr />
        <div>
          <p style={{ color: "#f2eaea", fontSize: "14px" }}>
            All rights reserved. Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Non-US transactions through Games International, S.à r.l.
          </p>
        </div>
        <span>Terms Of Services</span>
        <span>Privacy Policy</span>
        <span>Store Policy</span>
        <span>Account Security</span>
      </div>
    </div>
  );
};
