import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Expensetrack.scss'

function Expensetrack() {
  const [allItems, setAllItems] = useState([])
  const [expenseItem, setExpenseItem] = useState('')
  const [shop, setShop] = useState('')
  const [category, setCategory] = useState('')
  const [cost, setCost] = useState('')
  const newItem = {name:expenseItem, shop: shop,category: category, price: cost}

  function addExpenseItem (){
    setAllItems([...allItems, newItem])
  }

function submitExpenseItem (e){
  e.preventDefault()
  addExpenseItem(allItems)
  setExpenseItem('')
  setCategory('')
  setCost('')
}

//const total = allItems.reduce((total, newItem) => total + newItem.price.cost, 0);
//const total = allItems.map(item => item.price).reduce((a,b) => a+b)
//const total = allItems.reduce((total, cost) => total = total + cost, 0)


const total = (allItems.reduce((total, newItem) => total = total - (-newItem.price), 0)).toFixed(2);


  return (

  <div className='expenseTracker'>
    <InputGroup className="mb-3 todoContainer">
      <FormControl type='text' placeholder='Item' value={expenseItem} onChange={(e)=> setExpenseItem(e.target.value)} required={true}></FormControl>
      <FormControl type='text' placeholder='Shop' value={shop} onChange={(e)=> setShop(e.target.value)} required={true}></FormControl>
      <FormControl type='text' placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)} required={true}></FormControl>
      <FormControl type='number' placeholder='Price' step={0.05} value={cost} onChange={(e)=> setCost(e.target.value)} required={true}></FormControl>
      <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={submitExpenseItem}><i className="fas fa-plus"></i></Button>
    </InputGroup>

    <div>
      <div className='tablehead'>
        <div>Filter by item</div>
        <div>Filter by shop</div>
        <div>Filter by category</div>
        <div>Total: {total}</div>
      </div>
      {allItems.map((item, i) => {return(
        <div className='item' key={Math.random()} id={Math.random()}> 
          <div className='text'>{i+1}. {item.name} </div>
          <div className='text'> {item.shop} </div>
          <div className='text'> {item.category} </div>
          <div className='number'> {item.price} </div>
          <button type='button' className='btn delete'><i className='fas fa-trash'></i></button>
        </div>
      )})}
    </div>
  </div>
  )
}

export default Expensetrack;
