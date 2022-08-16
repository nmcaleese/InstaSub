import { useState, useEffect } from 'react'
import SubPlaner from '../../components/SubPlan/SubPlan'
import * as subPlanAPI from '../../utilities/subplan-api'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



export default function SubPlanIndexPage() {

    const [activeSubPlan, setActiveSubPlan] = useState(null)
    const [error, setError] = useState('')
    const [index, setIndex] = useState([])

    const indexSubPlans = index.map(SubPlan => <SubPlaner SubPlan={SubPlan} key={SubPlan._id} deleteSubPlan={deleteSubPlan}/>)

    useEffect( function(){
        async function getSubPlans() {
            const subPlans = await subPlanAPI.getAll();
            console.log(subPlans)
            setIndex(subPlans)
        }
        getSubPlans()
    },[])
    
    async function deleteSubPlan(SubPlan){
        try {
          const deletedSubPlanId = await subPlanAPI.deleteSubPlan(SubPlan)
          handleRemove(deletedSubPlanId)
        } catch {
          setError('failed to delete')
        }
      }


    function handleRemove(deletedSubPlanId){
        const indexCopy = [...index]
        const idx = indexCopy.findIndex(SubPlan => SubPlan._id === deletedSubPlanId)
        indexCopy.splice(idx, 1)
        setIndex(indexCopy)
        setActiveSubPlan(null)
    }


    return (
        <Container fluid> 
            { activeSubPlan ? 
            <Row>
                {activeSubPlan}
            </Row>
            :
            <>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                    <Button href="/subplan/new"/>
                    </Col>
                </Row>
                <Row xs={1} md={4} lg={4} xl={8} className="g-4">
                    {indexSubPlans}
                </Row>
            </>
            }
        </Container>
    )
}