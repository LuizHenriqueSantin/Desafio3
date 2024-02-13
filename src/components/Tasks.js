import "./tasks.css"
import done from "../assets/done.svg"
import unDone from "../assets/no-done.svg"
import { useState} from "react"


function Tasks(){

    var [check, setCheck] = useState(false);

    return(
                <div className="check">
                    <img alt="ERROR" src={check ? done : unDone} onClick={() => setCheck(!check)}/>
                </div>
    )
}

export default Tasks