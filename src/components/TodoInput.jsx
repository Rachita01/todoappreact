import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoInput(){
    
    return(
        <div>
          <div className="col mx-4">
            <input className="input-box" type="text"/>
            <Button variant="primary" className="col ms-2">Add</Button>
          </div>
        </div>
    )
}

export default TodoInput