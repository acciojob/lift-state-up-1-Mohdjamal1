import React from "react";



const Child = (ModalState)=>{

    function changeState(){
        ModalState(true);
    }

    return(
        <div style={{backgroundColor:"red"}}>
            <h2>Child Component</h2>
            <button onClick={changeState}>Show Modal</button>
            {props.chilren}
        </div>
    )
}

export default Child;