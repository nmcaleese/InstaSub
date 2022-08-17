import { useState, useEffect } from "react";
import ViewLessonPlanForm from "../../components/ViewLessonPlanForm/ViewLessonPlanForm";
import LessonPlaner from "../../components/LessonPlan/LessonPlan";
import CreateNewLessonPlanForm from "../../components/CreateNewLessonPlanForm/CreateNewLessonPlanForm";
import * as LessonPlanAPI from "../../utilities/lessonPlan-api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddLessonPlanPage({
  setActiveModule,
  setPopulatedModules,
  populatedModules,
}) {
  const [index, setIndex] = useState([]);
  const [activeLessonPlan, setActiveLessonPlan] = useState(null);

  const indexLessonPlans = index.map((LessonPlan) => (
    <LessonPlaner
      LessonPlan={LessonPlan}
      key={LessonPlan._id}
      addLessonPlan={addLessonPlan}
      viewLessonPlan={viewLessonPlan}
    />
  ));

  function addLessonPlan(LessonPlan) {
    const populatedModulesCopy = populatedModules;
    populatedModulesCopy.splice(3, 1, LessonPlan);
    setPopulatedModules(populatedModulesCopy);
    setActiveModule(null);
  }

  function handleAdd(newLessonPlan) {
    setIndex([...index, newLessonPlan]);
  }

  function handleUpdate(updatedLessonPlan) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (LessonPlan) => LessonPlan._id === updatedLessonPlan._id
    );
    indexCopy.splice(idx, 1, updatedLessonPlan);
    setIndex(indexCopy);
    setActiveLessonPlan(null);
  }

  function handleRemove(deletedLessonPlanId) {
    const indexCopy = [...index];
    const idx = indexCopy.findIndex(
      (LessonPlan) => LessonPlan._id === deletedLessonPlanId
    );
    indexCopy.splice(idx, 1);
    setIndex(indexCopy);
    setActiveLessonPlan(null);
  }

  async function viewLessonPlan(LessonPlan) {
    const viewLessonPlan = await LessonPlanAPI.viewLessonPlan(LessonPlan._id);
    setActiveLessonPlan(
      <ViewLessonPlanForm
        LessonPlan={viewLessonPlan}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
    );
  }

  useEffect(function () {
    async function getLessonPlans() {
      const LessonPlans = await LessonPlanAPI.getAll();
      setIndex(LessonPlans);
    }
    getLessonPlans();
  }, []);
  return (
    <Container fluid>
      {activeLessonPlan ? (
        <Row>{activeLessonPlan}</Row>
      ) : (
        <>
          <Row>
            <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
              <CreateNewLessonPlanForm handleAdd={handleAdd} />
            </Col>
          </Row>
          <Row xs={1} md={4} lg={4} xl={8} className="g-4">
            {indexLessonPlans}
          </Row>
        </>
      )}
    </Container>
  );
}
