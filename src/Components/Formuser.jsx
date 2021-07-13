import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Formuser = (props) => {
    const { handleSubmit, handleChange, name, age, image } = props;

    return (
        <>
            <h3 className="center mt-5 mb-2">Add a new user</h3>
            <Form onSubmit={(e) => handleSubmit(e)} className="col-8 center border border-dark p-2">
                
                <Form.Control 
                    type="text" 
                    value={ name } 
                    placeholder="Enter name..." 
                    name="name"
                    onChange={(e) => handleChange(e)}
                ></Form.Control>
                
                <Form.Control 
                    type="number" 
                    value={ age } 
                    className="mt-2" 
                    placeholder="Enter age" 
                    name="age"
                    onChange={(e) => handleChange(e)}
                ></Form.Control>
                
                <Form.Control 
                    type="text" 
                    value={ image } 
                    className="mt-2 mb-2" 
                    placeholder="Link to an image..." 
                    name="image"
                    onChange={(e) => handleChange(e)}
                ></Form.Control>
                
                <Button type="submit" variant="info" className="btn-block">Add new User</Button>
            </Form>
        </>
    )
}

export default Formuser;