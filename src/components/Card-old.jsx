function CardOld(props){
    return(
<section className="cards-old">

  <div className="container-old">
  <div className="card">
    <div className="card-header">
      <img src={props.image} alt="" />
    </div>
    <div className="card-body">
      <h4 >
       {props.title}
      </h4>
      <p className="oldp">
new price is {props.newprice} $ instead of {props.oldprice} $ </p>
 <i className="fa fa-plus-square"></i> 

 </div>
 </div>
 </div>
</section>
 


    )
}

export default CardOld ;