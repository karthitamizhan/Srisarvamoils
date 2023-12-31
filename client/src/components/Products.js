import "../css/Products.css";
import React,{useState} from "react";
import Axios from "axios";
import logo1 from "../assets/logo1b.png";
import ScrollToTop from "../components/top.js";
import PreLoader from "./PreLoader";
import Whatsapp from "./Whatsapp";

function Products(props){
    
    const [sell, setSell] = useState([]);


    Axios.get("https://srisaravamoils.onrender.com/postItem", {

    }).then((res) => {
         
        const data = res.data
        setSell(data);
 


    });
    const Body = sell.map((val, key) => {

        return (
            
            <div className="allproducts2">
                <div className="card allvalues" key={key} >
                <img src={val.image} alt="petp" width="80%" height="130%" ></img> 
                    <hr></hr>
                    <h5 className="product-name"><b>Name :</b> {val.name}</h5>
                    <h5 className="product-name"><b>Price :</b>Rs. {val.price}</h5>
                    <h5 className="product-name"><b>Liter :</b> {val.liter}</h5>
                    <h5 className="product-name"><b>Stocks :</b> {val.stocks}</h5>
                    <button className="product-add-button" onClick={()=>props.handleAddProduct(val)}>Add to Cart</button>
                </div>
                <div>

                </div>
            </div>

        )
    })


    
    return(
        <>
        <PreLoader/>
        <h4 className="Products"><i class="fa-solid fa-droplet"></i>&nbsp; Products</h4>
        
        <div className="flexing">{Body}</div>
        
        
        <div className="backimg2">
      <div className="compdetails text-center">
        <img src={logo1} alt="compname" className="comname"></img>
        <div className="row text-center">
          <div className="col-md-4">
            <h5 className="bottom"> Any Doubts ? :</h5>
            <h6 className="doubt"><i class="fa-solid fa-phone"></i>&nbsp;9788718180</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom">Address :</h5>
            <h6 className="address"><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Sri Vaari Electrical Building,<br></br> Karur main road,<br></br> Kalipalayam Post,<br></br>Dharapuram, Tiruppur District,<br></br> Tamil nadu - 638661.</h6>
          </div>
          <div className="col-md-4">
            <h5 className="bottom">Email :</h5>
            <h6 className="email"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;srisarvamoils@gmail.com</h6>
          </div>
        </div>
      </div>
      </div>
      
        <Whatsapp/>
        <ScrollToTop/>
        </>
        
    )
            }



export default Products;