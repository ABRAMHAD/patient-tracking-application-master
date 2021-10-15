import React, { Component } from 'react'
import web from "../images/media/img1.png"
// import web from "../images/media/img3.jpeg"
class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (   
            <footer className="page-footer font-small   pt-4 default-color">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Contact us:</h5>
                                <p>EMAIL: patienttracking@gmail.com</p>
                                <p>Phone no: 7686968650</p>
        
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-4"/>
                            <div className="col-lg-6 mb-md-10 mb-4 text-md-right">
                                <h5 className="text-uppercase font-weight-bold">Address:</h5>
                                    <p> 47/77 Banerjee Para Kolkata-700031</p>
                                    <div className="col-lg-12 order-1 order-lg-2 header-img-md-right">
                        <img src= {web} className="img-fluid animated" alt="Contact img" />
                </div>
                            </div>
                            
                    </div>
                </div>

                
                <div className="footer-copyright text-center py-3 default-color-dark">© 2021 Copyright:
                    <span> patienttracking.com</span>
                </div>
                
          
              </footer>  );
  
        //     <div>
        //         <footer className = "footer" align="center">
                         
        //     <section id="header" className="d-flex align-items-centre" >
        //     <div className="container-fluid nav_bg">
        //         <div className="row">
        //             <div className="col-10 mx-auto">
        //             <div className="row">
        //             <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex ">   
        //            <h1></h1>
        //             <h1>
        //                 Please feel free to Contact
        //                 {/* <strong className="brand-name"> We are here to help you  </strong> */}
        //             </h1>

        //             <div className="col-lg-6 order-1 order-lg-2 header-img">
        //                 <img src= {web} className="img-fluid animated" alt="Contact img" />
        //             </div>
        //             <h2>
        //             We are here to help you 
        //             <h3 className="my-4"></h3>
        //                 We make you healtheir and stronger!!
        //             </h2>
        //             {/* <h3 className="my-4">
        //                 Address- P.O. Box 550 McHenry, IL 60051
        //             </h3>
        //             <h3 className="my-4">
        //                 Phone- 0712 229 4127
        //             </h3> */}
        //             </div>
                   
                    
        //         </div>
        //         </div>
        //     </div>
        // </div>
        // </section>

        //             <span className="text-muted">All Rights Reserved 2021 @Nayan&Ishwari </span>
        //         </footer>
           // </div>
        //)
    }
}

export default FooterComponent



// import React, { Component } from 'react'

// class FooterComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
                 
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <footer className = "footer" align="center">
//                     <span className="text-muted">All Rights Reserved 2021 @Nayan&Ishwari </span>
//                 </footer>
//             </div>
//         )
//     }
// }

// export default FooterComponent