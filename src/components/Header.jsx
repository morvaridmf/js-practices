import{useState} from "react"


function Header(props){
  const[selected,setSelected]=useState(true)
  const signed=()=>{
   setSelected(!selected)
   props.setLike()
  }
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
<span className="quantityT" >{props.qt}</span> 
<button className={`sign-in ${selected ? "" : "sign-out"}`} onClick={signed}>{selected ? "Sign In" : "Sign Out" }</button>
</div> 
  </header>


    

    )
};




export default Header;