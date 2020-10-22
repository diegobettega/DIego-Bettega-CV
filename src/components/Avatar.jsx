import React from "react";
import profile from "../images/profile.png";

export default function Avatar() {
  return(
    <div>
      <img className="profile-img frame" src={profile} alt="profile" />
    </div>
  )
}
