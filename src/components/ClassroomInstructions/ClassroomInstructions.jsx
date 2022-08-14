import { CardImg } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';


export default function({CI, addCI, viewCI}){
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
                <Card bsPrefix='CI-card'>
                    <Card.Text bsPrefix='crd-text'>
                        {CI.class}<br />
                        Period {CI.period}
                    </Card.Text>
                        <div className='d-grid gap-2'>
                            <ButtonGroup bsPrefix='btn-group' size='lg'>
                                <Button  variant='outline' onClick={()=> viewCI(CI)} >View</Button>
                                <Button variant='outline' onClick={()=> addCI(CI)} >Add</Button>
                            </ButtonGroup>
                        </div>
                </Card>
            </Col>
        </>
    )
}