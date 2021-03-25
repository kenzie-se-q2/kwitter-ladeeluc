
import React from "react";
// import { Eyebrow } from '';
import SignUp from "../components/SignUp";
import image from '../assets/Images/birdhome1.PNG'
export const Registration = (props) => {
  return (
      <>
    <div className="container-xxl" >
    <div className="laura-reg">
        <SignUp />
    <img src={image} className="img-thumbnail"  alt="Logo for birdspace"/>
    </div>
    </div>
      </>
  );
};

export default Registration;

// This component will be a the Route from clicking the Sign up button
// on the Home view.

// The following component elements display correctly:
// a. Eyebrow
// b. Title
// c. Sub- title
// d. CTA(call to action) - registration of user
// e. Image
// Each icon block or logo block contains following elements:
// a. icon
// b. Sub-title
// c. Body text
// On click of the CTA, user is navigated to specific page

// need to look into icons.

// the button will go to <Feed/>
// import React from 'react';
// import { useStore } from '../store/store';
// import SignUp from '../components/SignUp';


// export const Registration = (props) => {
//         const user = useStore((state) => state.user)
//         console.log(user)
//     return (
//         <div classNameName='registration'>
//             <>
//             <h1>Logo</h1>
//             <SignUp/>
//             </>
//         </div>
//     )
// }

// export default Registration;
// >>>>>>> Stashed changes
