import { RiCloseLine } from "react-icons/ri";
import { Container } from "./styles";

const Modal = ({ setIsOpen }: any) => {
  return (
    <Container>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Info</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            Item cadastrado com sucesso!
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;