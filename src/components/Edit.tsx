import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react"
import { Modal } from "react-bootstrap"
import { FaUserEdit} from "react-icons/fa"
import { IPeople } from "../App";

export interface Iprops{
    peoples:IPeople[];
  setPeoples:Dispatch<SetStateAction<IPeople[]>>;
    people:IPeople;
}

const Edit : FC<Iprops> = ({peoples,setPeoples,people})=>{
    const [showModal,setShowModal]=useState<boolean>(false)
    const [fullname,setFullname] =useState<string>(people.fullname);
    const [age,setAge] =useState<string|number>(people.id);
    const [img_url,setImg_url] =useState<string>(people.img_url);
    const [bio,setBio] =useState<string|undefined>(people.bio);

    const handlerEditPerson =(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if (!fullname) {
            return alert("نام و نام خانوادگی وارد نشده است")
        }
        if (!age) {
            return alert(" سن وارد نشده است")
        }
        if (!img_url) {
            return alert("   عکس  وارد نشده است")
        };
        const persons =[...peoples];
        const index=persons.findIndex(p=>p.id===people.id)
        persons[index]={
            id:people.id,
            fullname,
            age:Number(age),
            img_url,
            bio
        };
        setPeoples(persons);
        setShowModal(false)
    }



return(
    <>
    <FaUserEdit
     className="text-primary m-1"
     onClick={()=>setShowModal(true)}
    />



    <Modal
        size="lg"
        show={showModal}
        onHide={()=>setShowModal(false)}
        centered
      >
        <Modal.Header>
          <Modal.Title>
              {people.fullname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="col-md-6 col-lg-6 mx-auto">
        <form
          autoComplete="off"
          className="mt-3"
          onSubmit={e=>handlerEditPerson(e)}
        
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
            ویرایش به لیست
          </button>
          <button type="submit" onClick={()=>setShowModal(false)} className="btn btn btn-danger me-2">
            بستن
          </button>
        </form>
      </div>
        </Modal.Body>
      </Modal>
    </>
)
}
export default (Edit)