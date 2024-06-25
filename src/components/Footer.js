import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import  "../styles/home.css";
function Footer() {
  return (
    <div>
       <footer className="Footer">
        <div className="mail">
        <p> <EmailIcon/>cc@samanapern.com</p>
        </div>
     
      <p>© 2024samanapern.com</p>
    </footer>
    </div>
  )
}

export default Footer
