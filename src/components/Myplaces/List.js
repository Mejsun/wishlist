import React, {useState} from 'react'
import './Styles.scss'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import Draggable from 'react-draggable';

function List({tasks, setTasks}) {
const [value, setValue] = useState('');

function addTodoItem (){
    setTasks([...tasks, {text:value, isCompleted: false}])}

function submitItem (e){
    e.preventDefault(); 
    if(!value) return;
    addTodoItem(value);
    setValue('')}

function deleteItem(i){
    const items = [...tasks]
    if (window.confirm('This item will be deleted!')) {items.splice(i,1)}
    else{return items}
    setTasks(items)}

function completeItem(i){
    const items = [...tasks]
    if(items[i].isCompleted === false){items[i].isCompleted = true;}
    else{items[i].isCompleted = false}
        setTasks(items);}

    return (
        <div className='list'>
        <form className='todoForm'>
            <InputGroup className="mb-3 todoContainer">
            <FormControl
            placeholder="I want to visit..."
            aria-label="I want to visit..."
            aria-describedby="basic-addon2"
            value={value} className='input' onChange={e => setValue(e.target.value)}
            />
            <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={submitItem}>
            <i className="fas fa-plus"></i>
            </Button>
            </InputGroup>
            </form>
            
            {tasks.map((item,i)=>{return(
                <Draggable axis='y' bounds={{top:-10}}>
                <div className={`item ${item.isCompleted  ? 'done' : ''}`} 
                id={Math.random()} 
                key={Math.random()}>
                {i+1}. {item.text}
                    <div className='buttons'>
                        <button type='button' onClick={()=>{deleteItem(i)}}   className='btn delete'> <i className='fas fa-trash'></i></button>
                        <button type='button' onClick={()=>{completeItem(i)}} className='btn complete'><i className='fas fa-check'></i></button>
                    </div>
                </div>
                </Draggable>
                )})}
        </div>
)}

export default List