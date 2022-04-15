function Header(){
    return(
        
    <header>
     <div className="title">
 
      <a href={""}>Women</a>
      <a href={""}>Men</a>
      <a href={""}>Children</a>
    </div>
    <div className="logo">
      <h1>Online-Shopping</h1>
    </div>
    <div className="search">
      <input type="text" value="search" id="search" placeholder="Search" />
      <button class="btn" type="submit">Search</button>
<i class="fa-solid fa-cart-shopping"></i>    
</div> 
  </header>


    

    )
};




export default Header;