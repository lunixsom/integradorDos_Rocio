import React from "react";

function Modal () {
  showModal,
  closeModal

  }
  
  {

  
  return 
    showModal ?
    <div className="modal_container">
      <div className="modal-content">
        <h2>Modal Content</h2>
        <button label={"Cerrar"} onClick={closeModal}/>

      </div>
    </div>
    : null;
}
export default Modal;