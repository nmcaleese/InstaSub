import { useState, useEffect } from "react";
import ViewFirstFiveForm from "../../components/ViewFirstFiveForm/ViewFirstFiveForm";
import FirstFiver from "../../components/FirstFive/FirstFive";
import CreateNewFirstFiveForm from "../../components/CreateNewFirstFiveForm/CreateNewFirstFiveForm";
import * as FirstFiveAPI from "../../utilities/firstFive-api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function AddFirstFivePage({
  setActiveModule,
  setPopulatedModules,
  populatedModules,
}) {
  const [index, setIndex] = useState([]);
  const [activeFirstFive, setActiveFirstFive] = useState(null);

  const indexFirstFives = index.map((FirstFive) => (
    <FirstFiver
      FirstFive={FirstFive}
      key={FirstFive._id}
      addFirstFive={addFirstFive}
      viewFirstFive={viewFirstFive}
    />
  ));

  function addFirstFive(FirstFive) {
    const populatedModulesCopy = populatedModules;
    populatedModulesCopy.splice(2, 1, FirstFive);
    setPopulatedModules(populatedModulesCopy);
    setActiveModule(null);
  }

  function handleAdd(newFirstFive) {
    setIndex([...index, newFirstFive]);
  }

  function handleUpdate(updatedFirstFive) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (FirstFive) => FirstFive._id === updatedFirstFive._id
    );
    indexCopy.splice(idx, 1, updatedFirstFive);
    setIndex(indexCopy);
    setActiveFirstFive(null);
  }

  function handleRemove(deletedFirstFiveId) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (FirstFive) => FirstFive._id === deletedFirstFiveId
    );
    indexCopy.splice(idx, 1);
    setIndex(indexCopy);
    setActiveFirstFive(null);
  }

  async function viewFirstFive(FirstFive) {
    const viewFirstFive = await FirstFiveAPI.viewFirstFive(FirstFive._id);
    setActiveFirstFive(
      <ViewFirstFiveForm
        FirstFive={viewFirstFive}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
    );
  }

  useEffect(function () {
    async function getFirstFives() {
      const FirstFives = await FirstFiveAPI.getAll();
      setIndex(FirstFives);
    }
    getFirstFives();
  }, []);
  return (
    <Container fluid>
      {activeFirstFive ? (
        <Row>{activeFirstFive}</Row>
      ) : (
        <>
          <Row>
            <Col
              md={{ span: 8, offset: 2 }}
              lg={{ span: 8, offset: 2 }}
              xl={{ span: 6, offset: 3 }}
            >
              <CreateNewFirstFiveForm handleAdd={handleAdd} />
              <div className="d-grid gap-2 mt-2">
              <Button
                variant="primary"
                size="sm"
                style={{ fontSize: 20 }}
                onClick={() => setActiveModule(null)}
              >
                Back
              </Button>
            </div>
            </Col>
          </Row>
          <Row xs={1} md={4} lg={4} xl={8} className="g-4">
            {indexFirstFives}
          </Row>
        </>
      )}
    </Container>
  );
}
