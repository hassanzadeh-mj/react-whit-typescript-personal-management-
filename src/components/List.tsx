import  { Dispatch, FC, SetStateAction } from 'react'
import { IPeople } from '../App';
import RenderList from './person';

  export interface Iprops{
      peoples:IPeople[];
    setPeoples:Dispatch<SetStateAction<IPeople[]>>

  }
const List:FC<Iprops>=({peoples,setPeoples})=> {

 
  return (
    <div className='row'> 
    <RenderList peoples={peoples} setPeoples={setPeoples} />
    </div>
  )
}

export default (List)
