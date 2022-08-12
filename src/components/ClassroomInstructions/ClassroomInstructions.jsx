

export default function({CI, addCI, viewCI}){
    return(
        <div>
            <h1>{CI.class} period {CI.period}</h1>
            <button onClick={()=> viewCI(CI)} >Edit Instructions</button>
            <button onClick={()=> addCI(CI)} >Add to Sub Plan</button>
        </div>
    )
}