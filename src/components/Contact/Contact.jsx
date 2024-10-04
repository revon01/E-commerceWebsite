import React from 'react'
import Question from './Question'
import Footer from './Footer'
import HelpCenter from './HelpCenter'
import HelpDesk from './HelpDesk'
import NewAccordion from './NewAccordian'
// import { Accordion } from '@mui/material'


function Contact() {
  return (
    <div>
      <HelpCenter/>
   
  <HelpDesk/>
  <NewAccordion/>
  <Question/>
   <Footer/>

    </div>
  )
}

export default Contact
