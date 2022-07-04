import React, { useState } from 'react';
import Addperson from './components/Addperson';
import List from './components/List';
export interface IPeople{
 
    id:number;
    fullname:string;
    age:number;
    img_url:string;
    bio?:string;
  
}
const App = ()=> {
  const [peoples,setPeoples] =useState<IPeople[]>([
    {
    id :1,
    fullname:"مجتبی حسن زاده",
    age:27,
    img_url:"https://s6.uupload.ir/files/20220609_180625_2mxw.jpg",
    bio:"این برنامه برای آموزش است"
  },
]);
  return (
    <div className="App">
      <header>
        <div className='container'>
        <h4 className='alert alert-info'>مدیریت اشخاص</h4>
        </div>
      </header>
      <List peoples={peoples} setPeoples={setPeoples} />
      <Addperson peoples={peoples}   setPeoples={setPeoples} />
    </div>
  );
}

export default App;
