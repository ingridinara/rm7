import React from 'react';


export default (props) => {
    const StyleLine = {
        fontSize: '20px',
        padding: '10px', 
        fontFamily: ' Times New Roman', 
        color: 'darkblue',
        fontWeight: 'Bold'}
    return (
     
   <div>
      
   <div style={StyleLine}>{props.text}</div>
 
   <br/>
   </div>
    );
}