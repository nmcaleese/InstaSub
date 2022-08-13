import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'


export default function({CI, addCI, viewCI}){
    return(
        <div>
            <h1>{CI.class} period {CI.period}</h1>
            <br />
            <ButtonGroup size='sm'>
                <Button size='sm' variant='secondary' onClick={()=> viewCI(CI)} >Edit Instructions</Button>
                <Button variant='success' onClick={()=> addCI(CI)} >Add to Sub Plan</Button>
            </ButtonGroup>
        </div>
    )
}