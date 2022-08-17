import { useState, useEffect } from "react";
import ViewExitTicketForm from "../../components/ViewExitTicketForm/ViewExitTicketForm";
import ExitTicketer from "../../components/ExitTicket/ExitTicket";
import CreateNewExitTicketForm from "../../components/CreateNewExitTicketForm/CreateNewExitTicketForm";
import * as ExitTicketAPI from "../../utilities/exitTicket-api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddExitTicketPage({
  setActiveModule,
  setPopulatedModules,
  populatedModules,
}) {
  const [index, setIndex] = useState([]);
  const [activeExitTicket, setActiveExitTicket] = useState(null);

  const indexExitTickets = index.map((ExitTicket) => (
    <ExitTicketer
      ExitTicket={ExitTicket}
      key={ExitTicket._id}
      addExitTicket={addExitTicket}
      viewExitTicket={viewExitTicket}
    />
  ));

  function addExitTicket(ExitTicket) {
    const populatedModulesCopy = populatedModules;
    populatedModulesCopy.splice(4, 1, ExitTicket);
    setPopulatedModules(populatedModulesCopy);
    setActiveModule(null);
  }

  function handleAdd(newExitTicket) {
    setIndex([...index, newExitTicket]);
  }

  function handleUpdate(updatedExitTicket) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (ExitTicket) => ExitTicket._id === updatedExitTicket._id
    );
    indexCopy.splice(idx, 1, updatedExitTicket);
    setIndex(indexCopy);
    setActiveExitTicket(null);
  }

  function handleRemove(deletedExitTicketId) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (ExitTicket) => ExitTicket._id === deletedExitTicketId
    );
    indexCopy.splice(idx, 1);
    setIndex(indexCopy);
    setActiveExitTicket(null);
  }

  async function viewExitTicket(ExitTicket) {
    const viewExitTicket = await ExitTicketAPI.viewExitTicket(ExitTicket._id);
    setActiveExitTicket(
      <ViewExitTicketForm
        ExitTicket={viewExitTicket}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
    );
  }

  useEffect(function () {
    async function getExitTickets() {
      const ExitTickets = await ExitTicketAPI.getAll();
      setIndex(ExitTickets);
    }
    getExitTickets();
  }, []);
  return (
    <Container fluid>
      {activeExitTicket ? (
        <Row>{activeExitTicket}</Row>
      ) : (
        <>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
              <CreateNewExitTicketForm handleAdd={handleAdd} />
            </Col>
          </Row>
          <Row xs={1} md={4} lg={4} xl={8} className="g-4">
            {indexExitTickets}
          </Row>
        </>
      )}
    </Container>
  );
}
