

export default function({CI, addCI}){
    //send up a div, (eventually a card)
    return(
        <div>
            <h1>{CI.class} period {CI.period}</h1>
            <button onClick={()=> addCI(CI)} >Add CI to lesson plan?</button>
        </div>
    )
}