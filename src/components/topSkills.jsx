import React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import { height } from '@mui/system';


function TopSkills({value,skill}) {
    return ( <>

{/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop:"10px"}}><p style={{ marginRight: "20px"}} >{skill}</p> &nbsp;
<span className=''>  <LinearProgress determinate value={value} style={{width:"250px"}}
        /></span>
</div> */}
     <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          width: "100%", // Ensures consistent alignment across all rows
        }}
      >
        {/* Skill name with a fixed width to align properly */}
        <p
          style={{
            marginRight: "16px",
            width: "100px", // Fixed width for alignment
            textAlign: "left", 
            fontWeight:"500"// Aligns the text on the left
          }}
        >
          {skill}
        </p>
        <span style={{ flexGrow: 1 }}>
          <LinearProgress
            determinate
            value={value}
            style={{
              width: "200px",
                 color:"black",
              background: "#A8A8A8"
            
            }}
          />
        </span>
      </div>
      
    
    </> );
}

export default TopSkills;