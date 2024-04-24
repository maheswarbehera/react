import React, { memo } from "react";

function UseCallBackHookChild({ Learning, count }) {
  console.log("UseCallBackHookChild component");
  return (
    <>
  
    </>
  )
 
}

export default memo(UseCallBackHookChild);

// const = memo(({Learning}) => {
//     console.log('child component');
//     return(
//         <>
//         </>
//     )
//  })
