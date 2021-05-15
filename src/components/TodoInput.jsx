import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTodo} from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function TodoInput(){
    let[name,setName] = useState();
    let dispatch = useDispatch();
    return(
        <div>
          <div className="col mx-4">
            <input className="input-box" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <Button variant="primary" className="col ms-2" 
            onClick={() => {dispatch(addTodo(
              { id: uuid(),
                name:name
                }
                ))
                setName('');
            }}>Add</Button>
          </div>
        </div>
    )
}

export default TodoInput