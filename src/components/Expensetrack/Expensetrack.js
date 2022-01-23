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
  
  let total = (allItems.reduce((total, newItem) => total = total - (-newItem.price), 0)).toFixed(2);
  
  console.clear()

    const subtotal = allItems.reduce((acc = {}, item ={}) => {
      const itemTotal = (item.price)
      acc.subtotal = parseFloat(acc.subtotal + itemTotal)
      return acc;
    }, {
      subtotal: 0, total: 0
    });

    console.log(subtotal)




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
      <div>Subtotal:</div> 

      {allItems
      .filter((filteredItems) => {
        if(nameQuery==='' && shopQuery==='' && categoryQuery==='' ){return filteredItems} //all items
        else if(shopQuery==='' && categoryQuery==='' && filteredItems.name.toLowerCase().includes(nameQuery)){return filteredItems} //filter by name
        else if(nameQuery==='' && filteredItems.shop.toLowerCase().includes(shopQuery) && categoryQuery===''){return filteredItems} //fliter by shop
        else if(nameQuery==='' && shopQuery==='' && filteredItems.category.toLowerCase().includes(categoryQuery)){return filteredItems} //filter by category
        else if(shopQuery==='' && filteredItems.category.toLowerCase().includes(categoryQuery) && filteredItems.name.toLowerCase().includes(nameQuery)){return filteredItems} //filter by category and name
        else if(nameQuery==='' && filteredItems.shop.toLowerCase().includes(shopQuery) && filteredItems.category.toLowerCase().includes(categoryQuery)){return filteredItems} //filter by category and shop
        else if(filteredItems.name.toLowerCase().includes(nameQuery) && filteredItems.shop.toLowerCase().includes(shopQuery) && categoryQuery===''){return filteredItems} //filter by name and shop
        else if(filteredItems.name.toLowerCase().includes(nameQuery) && filteredItems.shop.toLowerCase().includes(shopQuery) && filteredItems.category.toLowerCase().includes(categoryQuery)){return filteredItems} //filter by all 3
      
      return console.log('subtotal')
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
  )
}

export default Expensetrack;
