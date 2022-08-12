

export default function({ci}){
    //send up a div, (eventually a card)
    return(

        <div>
            <h1>{ci.class}</h1>
            <h1>{ci.period}</h1>
            <h1>{ci.classroomInstructions}</h1>
            {/* button with add to subPlan */}
        </div>

    )
}