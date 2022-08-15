import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


export default function ClassroomInstructions({CI, addCI, viewCI}){
    

    return(
        <>
            <style type="text/css">
            {`
            .CI-card{
                background: rgba(241, 241, 241, 0);
                border-color: rgba(59, 59, 59, 0);
            }
            .CI-card:hover{
                background: rgba(241, 241, 241, 1);
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
            }
            .crd-text {
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 200px;
                color: rgb(59, 59, 59);
                font-size: 3rem;
            }
            `}
            </style>
            
            <Col>
                <OverlayTrigger
                    trigger="click"
                    key='top'
                    placement= 'top'
                    overlay={
                        <Popover >
                            <Popover.Header as="h3" >
                                What would you like to do?
                            </Popover.Header>
                        <Popover.Body>
                            <div className='d-grid gap-2'>
                                <ButtonGroup bsPrefix='btn-group'>
                                    <Button size='md' variant='primary' onClick={()=> viewCI(CI)} >View</Button>
                                    <Button size='md' variant='success' onClick={()=> addCI(CI)} >Add </Button>
                                </ButtonGroup>
                            </div>
                        </Popover.Body>
                        </Popover>}
                        >
                            <Card bsPrefix='CI-card' className='mt-3' style={{cursor:'pointer'}}>
                                <Card.Text bsPrefix='crd-text'>
                                    {CI.class}<br />
                                    Period {CI.period}
                                </Card.Text>
                            </Card>
                </OverlayTrigger>
            </Col>
        </>
    )
}