import React from "react";

const Footer=() =>{

  const date =new Date()
  let year=date.getFullYear();

    return (
    <div>
    <footer>
    <p>copyright ©{year}</p>
    </footer>
    </div>
    )
    ;
  
  }
  
  export default Footer;
  