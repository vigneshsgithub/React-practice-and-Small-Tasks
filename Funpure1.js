import React from 'react';

  function Funpure1(props){
 return(
    <div>
      <h1>{props.name}</h1>
    </div>
)
}
export default React.memo(Funpure1)