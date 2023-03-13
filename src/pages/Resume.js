import React from 'react';
import pdf from '../assets/images/ZuzanaKnightova2023.pdf'



function Resume() {
    return (
      <div>
        <object width="100%" height="800" data={pdf} type="application/pdf">   </object>

        
      </div>
    );
  }
  
  export default Resume;