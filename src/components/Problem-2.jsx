import React, { useState } from "react";
import ModalA from "./Modals/ModalA";
import ModalB from "./Modals/ModalB";

const Problem2 = () => {
  const [showModalA, setShowModalA] = useState(false);
  const [showModalB, setShowModalB] = useState(false);

  const handleShowModalA = () => setShowModalA(true);
  const handleShowModalB = () => setShowModalB(true);
  const handleCloseModalA = () => setShowModalA(false);
  const handleCloseModalB = () => setShowModalB(false);

  const switchingModalsB = () => {
    setShowModalA(false);
    setShowModalB(true);
  };
  const switchingModalsA = () => {
    setShowModalA(true);
    setShowModalB(false);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              onClick={handleShowModalA}
              className="btn btn-lg btn-outline-primary"
              type="button"
            >
              All Contacts
            </button>
            <button
              onClick={handleShowModalB}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      <ModalA
        show={showModalA}
        handleClose={handleCloseModalA}
        switchingModalsB={switchingModalsB}
      />
      <ModalB
        show={showModalB}
        handleClose={handleCloseModalB}
        switchingModalsA={switchingModalsA}
      />
    </>
  );
};

export default Problem2;
