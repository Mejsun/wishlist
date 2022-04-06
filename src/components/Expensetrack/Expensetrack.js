import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Expensetrack.scss'

function Expensetrack() {
  const [allItems, setAllItems] = useState([])
  const [expenseItem, setExpenseItem] = useState('')
  const [shop, setShop] = useState('')
  const [category, setCategory] = useState('')
  const [cost, setCost] = useState('')
  const [shopQuery, setShopQuery] = useState('')
  const [nameQuery, setNameQuery] = useState('')
  const [categoryQuery, setCategoryQuery] = useState('')

  const newItem = {name: expenseItem, shop: shop, category: category, price: cost}

  function submitExpenseItem (e){
    e.preventDefault()
    if(e.target.value !== ''){
      setAllItems([...allItems, newItem])
      setExpenseItem(''); setShop(''); setCategory(''); setCost('')}}

  function deleteItem(i){
    const items = [...allItems]
    if (window.confirm('This item will be deleted!')) {items.splice(i,1)}
    else{return items}
    setAllItems(items)}
  
  const filteredItems = allItems
    .filter((items) => {
      if((items.name.toLowerCase().includes(nameQuery) && shopQuery==='' && categoryQuery==='') //filter by name
      || (nameQuery==='' && items.shop.toLowerCase().includes(shopQuery) && categoryQuery==='') //filter by shop
      || (nameQuery==='' && shopQuery==='' && items.category.toLowerCase().includes(categoryQuery)) //filter by category
      || (items.name.toLowerCase().includes(nameQuery) && shopQuery==='' && items.category.toLowerCase().includes(categoryQuery)) //filter by category and name
      || (nameQuery==='' && items.shop.toLowerCase().includes(shopQuery) && items.category.toLowerCase().includes(categoryQuery)) //filter by category and shop
      || (items.name.toLowerCase().includes(nameQuery) && items.shop.toLowerCase().includes(shopQuery) && categoryQuery==='') //filter by name and shop
      || (items.name.toLowerCase().includes(nameQuery) && items.shop.toLowerCase().includes(shopQuery) && items.category.toLowerCase().includes(categoryQuery)) //filter by all 3
      ){return items
      }})

  const total = (allItems.reduce((total, item) => total - (-item.price), 0)).toFixed(2);
  const subtotal = (filteredItems.reduce((total, item) => total - (-item.price), 0)).toFixed(2)
  
  return (
    <div>
      <div className='expenseTracker mx-5'>
        <h2 className='text-success text-center py-4 m-auto'>Expense tracker</h2>
        <form onSubmit={submitExpenseItem}>
          <InputGroup className="mb-3 hasValidation">
            <FormControl className='shadow-none' type='text' placeholder='Item' value={expenseItem} onChange={(e)=> setExpenseItem(e.target.value)} required></FormControl>
            <FormControl className='shadow-none' type='text' placeholder='Shop' value={shop} onChange={(e)=> setShop(e.target.value)} required></FormControl>
            <FormControl className='shadow-none' type='text' placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)} required></FormControl>
            <FormControl className='shadow-none price' type='number' placeholder='Price' value={cost} onChange={(e)=> setCost(e.target.value)} required step={0.01}></FormControl>
            <Button variant="outline-secondary" id="button-addon2" type='submit'><i className="fas fa-plus"></i></Button>
          </InputGroup>
        </form>
        <div>
          <InputGroup className="mb-3 searchgroup rounded"> 
            <FormControl className='mb-0 shadow-none bg-transparent' placeholder='Search by item' onChange={e => setNameQuery(e.target.value)}/>
            <FormControl className='mb-0 shadow-none bg-transparent' placeholder='Search by shop' onChange={e => setShopQuery(e.target.value)}/>
            <FormControl className='mb-0 shadow-none bg-transparent' placeholder='Search by category' onChange={e => setCategoryQuery(e.target.value)}/>
            <div className='total p-2'>Total: {total}</div>
          </InputGroup>
          <div className='subtotal p-2 rounded'>Subtotal: {subtotal} </div> 

          {filteredItems.map((item, i) => {
            return(
            <div className='item d-flex px-2 py-1 justify-content-between align-items-center mt-2 rounded text-capitalize bg-light border' key={Math.random()} id={Math.random()}> 
              <div className='text'>{i+1}. {item.name} </div>
              <div className='text'> {item.shop} </div>
              <div className='text'> {item.category} </div>
              <div className='number'> {(Math.round(item.price * 100) / 100).toFixed(2)} </div>
              <button type='button' className='btn delete' onClick={()=>{deleteItem(i)}}><i className='fas fa-trash'></i></button>
            </div>
          )})}
      </div>
    </div>
  </div>
)}

export default Expensetrack;
