import "./Product.css"

function Product({title, price, features}){
    //rendering arrays
    // const list features.map((feature) => <li>{feature}</li>)
    return(
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            
        </div>
        
    )
}

export default Product;