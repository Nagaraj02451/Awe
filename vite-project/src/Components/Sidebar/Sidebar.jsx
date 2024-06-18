import React from "react";
import "./Sidebar.css";
// import navbarItems from "../NavbarItems";
// import { FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Sidebar = ({ isopen, toggle }) => {
  let opacityClasses = ["sidebar-container"];
  if (isopen) {
    opacityClasses.push("opacity-on");
  } else {
    opacityClasses.push("opacity-off");
  }

  return (
    <div
      className={opacityClasses.join(" ")}
      isopen={isopen.toString()}
      // onClick={toggle}
    >
      <div className="icon">
<div className="iconkop">
<a href='/'> <div className='nav11'> <img src='/images/navlogo.svg'></img></div></a>
<div  onClick={toggle}><img src="/images/close.svg" /></div>
</div>
        {/* <FaTimes className="close-icon" /> */}
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
<hr />
<div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne" >
      <button class="accordion-button" id="hgfuj" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      Industries
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body"  id="ghduyf">
           <div className="tyfuyi">
               <div>
                <p className="rftgh">Agriculture</p>
                <p className="rftgh">Manufacturing</p>
                <p className="rftgh">Textile</p>
                <p className="rftgh">Gems and Jewelry</p>
                <p className="rftgh">FMCG</p>
                <p className="rftgh">Fashion</p>
                <p className="rftgh">Retail</p>
                <p className="rftgh">Ecommerce</p>
                <p className="rftgh">F&B</p>
               </div>
               <div>
                <p className="rftgh">HORECA</p>
                <p className="rftgh">Hospitality</p>
                <p className="rftgh">Tourism</p>
                <p className="rftgh">Real Estate</p>
                <p className="rftgh">Law Firms</p>
                <p className="rftgh">Auditing Firms</p>
                <p className="rftgh">Education and Training</p>
                <p className="rftgh">Healthcare</p>
               </div>
           </div>
      </div>
    </div>
    
  <hr />
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" id="hgfuj"  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Capabilities
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
    <div class="accordion-body"  id="ghduyf">
           <div className="tyfuyi">
               <div>
   
                <p className="rftgh">Agriculture</p>
                <p className="rftgh">Manufacturing</p>
                <p className="rftgh">Textile</p>
                <p className="rftgh">Gems and Jewelry</p>
                <p className="rftgh">FMCG</p>
                <p className="rftgh">Fashion</p>
                <p className="rftgh">Retail</p>
                <p className="rftgh">Ecommerce</p>
                <p className="rftgh">F&B</p>
               </div>
               <div>
                <p className="rftgh">HORECA</p>
                <p className="rftgh">Hospitality</p>
                <p className="rftgh">Tourism</p>
                <p className="rftgh">Real Estate</p>
                <p className="rftgh">Law Firms</p>
                <p className="rftgh">Auditing Firms</p>
                <p className="rftgh">Education and Training</p>
                <p className="rftgh">Healthcare</p>
               </div>
      
           </div>
      </div>
      </div>
  </div>

</div>
               {/* <hr />
               <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                aria-expanded="true" aria-controls="collapseOne">
            Industries
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
      
       </div>
        </div>
    </div>

   
</div>
               <hr />
               <div class="accordion" id="accordionExample1">
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1"
                aria-expanded="true" aria-controls="collapseOne1">
    Capabilities
            </button>
        </h2>
        <div id="collapseOne1" class="accordion-collapse collapse " data-bs-parent="#accordionExample1">
            <div class="accordion-body">
      
       </div>
        </div>
    </div>

   
</div> */}
               <hr />
               <div id="hgfuj">About Us</div>
               <hr />
               <div id="hgfuj">Contact</div>

               <div className="menufooter">
                <p id="hgfv">Drop us a line:</p>
                <div className="fonalop">
                hello@aweganyz.com
                <img src="/images/arrr1.svg" />
              </div>
               </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
