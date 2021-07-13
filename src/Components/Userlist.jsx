import React, { useState } from 'react';
import './Userlist.css';
import { Button } from 'react-bootstrap';

import Formuser from './Formuser';
import data from '../data/data';
import User from './User';

const Userlist = () => {
    const [users, setUsers] = useState(data);
    
    const handleClear = () => {
        setUsers([]);
    }

    const deleteUser = (id) => {
        const new_users = users.filter(user => user.id !== id);
        setUsers(new_users);
    }

    const [count, setCount] = useState(users.length + 1);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');

    const addUser = (newUser) => setUsers(state => [...state, newUser])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setCount(count + 1);

        let new_user = new User(name, age, image);
        new_user.setId(count);
        
        addUser(new_user);

        setName('');
        setAge('');
        setImage('');
    }

    const handleChange = (e) => {
        let field = e.target.name;

        if (field === 'name') {
            setName(e.target.value);
        } else if (field === 'age') {
            setAge(e.target.value);
        } else {
            setImage(e.target.value);
        }
    }

    return (
        <div className="container">
            <table className="col-8">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Image</th>
                    </tr>
                </thead>
                {
                    users.map(user => {
                        return (
                            <tbody key={user.id}>
                                <tr>
                                    <td className="border border-info" > {user.id} </td>
                                    <td className="border border-info" > {user.name} </td>
                                    <td className="border border-info" > {user.age} </td>
                                    <td className="border border-info" > 
                                        <img src={user.image} alt="profile_pic" />
                                        <Button 
                                            variant="dark" 
                                            className="ml-5"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <Button variant="danger" className="btn-block col-8" onClick={handleClear}>
                Clear all
            </Button>
            <hr/>
            <Formuser 
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={name}
                age={age}
                image={image}
            />
        </div>
    )
}

export default Userlist
