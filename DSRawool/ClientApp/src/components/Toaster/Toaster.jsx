import React from "react";

function Toaster(props) {
  const { isError, messageTime, message } = props;
  return (
    <div>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "11" }}>
        <div
          id="alerttoaster"
          className={`toast align-items-center text-white border-0 ${
            isError ? "bg-danger" : "bg-success text-white"
          }`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="d-flex">
            <div className="toast-body">{message}</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toaster;
