import add from "../assets/add.svg"
import "./container.css"
import dlt from "../assets/delete.svg"
import edt from "../assets/edit.svg"
import { useState } from "react";
import Tasks from "./Tasks"

function Container(){
    
    const [atasks, setAtaskes] = useState(['']);
    const [p, setP] = useState("")
    const [d, setD] = useState(false);
    const [ai, setAi] = useState(0);
    const [c, setC] = useState(false);

    function addTask(){
        const x = document.getElementById("my-input").value;
        const y = [...atasks, x];
        var w = y.filter(function(i){
            return i;
        });
        setAtaskes(w);
        document.getElementById("my-input").value = "";
    }

    function popDlt(index){
        const a = atasks[index];
        setP(a);
        setD(true);
        setAi(index);
    }

    function popCng(index){
        const a = atasks[index];
        setP(a);
        setC(true);
        setAi(index);
    }

    function deleteTask(i){
        const z = atasks;
        z.splice(i, 1);
        setAtaskes(z);
        setD(false);
        addTask();
    }

    function changeTask(i){
        const r = atasks;
        const f = document.getElementById("ip-edt").value;
        if(f !== ""){
            r.splice(i, 1, f);
            setAtaskes(r);
            setC(false);
            addTask();
            document.getElementById("ip-edt").value = "";
        }
        else{
            alert("Edite o conteúdo da tarefa!");
        }
    }

    return(
        <div className="cnt">
            <p className="title">Otimize seu tempo e se organize com o nosso Planejador Diário.</p>
            <div className="midle-container">
                    <ul className="options">
                        <li>Tarefa</li>
                        <li>Status</li>
                        <li>Opções</li>
                    </ul>
                    <hr></hr>
            </div>
            {atasks.map((atasks, index) => (
                <div className="put-center" style={{display: atasks !== '' ? "flex" : "none"}} id="tsk" value={index}>
                    <div className="to-do">
                        <div className="fit">
                            <p className="task-text">{atasks}</p>
                            <Tasks />
                        </div>
                        <div>
                            <img src={edt} alt="ERROR" onClick={() => popCng(index)}/>
                            <img src={dlt} alt="ERROR" onClick={() => popDlt(index)}/>
                        </div>
                    </div>         
                </div>
            ))}
            <div className="new-task">
                <input type="text" className="ipt" placeholder="Nova tarefa..." id="my-input"></input>
                <img alt="ERROR" src={add} onClick={() => addTask()}/>
            </div>
            <div className="change-container" style={{display: d ? "block" : "none"}}>
                <div className="cng-display">
                    <h2>Deseja excluir esse item?</h2>
                    <h3>{p}</h3>
                    <div className="cng-btn">
                        <button className="btn-1" onClick={() => setD(false)}>Não</button>
                        <button className="btn-2" onClick={() => deleteTask(ai)}>Sim</button>
                    </div>
                </div>
            </div>
            <div className="change-container" style={{display: c ? "block" : "none"}}>
                <div className="cng-display">
                    <h2>Deseja editar esse item?</h2>
                    <input placeholder={p} className="ipt-edit" id="ip-edt"></input>
                    <div className="cng-btn">
                        <button className="btn-1" onClick={() => setC(false)}>Não</button>
                        <button className="btn-2" onClick={() => changeTask(ai)}>Sim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container