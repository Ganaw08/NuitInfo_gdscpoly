/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import "./register.js";
export default function Register(){
 return (
   <><div className="container">
         <div className="form_area">
             <h4 className="title">Register Now</h4>
             <form>
                 <div className="form_group">
                     <label htmlFor="email" className="sub_title">First name</label>
                     <input type="text" id="Fname" className="form_style" title="Must contains text only " required />
                 </div>
                 <div className="form_group">
                     <label htmlFor="text" className="sub_title">Last name</label>
                     <input type="text" id="Lname" className=" form_style"  title=" DUUUDE Must contains text only " required />
                 </div>
                 <div className="form_group">
                     <label htmlFor="email" className="sub_title">Email</label>
                     <input type="email" id="email" className=" form_style" title="DUUUUUUUUUUUUDE PUT A VALID EMAAAIL DUUUUH" required />
                 </div>
                 <div className="form_group">
                     <label htmlFor="date" className="sub_title">date</label>
                     <input type="date" id="date" className=" form_style"  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                 </div>
                 <div className="form_group">
                     <label htmlFor="password" className="sub_title">Password</label>
                     <input type="password" id="password" className=" form_style" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                 </div>
                 <div>
                     <button className="btn">Register</button>
                 </div>
             </form>
         </div>
     </div>
     <div id="error">
          <h3>Name must contain the following:</h3>
          <p id="let" className="invalid">A<b>must be a Text</b> letter</p>
      // eslint-disable @next/next/no-sync-scripts, @next/next/no-sync-scripts
      </div> <script  src="Fname.js"></script>
     <div id="message">
             <h3>Password must contain the following:</h3>
             <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
             <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
             <p id="number" className="invalid">A <b>number</b></p>
             <p id="length" className="invalid">Minimum <b>8 characters</b></p>
         // eslint-disable @next/next/no-sync-scripts, @next/next/no-sync-scripts
         </div> <script  src="register.js"></script>
       </>
        )}