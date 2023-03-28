import React from 'react'
import logo from '../assets/yy.png'
import { Link } from 'react-router-dom';

const Search = () => {
    window.addEventListener("scroll",function(){
        const search = document.querySelector(".search")
        search.classList.toggle("ative",window.scrollY > 100)
    })
  return (
    <>
   <section className='search'>
    <div className=" c_flex">
        <div className="logo width" style={{}}>
            <img src={logo} alt="" />
        </div>
        <div className="search-box f_flex">
            <i className='fa fa-search'></i>
            <input type="search" placeholder='Search and hit enter...' />
            <span> All Category</span>
        </div>
        <div className="icon f_flex width">
            <i className='fa fa-user icon-circle p-3'></i>
            <div className="cart">
                <Link to='/cart'>
                    <i className=' fa fa-shopping-bag icon-circle '></i>
                    <span>0</span>
                </Link>
            </div>
        </div>
    </div>
   </section>
    </>
  )
}

export default Search
