import React, { useState } from 'react';


function Expensetrack() {
  const [allItems, setAllItems] = useState([])
  const [expenseItem, setExpenseItem] = useState('')
  const [category, setCategory] = useState('')
  const [cost, setCost] = useState('')
  const newItem = {name:expenseItem, category: category, price: cost}

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

let total = 0;
total = allItems.reduce((total, newItem) => total = total - (-newItem.price), 0);

  return (

  <div style={{margin:'5vw'}}>
    <fieldset required>
      <input type='text' placeholder='Item' value={expenseItem} onChange={(e)=> setExpenseItem(e.target.value)} required={true}></input>
      <input type='text' placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)} required={true}></input>
      <input type='number' placeholder='Price' step={0.05} value={cost} onChange={(e)=> setCost(e.target.value)} required={true}></input>
      <button  type='submit' onClick={submitExpenseItem} style={{height:'10px', width:'10px'}}></button>
    </fieldset>
    <div>
    <div className='tobegrid'>Item</div>
    <div>Category</div>
    <div>Total:{total}</div>
    {allItems.map((item, i) => {return(
      <div className='item' key={Math.random()} id={Math.random()}> 
        <div>{i+1}. {item.name} </div>
        <div> {item.category} </div>
        <div> {item.price} </div>
      </div>
    )})}
    </div>
  </div>
  )
}

export default Expensetrack;
