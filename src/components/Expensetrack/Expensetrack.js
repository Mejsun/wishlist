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

  const newItem = {name:expenseItem, shop: shop,category: category, price: cost}

  function addExpenseItem (){setAllItems([...allItems, newItem])}

  function submitExpenseItem (e){
    e.preventDefault()
    if(e.target.value !== ''){
      addExpenseItem(allItems)
      setExpenseItem(''); setShop(''); setCategory(''); setCost('')}}

  function deleteItem(i){
    const items = [...allItems]
    if (window.confirm('This item will be deleted!')) {items.splice(i,1)}
    else{return items}
    setAllItems(items)}
  
  const total = (allItems.reduce((total, newItem) => total = total - (-newItem.price), 0)).toFixed(2);
  //const subtotal = ???

  //console.log(subtotal)

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
    

      {allItems
      .filter((item) => {
        if(nameQuery==='' && shopQuery==='' && categoryQuery==='' ){return item} //all items
        else if(shopQuery==='' && categoryQuery==='' && item.name.toLowerCase().includes(nameQuery)){return item} //filter by name
        else if(nameQuery==='' && item.shop.toLowerCase().includes(shopQuery) && categoryQuery===''){return item} //fliter by shop
        else if(nameQuery==='' && shopQuery==='' && item.category.toLowerCase().includes(categoryQuery)){return item} //filter by category
        else if(shopQuery==='' && item.category.toLowerCase().includes(categoryQuery) && item.name.toLowerCase().includes(nameQuery)){return item} //filter by category and name
        else if(nameQuery==='' && item.shop.toLowerCase().includes(shopQuery) && item.category.toLowerCase().includes(categoryQuery)){return item} //filter by category and shop
        else if(item.name.toLowerCase().includes(nameQuery) && item.shop.toLowerCase().includes(shopQuery) && categoryQuery===''){return item} //filter by name and shop
        else if(item.name.toLowerCase().includes(nameQuery) && item.shop.toLowerCase().includes(shopQuery) && item.category.toLowerCase().includes(categoryQuery)){return item} //filter by all 3
      })
      
      .map((item, i) => {return(
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
  )
}

export default Expensetrack;
