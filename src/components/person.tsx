import { FC } from "react"
import {AiOutlineUserDelete} from "react-icons/ai"
import { IPeople } from "../App";
import { Iprops } from "./List";
import Edit from "./Edit"

    const RenderList:FC<Iprops>=({peoples,setPeoples})=>{
        const handlerDeletePerson =(id:number)=>{
            const persons:IPeople[]=[...peoples];
            const filteredPersons:IPeople[]=persons.filter(p =>p.id!==id)
            setPeoples(filteredPersons)
        }
        return(
            <>
         {peoples.map((people)=>(
                <div key={people.id} className='col-12 col-lg-4 '>
                    <div className='card'>
                        <div className="card-body d-flex align=item-center">
                        <img className="img-thumbnail rounded  " src={people.img_url} width="80px" height="30px" alt={people.fullname}/>
                        <div className="me-3">
                            <p>
                                <span className='h2'>{people.fullname}</span>
                                <span className='badge bg-primary m-3'>{people.age} سال دارد</span>
                            </p>
                            <p className="text-muted">{people.bio}</p>
                        </div>
                        </div>
                        <div className="deletIcon">
                        <Edit people={people} peoples={peoples} setPeoples={setPeoples}  />
                        <AiOutlineUserDelete
                        className="text-danger"
                        onClick={()=>handlerDeletePerson (people.id)}
                        />
                        </div>
                    </div>
                </div>
            ))}
            </>
        )
    }
    export default(RenderList)