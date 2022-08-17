import { useState, useEffect } from "react";
import * as SubPlanAPI from "../../utilities/subplan-api";
import AddExitTicketPage from "../AddExitTicketPage/AddExitTicketPage";
import AddFirstFivePage from "../AddFirstFivePage/AddFirstFivePage";
import AddCIPage from "../AddCIPage/AddCIPage";
import AddLessonPlanPage from "../AddLessonPlanPage/AddLessonPlanPage";
import AddSubPlanNameForm from "../../components/AddSubPlanNameForm/AddSubPlanNameForm";
import CICard from "../../components/Cards/CICard";
import FirstFiveCard from "../../components/Cards/FirstFiveCard";
import LessonPlanCard from "../../components/Cards/LessonPlanCard";
import ExitTicketCard from "../../components/Cards/ExitTicketCard";
import SubPlanNameCard from "../../components/Cards/SubPlanNameCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function NewSubPlanPage() {
  const [populatedModules, setPopulatedModules] = useState([
    null,
    null,
    null,
    null,
    null,
  ]);

  const [toggleState, setToggleState] = useState(false);

  const [activeModule, setActiveModule] = useState(null);

  const [error, setError] = useState("");

  const modules = [
    {
      name: "What do you want to call your new Sub Plan?",
      module: (
        <AddSubPlanNameForm
          setActiveModule={setActiveModule}
          setPopulatedModules={setPopulatedModules}
          populatedModules={populatedModules}
        />
      ),
    },
    {
      name: "Add Classroom Instructions",
      module: (
        <AddCIPage
          setActiveModule={setActiveModule}
          setPopulatedModules={setPopulatedModules}
          populatedModules={populatedModules}
        />
      ),
    },
    {
      name: "Add First 5ive",
      module: (
        <AddFirstFivePage
          setActiveModule={setActiveModule}
          setPopulatedModules={setPopulatedModules}
          populatedModules={populatedModules}
        />
      ),
    },
    {
      name: "Add Lesson Plan",
      module: (
        <AddLessonPlanPage
          setActiveModule={setActiveModule}
          setPopulatedModules={setPopulatedModules}
          populatedModules={populatedModules}
        />
      ),
    },
    {
      name: "Add Exit Ticket",
      module: (
        <AddExitTicketPage
          setActiveModule={setActiveModule}
          setPopulatedModules={setPopulatedModules}
          populatedModules={populatedModules}
        />
      ),
    },
  ];

  useEffect(
    function () {
      setPopulatedModules(populatedModules);
    },
    [toggleState]
  );

  const populatePage = populatedModules.map(function (module, idx) {
    if (module && idx === 0) {
      return (
        <SubPlanNameCard module={module} idx={idx} removeCard={removeCard} />
      );
    } else if (module && idx === 1) {
      return <CICard module={module} idx={idx} removeCard={removeCard} />;
    } else if (module && idx === 2) {
      return (
        <FirstFiveCard module={module} idx={idx} removeCard={removeCard} />
      );
    } else if (module && idx === 3) {
      return (
        <LessonPlanCard module={module} idx={idx} removeCard={removeCard} />
      );
    } else if (module && idx === 4) {
      return (
        <ExitTicketCard module={module} idx={idx} removeCard={removeCard} />
      );
    } else {
      return (
        <Row>
          <Col>
            <Button
              className="mt-3"
              variant="success"
              size="lg"
              style={{ fontSize: 30 }}
              onClick={() => setActiveModule(modules[idx].module)}
            >
              {modules[idx].name}
            </Button>
          </Col>
        </Row>
      );
    }
  });

  function removeCard(idx) {
    console.log("clicked");
    const populatedModulesCopy = populatedModules;
    populatedModulesCopy.splice(idx, 1, null);
    setPopulatedModules(populatedModulesCopy);
    setToggleState(!toggleState);
  }

  async function createSubPlan() {
    try {
      await SubPlanAPI.createSubPlan(populatedModules);
      setPopulatedModules([null, null, null, null, null]);
    } catch {
      setError("Failed to save Sub Plan");
    }
  }

  return (
    <>
      <br />
      <div>
        {activeModule ? (
          <div>{activeModule}</div>
        ) : (
          <Container>
            {populatePage}
            <Row>
              <Col>
                <Button
                  className="mt-3"
                  onClick={createSubPlan}
                  variant="success"
                  type="submit"
                  disabled={populatedModules.some((module) => module == null)}
                >
                  Create Sub Plan
                </Button>
              </Col>
            </Row>
          </Container>
        )}
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </>
  );
}
