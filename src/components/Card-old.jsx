import {useState} from "react"


function CardOld(props){

 const [selected1, setSelected1]=useState(false)
 const [quantityValue1, setQuantityValue1]=useState(0)
 const borderChange1= ()=>{
   setSelected1(!selected1)
 }

 const increaseQuantity1 =()=>{
   setQuantityValue1(quantityValue1+1)
   props.setQt()
 }


    return(
<section className={`cards-old ${selected1 ? "border-style" : ""}`} onClick={borderChange1}>

  <div className="container-old">
  <div className="card">
    <div className="card-header">
      <img src={props.image} alt="" />
    </div>
    <div className="card-body">
      <h4 >
       {props.title}
      </h4>
      <p ><span className="new-price"> {props.newprice}</span> $  <br>
      </br><br></br>
 <span className="old-price">{props.oldprice} </span> $ </p>
 <div>
   <button onClick={increaseQuantity1}><i className="fa fa-plus-square"></i> </button>
   <input  className= "quantity" type="text" value={quantityValue1}/>
 </div>
 
 </div>
 </div>
 </div>
</section>
 


    )
}

export default CardOld ;