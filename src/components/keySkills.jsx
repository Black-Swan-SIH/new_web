import { borderRadius, fontSize, minWidth, padding } from '@mui/system';
import React, { useState } from 'react';

const ExpandableDiv = ({name,content,borderRadius,padding,paddingLeft,position,cursor,width,minWidth,fontSize,backgroundColor,fontSize1,onClick}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
    style={{
      borderRadius: borderRadius,
      padding: padding,
      paddingLeft: paddingLeft,
      position: position,
      
      alignItems: "center",
      alignContent:"center",
      cursor: cursor,
      width: isExpanded ? "fit-content" : width, // Wider when collapsed
      minWidth: minWidth, // Ensures the div remains wide
      transition: "all 0.3s ease-in-out",
      ...(isExpanded && { backgroundColor: backgroundColor })
    }}
    onClick={toggleExpand}
  >
  
    <div
    className='text-muted'
      style={{ fontWeight:"500",
        fontSize: fontSize,
      }}
    >
      {/* Core Development */}
      {name}
    </div>

  
    <div
      onClick={toggleExpand}
      style={{
        position: "absolute",
        top: "6px",
        right: "8px",
        fontSize: "20px",
        fontWeight: "400",
        transform: isExpanded ? "rotate(45deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
    >
      +
    </div>

   
    {isExpanded && (
      <div
        style={{
          marginTop: "5px",
          fontSize1: fontSize1,
          width:"270px"
        }}
      >
         {content}
    
      </div>
    )}
  </div>
  );
};

export default ExpandableDiv;
