import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom'

const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  //Get Data
  async function getData() {
    const getEvents = async () => {
      const response = await axios
        .get("events")
        .catch((error) => console.log(error.resp));
        console.log(response.data.events)
        //setData(response.data.events);
    };
    getEvents();
  }

  async function deleteEvent(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        successMessage(id);
      }
    });
  }

  async function successMessage(id) {
    
    await axios
        .delete("events/"+id)
        .catch((error) => console.log(error.resp));
    Swal.fire("Deleted!", "Your dairy has been deleted.", "success");
    getData();
  }

    
    return (
      <>
        <Header />
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-1">
                <h1 className="text-center text-primary py-3">All Events</h1>
                {/* <table id="example" striped hover>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>title</th>
                      <th>Description</th>
                      <th>Importance</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.importance}</td>
                        <td>
                          <Link to={"update/" + item.id} key={item.id}>
                            <i className="fa fa-2x fa-edit text-primary" />
                          </Link>
                          <i
                            className="ml-2 fa fa-2x fa-trash text-danger mr-2"
                            onClick={() => deleteEvent(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home
