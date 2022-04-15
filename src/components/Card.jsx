


function Card(props){
    return(
<section className="cards">

  <div className="container">
  <div className="card">
    <div className="card-header">
      <img src={props.image} alt="" />
    </div>
    <div className="card-body">
      <h4 >
{props.title}     
 </h4>
      <p>
price is {props.price} $ </p>
 <i className="fa fa-plus-square"></i> 

 </div>
 </div>
 </div>
</section>
 


    )
}

export default Card ;