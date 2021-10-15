import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';

import GalleryCarousel from './GalleryCarousel';


class Gallery extends Component {
    
   
    render() { 
        return ( 
        <div className="bg-info">
            {/* <HeaderComponent /> */}

            <br>
            </br>
            <GalleryCarousel/>
            
            
</div>

);
    }
}
 
export default Gallery;






// import React from 'react';
// import web from "../images/media/img1.png"

// const Gallery = () => {
//     return (
      
//             <section id="header" className="d-flex align-items-centre" >
//             <div className="container-fluid nav_bg">
//                 <div className="row">
//                     <div className="col-10 mx-auto">
                
//                     <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-centre flex-column">   
//                    <h1></h1>
//                     <h1>
//                         Please feel free to Contact
//                         <strong className="brand-name"> We are here to help you  </strong>
//                     </h1>
//                     <h2>
//                         We make you healtheir and stronger!!
//                     </h2>
//                     <h3 className="my-4">
//                         Address- P.O. Box 550 McHenry, IL 60051
//                     </h3>
//                     <h3 className="my-4">
//                         Phone- 0712 229 4127
//                     </h3>
//                     </div>
                   
//                     <div className="col-lg-6 order-1 order-lg-2 header-img">
//                         <img src= {web} className="img-fluid animated" alt="Contact img" />
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//         </section>

  
//     );
// }


// export default Gallery;