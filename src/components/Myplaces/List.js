import React, {useState} from 'react'
import './Styles.scss'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function List({tasks, setTasks}) {
const [value, setValue] = useState('');

function addTodoItem (){
    setTasks([...tasks, {text:value, isCompleted: false, id:''}])}

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

function dragEnd(result){
    const places = Array.from(tasks)
    const [reorderedplaces] = places.splice(result.source.index, 1);
    places.splice(result.destination.index, 0, reorderedplaces);
    setTasks(places)}

    return (
    <div className='list'>
       <p className='font-italic text-center'>
        Bucket list of places you would like to visit, which you can reorder by dragging, mark as 'done' when visited, and delete. 
        Click twice the marker on the map to make it draggable. Click the map to show your location.
       </p> 
        <form className='todoForm'>
            <InputGroup className=" m-0 todoContainer">
            <FormControl
            placeholder="I want to visit..."
            aria-label="I want to visit..."
            aria-describedby="basic-addon2"
            value={value} className='shadow-none' onChange={e => setValue(e.target.value)}
            />
            <Button className='shadow-none' variant="outline-secondary" id="button-addon2" type='submit' onClick={submitItem} >
            <i className="fas fa-plus"></i>
            </Button>
            </InputGroup>
            </form>

            <DragDropContext onDragEnd={dragEnd}>
            <Droppable droppableId='items'>
            {(provided) =>
            (<ul className='items p-0' {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((item,i, {id})=>{return(
                    <Draggable key={id} index={i} draggableId={(i).toString()}>
                {(provided) => (
                <li className={`item ${item.isCompleted  ? 'done' : ''} d-flex p-1 justify-content-between align-items-center mt-2 rounded text-capitalize bg-light border`}
                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                {i+1}. {item.text}
                    <div className='buttons d-flex justify-content-end'>
                        <button type='button' onClick={()=>{deleteItem(i)}}   className='btn delete border-0 shadow-none'> <i className='fas fa-trash'></i></button>
                        <button type='button' onClick={()=>{completeItem(i)}} className='btn complete border-0 shadow-none'><i className='fas fa-check'></i></button>
                    </div>
                </li>)}
                </Draggable>
                )})}
            {provided.placeholder}
            </ul>)}
            </Droppable>
            </DragDropContext>
        </div>
)}

export default List