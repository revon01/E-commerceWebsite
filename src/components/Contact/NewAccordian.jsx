import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const NewAccordion = () => {
  return(
    <div>
  
     <div
      style={{
        backgroundColor:  "#a0a0b4",
        borderRadius: "10px",
        padding: "10px",
        paddingBottom:"100px",
        width:"100%",
        // marginBottom:"300px"
}}>
    
        
        <h1
          style={{
            // color: "#373737",
            fontSize: "32px",
            textAlign: "center",
            fontWeight:"bold",
            fontFamily:"cursive",
            marginTop:"50px",
            marginBottom:"30px"
          }}>
        
          Popular Searched Questions
        </h1>
        <div
        
      style={{
        
        backgroundColor:"white",
        borderRadius: "10px",
        padding: "10px",
        width:"80%",
      margin:"auto"

       
      }}>

        
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            marginLeft: "25px",
            color: "#373737",
            fontWeight:"bold",
            padding:"20px",
            fontSize:"20px",
          
          }}
        >
          How do I join the affiliate program?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            marginLeft: "25px",
            color: "#424242",
          }}
        >
          Simply sign up through our affiliate program page by filling out the
          registration form. Once approved, you'll receive a unique affiliate
          link to start promoting our products.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            marginLeft: "25px",
            color: "#373737",
            fontWeight:"bold",
            padding:"20px",
            fontSize:"20px",
          }}
        >
          What commission rates do you offer?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          We offer over 400 unique products to support a wide variety of
          wellness needs. The majority of these products are available through
          our website; however, there are some that are available exclusively
          through our retailer partners.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            marginLeft: "25px",
            color: "#373737",
            fontWeight:"bold",
            padding:"20px",
            fontSize:"20px",
          }}
        >
          How and when do I get paid?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          For over 50 years, we have set a standard for trust, safety, and
          efficacy. During this pandemic, we remain committed to producing the
          highest quality products possible, from ingredient sourcing to
          rigorous testing and approvals, before they make their way to you
          and your family.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
            marginLeft: "25px",
            color: "#373737",
            fontWeight:"bold",
            padding:"20px",
            fontSize:"20px",
          }}>
          What marketing resources are available to affiliates?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          Our headquarters is in Green Bay, WI. We also have an office in
          Minneapolis, and a distribution center in Green Bay, WI.
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
    </div>
  );
};

export default NewAccordion;
