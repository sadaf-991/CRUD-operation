import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');

  function getData() {
    axios.get('https://66a22023967c89168f1ee39f.mockapi.io/crudyoutube/crud-youtube')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  const handleDelete = (id) => {
    axios.delete(`https://66a22023967c89168f1ee39f.mockapi.io/crudyoutube/crud-youtube/${id}`
).then(() => {
    getData()
})

  }

const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
};

  useEffect(() => {
    getData();
  }, []);

  

  return (
    <>
    <div className="form-check form-switch">
  <input 
  className="form-check-input" 
  type="checkbox" 
  onClick={ () => {
    if(tabledark === 'table-dark')
        setTableDark('')
    else setTableDark('table-dark');
  } }
  /> 
  
  
</div>
    <div className="d-flex justify-content-between m-2">
  <h2>Read Operation</h2>
  <Link to="/">
  <button className="btn btn-secondary"
  >
    Create</button>
    </Link>
  </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => {
            console.log("each data item:", eachData);
            return (
            <tr key={eachData.Id}>
                
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                <button className="btn btn-success" 
                onClick={() => setToLocalStorage(
                    eachData.id,
                    eachData.name,
                    eachData.email
                    )}
                    >
                    Edit{" "}
                    </button>
                    </Link>
                    </td>
                    
                        
                        <td>
                  <button className="btn btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                  >
                    Delete</button>
                </td>
                </tr>
           
   )})}
        </tbody>
      </table>
    </>
  );
};

export default Read;
