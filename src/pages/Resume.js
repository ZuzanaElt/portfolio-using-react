import React from 'react';
import pdf1 from '../assets/images/ZuzanaKnightovaCV.pdf';
import pdf2 from '../assets/images/ZuzanaKnightovaFeb2024ENG.pdf';



function Resume() {
    return (
      <div>
        <object width="100%" height="600" data={pdf1} type="application/pdf">   </object>
        <object width="100%" height="600" data={pdf2} type="application/pdf">   </object>

        
      </div>
    );
  }
  
  export default Resume;