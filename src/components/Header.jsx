import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Header.css';
import SearchBox from './SearchBox';
import logo from '../assets/github.jpeg'

function CategoryBox({ showCategories, setShowCategories }) {
  if (!showCategories) return null;
  return (
    <div id="categoryBox" onMouseEnter={()=>{setShowCategories(true)}}
          onMouseLeave={()=>{setShowCategories(false)}}>
      <Link to={`/shop?t=catOne`}>
        <p>Category One</p></Link>
      <Link to={`/shop?t=catTwo`}>
        <p>Category Two</p></Link>
      <Link to={`/shop?t=catThree`}>
        <p>Category Three</p></Link>
      <Link to={`/shop?t=catFour`}>
        <p>Category Four</p></Link>
      <Link to={`/shop?t=catFive`}>
        <p>Category Five</p></Link>
    </div>
  )
}

function SearchResults({ showSearchbar, displayMessage }) {
  if (!showSearchbar || displayMessage === "") return null;

  return (
      <SearchBox searchTerm={displayMessage} />
  )
}

export default function Header() {
  const searchBoxRef = useRef(null);
  const location = useLocation();
  const [ showCategories, setShowCategories ] = useState(false);
  const [ showSearchbar, setShowSearchbar ] = useState(false);
  const [ query, setQuery ] = useState("");
  const [ displayMessage, setDisplayMessage ] = useState("");
  const [ mobileMenu, setMobileMenu ] = useState(false)

  const searchClass = showSearchbar ? "searchBar" : "";
  const mobileMenuClass = mobileMenu ? "ext" : "";

  useEffect(()=>{
    setShowCategories(false);
    setShowSearchbar(false);
    setMobileMenu(false);
  }, [location])

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDisplayMessage(query);
    }, 1000);
    return ()=>clearTimeout(timeOutId);
  }, [query]);

  function extendSearchbar() {
    setShowSearchbar(true);
    setTimeout(()=>{searchBoxRef.current.focus()}, 500) ;
  }

  function closeSearchbar() {
    setTimeout(()=>{
      setShowSearchbar(false);
      searchBoxRef.current.blur();
      searchBoxRef.current.value = null;
      setDisplayMessage("");
    }, 200);
  }

  return (
      <header className={`${searchClass} ${mobileMenuClass}`}>
          <div id="menu_button" className='mob' onClick={()=>{setMobileMenu(!mobileMenu)}}>
              <p className="menu_line mob" ></p>
              <p className="menu_line mob" ></p>
              <p className="menu_line mob" ></p>
          </div>
          <Link to="/" id="logoLink">
            <img src={logo} alt='logo' className=''/>
          </Link>
          <span onClick={()=>{extendSearchbar()}} id="searchButtonMain" className='mobHide'>
            Search
          </span>
          <span onClick={()=>{extendSearchbar()}} id="searchButtonMob" className='mob'>
            &#9906;
          </span>
          <div id="searchTab" className={`${searchClass}`} >
            <input type="text" id="searchBox" name="SearchBoxing" 
            ref={searchBoxRef} 
            onChange={(e)=>{setQuery(e.target.value)}}
            onBlur={()=>{closeSearchbar()}}
            />
          </div>
          <Link to={"/brands"} id="menu1" className={'mobMenu'}>
            <span >Brands</span>
          </Link>
            <span id="menu2" className={'mobMenu self'}
                onMouseEnter={()=>{setShowCategories(true)}}
                onMouseLeave={()=>{setShowCategories(false)}}
                onClick={()=>{setShowCategories(!showCategories)}}>
              Categories
            </span>
          <Link to={"/storefinder"} id="menu3" className={'mobMenu'}>
            <span>Store Finder</span>
          </Link>
          <Link to={"/account"} id="menu4" className={'mobMenu'}>
            <span>Account</span>
          </Link>
          <Link to={"/checkout"} id="menu5" className={'mobMenu last'}>
            <span>Checkout</span>
          </Link>
          <CategoryBox showCategories={showCategories} setShowCategories={setShowCategories} />
          <SearchResults showSearchbar={showSearchbar} displayMessage={displayMessage}/>

          
      </header>
  )
}
