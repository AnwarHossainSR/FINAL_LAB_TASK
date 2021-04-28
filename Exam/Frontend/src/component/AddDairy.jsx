import React,{useState} from 'react';

import Header from './Header';
import axios from "axios";



function AddDairy() {
    const [message,setMessage]=useState('');
    const [title,seTitle]=useState('');
    const [description,setDescription]=useState('');
    const [importance,setImportance]=useState('');

    async function submitHandle (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("events/store", data)
          .then((response) => {
            setMessage( response.data.message);
          }).catch((err) => {
            setMessage( err.data );
          });
        
     }
    return (
        <>
            <Header />
            <div className="col-md-4 offset-md-4">
                <h1>Add Dairy</h1><br/>
                {message != null ? (
                  <h4 className="text-center text-success">{message}</h4>
                ) :''
                }
                <label className="float-left">Title</label>
                <input type="text" value={title} onChange={(e)=>seTitle(e.target.value)} className="form-control" />

                <br/>
                <label className="float-left">Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />

                <br/>
                
                <label className="float-left">Importance</label>
                <select name="importance" className="form-control" onChange={(e)=>setImportance(e.target.value)}>
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Less">Less</option>
                </select>
                <br/>

                <button type="submit" onClick={submitHandle}  className="btn btn-info btn-block">Add Dairy</button>
            </div>
        </>
    )
}
export default AddDairy;