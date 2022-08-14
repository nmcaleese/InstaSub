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
            .card{
                background: rgba(209, 231, 206, 0);
                border-color: rgba(59, 59, 59, 0);
            }
            .card:hover{
                background: rgba(209, 231, 206, 1);
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
            
            .btn {
                background: rgba(0, 0, 0, 0);
                border-color: rgba(0, 0, 0, 0);
                color: rgb(0, 0, 0);
                border-radius: 0;
            }
            `}
            </style>
            <Col>
                <Card bsPrefix='card'>
                    <Card.Text bsPrefix='crd-text'>
                        {CI.class}<br />
                        Period {CI.period}
                    </Card.Text>
                        <div className='d-grid gap-2'>
                            <ButtonGroup size='lg' bsPrefix='btn-group'>
                                <Button variant='secondary' onClick={()=> viewCI(CI)} >View</Button>
                                <Button variant='success' onClick={()=> addCI(CI)} >Add</Button>
                            </ButtonGroup>
                        </div>
                </Card>
            </Col>
        </>
    )
}