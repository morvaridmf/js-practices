
import {useState} from "react"


function Card(props){
const [quantityValue, setQuantityValue]= useState(0)
// const [selected, setSelected]=useState(false)
const [selected, setSelected]=useState(false)
const [selectHeart, setSelectHeart]=useState (false)

const increaseQuantity=()=>{
  setQuantityValue(quantityValue+1)
  props.setQt()
}
const redHeart=()=>{
setSelectHeart(!selectHeart)
}

const borderChange=()=>{
  setSelected(!selected)
}
// const selectDone=()=>{
// setSelected(!selected)
// }

    return(
<section className={`cards ${selected ? "border-style" : ""}`} onClick={borderChange}>

  <div className="container">
  <div className="card">
    <div className="card-header">
      <img src={props.image} alt="" />
    </div>
    <div className="card-body">
      <h4 >
{props.title}     
 </h4>
      <p><span className="price"> {props.price} </span>
 $ </p>
 <div>
   <button onClick={increaseQuantity}><i className="fa fa-plus-square"></i> </button>
   <input  className= "quantity" type="text" value={quantityValue}/>
   <i class={`fa-regular fa-heart HEART ${props.likeB ? "fa-regular fa-heart HEART1": ""} ${selectHeart ? "fa-solid fa-heart HEART2" : ""}`} onClick={redHeart}></i>

 {/* <button onClick={selectDone}>select</button>
 <div>{selected ? "item selected" : "not select"}</div> */}

 
 
  </div>
 </div>
 </div>
 </div>
</section>
 


    )
}

export default Card ;