import { nanoid } from 'nanoid';
import React, { Fragment, useEffect, useState } from 'react'
import VerifyEditable from './VerifyEditable';
import VerifyRow from './VerifyRow';

const Verify = () => {
    const [users, setUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
  
    useEffect( () =>{
      fetch('https://powerful-garden-89346.herokuapp.com/userCount')
      .then(res => res.json())
      .then(data =>{
        const count = data.count;
        const pages = Math.ceil(count/5);
        setPageCount(pages);
      })
    }, []);
  
    const [adduser, setAddUser] = useState({
      id: '',
      name: '',
      email: ''
    });
  
    const [editFormData, setEditFormData] = useState({
      id: '',
      name: '',
      email: ''
    })
  
    const [edituserId, setEditUserId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
  
      const newFormData = { ...adduser };
      newFormData[fieldName] = fieldValue;
  
      setAddUser(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    }
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newUserData = {
        id: nanoid(),
        name: adduser.name,
        email: adduser.email,
      };
      const newUsersData = [...users, newUserData];
      setUsers(newUsersData);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedUser = {
        id: edituserId,
        name: editFormData.name,
        email: editFormData.email
      }
  
      const newUsers = [...users];
  
      const index = users.findIndex((user) => user._id === edituserId);
      newUsers[index] = editedUser;
      setUsers(newUsers);
      setEditUserId(null);
    }
  
    useEffect(() => {
      fetch(`https://powerful-garden-89346.herokuapp.com/user?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [page, size]);
  
    // useEffect(() => {
    //   fetch('http://localhost:5000/user')
    //     .then(res => res.json())
    //     .then(data => setUsers(data));
    // }, []);
  
    const handleEditClick = (event, userlist) => {
      event.preventDefault();
      setEditUserId(userlist._id);
  
      const formValues = {
  
        name: userlist.name,
        email: userlist.email,
      }
  
      setEditFormData(formValues);
    };
  
    const handleCancleClick = () => {
      setEditUserId(null);
    };
  
    const handleDeleteClick = (userId) => {
      const newUsers = [...users];
  
      const index = users.findIndex((user) => user._id === userId);
      newUsers.splice(index, 1);
      setUsers(newUsers);
    }
  return (
    <>
    <div className='user-container'>
    <h2 className='text-3xl'>View Verify Status</h2>
    <hr />
    <div className='mt-10'>
      <form onSubmit={handleEditFormSubmit}>
        <table className='user-table'>
          <thead>
            <tr className='user-tr'>
              <th>#</th>
              <th>Number</th>
              <th>Date</th>
              <th>Status</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userlist) => (
              <Fragment>
                {edituserId === userlist._id ? (<VerifyEditable key={userlist._id} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancleClick={handleCancleClick} />
                ) : (
                  <VerifyRow key={userlist._id} userlist={userlist} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
              </Fragment>
            ))}

          </tbody>
        </table>
        
      </form>
      <div className='pagination'>
          {
            [...Array(pageCount).keys()].map(number => <button className={page=== number ? 'selected' : ''} onClick={() => setPage(number)}>{number}</button>)
          }
          <select onChange={e => setSize(e.target.value)}>
            <option value="5" selected >5</option>
            <option value="10">6</option>
            <option value="15">7</option>
          </select>
        </div>
      </div>

      
    </div>
    
    </>
  )
}

export default Verify