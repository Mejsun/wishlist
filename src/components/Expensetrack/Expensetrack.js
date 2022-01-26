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
  
  let total = (allItems.reduce((total, item) => total = total - (-item.price), 0)).toFixed(2);
  let subtotal = [allItems.price];
  console.clear()
  for (let i = 0; i < allItems.length; i++){
    if (allItems[i].style !== 'hidden'){

      console.log(allItems[i].price)
    }
  }
  
  return (
  <div className='expenseTracker'>
    <form onSubmit={submitExpenseItem}>
      <InputGroup className="mb-3 todoContainer hasValidation">
        <FormControl type='text' placeholder='Item' value={expenseItem} onChange={(e)=> setExpenseItem(e.target.value)} required></FormControl>
        <FormControl type='text' placeholder='Shop' value={shop} onChange={(e)=> setShop(e.target.value)} required></FormControl>
        <FormControl type='text' placeholder='Category' value={category} onChange={(e)=> setCategory(e.target.value)} required></FormControl>
        <FormControl type='number' placeholder='Price' value={cost} onChange={(e)=> setCost(e.target.value)} required></FormControl>
        <Button variant="outline-secondary" id="button-addon2" type='submit'><i className="fas fa-plus"></i></Button>
      </InputGroup>
    </form>
    <div>
      <InputGroup className="mb-3 todoContainer searchgroup"> 
        <FormControl placeholder='Search by item' onChange={e => setNameQuery(e.target.value)}/>
        <FormControl placeholder='Search by shop' onChange={e => setShopQuery(e.target.value)}/>
        <FormControl placeholder='Search by category' onChange={e => setCategoryQuery(e.target.value)}/>
        <div className='total'>Total: {total}</div>
      </InputGroup>
      <div>Subtotal: {subtotal}</div> 

      {allItems
      .filter((item) => {
        if((nameQuery==='' && shopQuery==='' && categoryQuery==='') //all items
        || (item.name.toLowerCase().includes(nameQuery) && shopQuery==='' && categoryQuery==='') //filter by name
        || (nameQuery==='' && item.shop.toLowerCase().includes(shopQuery) && categoryQuery==='') //filter by shop
        || (nameQuery==='' && shopQuery==='' && item.category.toLowerCase().includes(categoryQuery)) //filter by category
        || (item.name.toLowerCase().includes(nameQuery) && shopQuery==='' && item.category.toLowerCase().includes(categoryQuery)) //filter by category and name
        || (nameQuery==='' && item.shop.toLowerCase().includes(shopQuery) && item.category.toLowerCase().includes(categoryQuery)) //filter by category and shop
        || (item.name.toLowerCase().includes(nameQuery) && item.shop.toLowerCase().includes(shopQuery) && categoryQuery==='') //filter by name and shop
        || (item.name.toLowerCase().includes(nameQuery) && item.shop.toLowerCase().includes(shopQuery) && item.category.toLowerCase().includes(categoryQuery)) //filter by all 3
        ){
          return item}   
      })

      .map((item, i) => {
        return(
        <div className='item' key={Math.random()} id={Math.random()}> 
          <div className='text'>{i+1}. {item.name} </div>
          <div className='text'> {item.shop} </div>
          <div className='text'> {item.category} </div>
          <div className='number'> {(Math.round(item.price * 100) / 100).toFixed(2)} </div>
          <button type='button' className='btn delete' onClick={()=>{deleteItem(i)}}><i className='fas fa-trash'></i></button>
        </div>
      )})}
    </div>
  </div>
)}

export default Expensetrack;
