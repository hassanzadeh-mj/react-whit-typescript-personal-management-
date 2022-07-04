import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react"
import { IPeople } from "../App";

export interface Iprops{
    peoples:IPeople[];
    setPeoples:Dispatch<SetStateAction<IPeople[]>>
}


const Addperson :FC<Iprops>=({peoples,setPeoples}) =>{
    const [fullname,setFullname] =useState<string>("");
    const [age,setAge] =useState<string|number>("");
    const [img_url,setImg_url] =useState<string>("");
    const [bio,setBio] =useState<string>("");

   const handlerResetState = ():void=>{
    setFullname("")
    setAge("")
    setImg_url("")
    setBio("")
   }
   const handlerSubmit =(event:FormEvent<HTMLFormElement>):void=>{
    event.preventDefault();
    if (!fullname) {
        return alert("نام و نام خانوادگی وارد نشده است")
    }
    if (!age) {
        return alert(" سن وارد نشده است")
    }
    if (!img_url) {
        return alert("   عکس  وارد نشده است")
    }
    setPeoples([ ...peoples ,{
           id:Math.floor(Math.random()+6),
           fullname,
           age:Number(age),
           img_url,
           bio
        }]);
        handlerResetState();

   }
    return(
        <div className="col-md-6 col-lg-6 mx-auto">
        <form
          autoComplete="off"
          className="mt-3"
          onSubmit={(e)=> handlerSubmit (e)}
        >
          <input
            type="text"
            className="form-control mb-2"
            name="fullName"
            placeholder="نام و نام خانوادگی"
            value={fullname}
            onChange={(e)=> setFullname(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-2"
            name="age"
            placeholder="سن"
            value={age}
            onChange={(e)=> setAge(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            name="img_url"
            placeholder="آدرس تصویر پروفایل"
            value={img_url}
            onChange={(e)=> setImg_url(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            name="bio"
            rows={7}
            placeholder="بیوگرافی"
            value={bio}
            onChange={(e)=> setBio(e.target.value)}
          />
          <button type="submit" className="btn btn-success">
            افزودن به لیست
          </button>
        </form>
      </div>
    )
}
export default (Addperson)