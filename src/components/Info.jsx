import React, { useState } from "react";

export default function Info() {
  return (
    <div>
    <div className="col-md-8 row">

      <div className="col-md-1" style={{ backgroundColor: "green" }}>
        <i className="fa fa-phone profile-icon"></i>
      </div>
      <div style={{ backgroundColor: "red" }} className="col-md-11">
        +44 (0) 7478 992 706
      </div>

      <div className="col-md-1" style={{ backgroundColor: "green" }}>
        <i className="fa fa-phone profile-icon"></i>
      </div>
      <div style={{ backgroundColor: "red" }} className="col-md-11">
        +44 (0) 7478 992 706
      </div>
      
    </div>


    </div>
  );
}
