import React,{useEffect, useState} from 'react';
import Header from './Header';
import axios from "axios";



function UpdateDairy(props) {
    const [data, setData] = useState([]);

    useEffect(async () => {
        axios
        .post("events/"+props.match.params.id)
        .then((response) => {
          setData( response.data.event);
        }).catch((err) => {
          setMessage( err.data );
        });
    })
    const [message,setMessage]=useState('');
    const [title,seTitle]=useState(data.title);
    const [description,setDescription]=useState(data.description);
    const [importance,setImportance]=useState(data.importance);

     async function handleSubmit (e) { 
        e.preventDefault();
        
        const data = {
            'title':title,
            'description':description,
            'importance':importance
          };
          console.log(data)
          axios
          .post("events/"+props.match.params.id, data)
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
                <input type="text" value={title} onChange={(e)=>seTitle(e.target.value)} className="form-control" />

                <br/>
                <label className="float-left">Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" />

                <br/>
                
                <label className="float-left">Importance</label>
                <input type="text" value={importance} onChange={(e)=>setImportance(e.target.value)} className="form-control" />
                <br/>

                <button type="submit" onClick={handleSubmit}  className="btn btn-info btn-block">Add Dairy</button>
            </div>
        </>
    )
}
export default UpdateDairy;