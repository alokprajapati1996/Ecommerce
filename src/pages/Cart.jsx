
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, addToWishList } from '../features/CardSlice'

const Cart = () => {
    // let store = useSelector((state)=>state.cart)
    // console.log(store)

    const[card,setCard]=useState([])
  const dispatch = useDispatch();

async function check(){
    let spiFetch=await fetch("https://dummyjson.com/products?limit=0")
    const data= await spiFetch.json();
    console.log(data);
    setCard(data.products)
    
} 
useEffect(()=>{
    check();
},[])

// const handleAddToCart=(obj)=>{
//     dispatch(addToCart(obj));
//     console.log(obj);
    
    
    
//       }
      
  return (
    <>
    {/* <div className=' grid grid-cols-3'>
        {card.map((ele)=>{
            return <div className='w- p-3 mx-3  border-2 m-2' key={ele.id}>
                <p><Link to="/singleCart"><img src={ele.images[0].includes('[')?ele.images[0].slice(2,ele.images[0].length-1):ele.images[0]} alt="" /></Link></p>
                 
                 <p>{ele.title}</p>
                 <p>price:${ele.price}</p>
                 <p>{ele.category.name}</p>
                 <button className='bg-orange-500 p-2 rounded-full mx-20'
                  onClick={()=>dispatch(add(ele))}>add to cart</button>
            </div>
        })}
    </div> */}
    <div className=" font-sans p-4 mx-auto lg:max-w-6xl md:max-w-3xl">
    <div className="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 
    sm:gap-6 ">
    {
      card.map((ele)=>{
      return    <div className="">
      <div className=' hover:outline-gray-800'>
        <div className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-xl transition-all">
          <div className="w-48 h-48">
            <Link to="/singleCart" state={ele}><img src={ele.thumbnail} alt="Product 1" className="w-full object-contain 
            object-top aspect-[230/307]" /></Link>
          </div>
          <div className="p-2 flex-1 flex flex-col">
            <div className="flex-1">
              <h5 className="text-sm sm:text-base font-bold text-gray-800 truncate">{ele.title}</h5>
              <p className="mt-1 text-gray-500 truncate">{ele.brand}</p>
              <div className="flex flex-wrap justify-between gap-2 mt-2">
                <div className="flex gap-2">
                  <h6 className="text-sm sm:text-base font-bold text-gray-800">${ele.price}</h6>
                  <h6 className="text-sm sm:text-base text-gray-500"><strike>$15</strike></h6>
                </div>
                <div className="flex items-center gap-0.5">
                rating:{ele.rating}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <button className="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
               title="Wishlist"onClick={()=>dispatch(addToWishList(ele))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-pink-600 inline-block"
                 viewBox="0 0 64 64">

                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 
                  .06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 
                  1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                </svg>
              </button>
              <button type="button" className="text-sm px-2 min-h-[36px] w-full
               bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none
                border-none rounded"  onClick={()=>dispatch(addToCart(ele))}>Add to cart</button>
                <Link to="/singleCart" state={ele} className="text-sm px-2 min-h-[36px] w-full
               bg-blue-600 hover:bg-blue-700 text-white tracking-wide
                 outline-none  flex items-center justify-center
                border-none rounded">show cart</Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
})
    }
    
    </div>
 </div>
    </>
  )
}

export default Cart