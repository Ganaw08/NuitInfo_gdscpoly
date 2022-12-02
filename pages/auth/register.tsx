/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-comment-textnodes */
export default function Register(): JSX.Element {
 return (
     <>
     <div className="container">
         <div className="form_area">
             <h4 className="title">Register Now</h4>
             <form>
                 <div className="form_group">
                     <label htmlFor="email" className="sub_title">Email</label>
                     <input type="email" id="email" className="form_style" />
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
     </div><div id="message">
             <h3>Password must contain the following:</h3>
             <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
             <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
             <p id="number" className="invalid">A <b>number</b></p>
             <p id="length" className="invalid">Minimum <b>8 characters</b></p>
         // eslint-disable @next/next/no-sync-scripts, @next/next/no-sync-scripts
         </div><script src="register.js"></script>
         </>
          )}