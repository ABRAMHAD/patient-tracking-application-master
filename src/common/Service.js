import React from 'react'
const Service=()=>{
    return(
      <section class="Services">
            <h1>Services we Provides</h1>
            <p>We providing following services</p>
            <div class="rowone">
                <div class="service-col">
                    <h3>Critical Care</h3>
                    <p>Our highly trained critical care intensivists treat the most severely ill and injured persons in this department. 
                       Patient Tracking Hospital has specialist to take comprehensive care of patients going through major trauma or surgery.</p>
                </div>
                <div class="service-col">
                    <h3>Internal Medicines</h3>
                    <p>This Hospital offers the best medical facility relating to internal medicine, which helps prevent, diagnose 
                        and treat a wide array of diseases. We have a specialized team of doctors that focus on treating patients without 
                        going through surgeries and other invasive treatment.</p>
                </div>
                <div class="service-col">
                    <h3>Plastic surgery and Dermatology</h3>
                    <p>Patient Tracking Hospital Department of Plastic surgery and Dermatology provides a comprehensive treatment option to all its patients,
                      including cosmetic, plastic, and reconstructive surgery. We focus on the broad category of plastic surgery and not only aesthetic surgery.</p>
                </div>
            </div>

            <h1>Patient Feedback</h1>
            <p>We thank you for choosing Patient Tracking Hospitals for your treatment.Your feedback is our achievement. 
               We have taken a number of steps to ensure that the services rendered to you are fully met.</p>
               <div className="container">
            <div class="rowone">
                <div class="Reviews-col">
                    <h3>Denise Chakranarayan</h3>
                    <p>I have been comming regulatly to this hospital for the last 2 years and have never been disappointed
                       with the level of care, professionalism and efficiency I have witnessed. All the doctors are brilliant
                       and well versed in their fields</p>
                </div>
                <div class="Reviews-col">
                    <h3>Dineshchandra Gham</h3>
                    <p>The Treatment and care received from the doctors and staff has helped my father recover sonner.
                        Doctors provided a timely counselling everyday and kept us to date on the condition and the 
                        progress made.</p>
                </div>

                <div class="Reviews-col">
                    <h3>Anupam Bendle</h3>
                    <p>The treatment and care received from the doctors and staff has helped my father recover sooner.
                       Doctors provided a timely counselling everyday and kept us up to date on the condition and the 
                       progress made.</p>
                </div>
            </div>
            </div>
        </section>

        
    );
  };
   export default Service;