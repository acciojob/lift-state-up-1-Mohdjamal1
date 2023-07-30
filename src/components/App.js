
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {

  let [showModal,setShowModal] = useState(false);
  return (
    <div>
        <div className="parent">
            <h1>Parent Component</h1>
            <Child ModalState = {setShowModal}>
              if (showModal) {
                <div>
                <h2>Modal Content</h2>
                <p>This is the modal content.</p>
                </div>
              }
              </Child>
        </div>
    </div>
  )
}

export default App
