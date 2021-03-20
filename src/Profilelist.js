import React from 'react';

const Profilelist =(props) =>{
    return(
    <div class="mainprofile ma4 tc grow">
            
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="profile" />
            <h1 class="strike-ns">{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}

export default Profilelist;