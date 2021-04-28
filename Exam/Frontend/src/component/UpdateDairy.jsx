import React,{useEffect, useState} from 'react';
import Header from './Header';
import axios from "axios";
import {useParams} from 'react-router-dom';

function UpdateDairy(props) {
   
    const {id:eid}=useParams();
    const [data, setData] = useState({});
    const [message,setMessage]=useState('');
    const [title,seTitle]=useState('');
    const [description,setDescription]=useState('');
    const [importance,setImportance]=useState('');
    
    useEffect(async () => {
        axios
        .get("events/"+eid)
        .then((response) => {
          setData(response.data.event);
          seTitle(response.data.event.title);
          setDescription(response.data.event.description);
          setImportance(response.data.event.importance);
        }).catch((err) => {
          setMessage( err.data );
        });
    },[])
    
     async function handleSubmit (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          axios
          .post("events/"+eid, data)
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
            <h1>Update Dairy</h1><br/>
                {message != null ? (
                  <h4 className="text-center text-success">{message}</h4>
                ) :''
                }
                <label className="float-left">Title</label>
                <input type="text" defaultValue={title} onChange={(e)=>seTitle(e.target.value)} className="form-control" />

                <br/>
                <label className="float-left">Description</label>
                <input type="text" defaultValue={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />

                <br/>
                
                <label className="float-left">Importance</label>
                <select name="importance" className="form-control" onChange={(e)=>setImportance(e.target.value)}>
                  <option defaultValue={importance}>{importance}</option>
                  <option value="High">High</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Less">Less</option>
                </select>
                
                <br/>

                <button type="submit" onClick={handleSubmit}  className="btn btn-info btn-block">Update Dairy</button>
            </div>
        </>
    )
}
export default UpdateDairy;