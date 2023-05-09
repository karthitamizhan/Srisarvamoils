import React,{useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar2 from "./components/Navbar1";
import Home from "../src/components/Home";
import Products from "./components/Products";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Login from "../src/components/Login";
import NoPage from "../src/components/NoPage";
import SignUp from "../src/components/Signup.js";
import data from './components/Data';
import Cart from './components/Cart';
import Form from "./components/Form";
import "./index.css";
import "./App.css";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminNav from "./components/Admin/AdminNav";
import ViewProducts from "./components/Admin/ViewProduct";
import Order from "./components/Admin/Order";
import AddProduct from "./components/Admin/AddProduct";

function App() {
  
  const [cartItems,setCartItems]=useState([]);

  const handleAddProduct=(product)=>{
    alert("Product is add to the cart");
    const ProductExist=cartItems.find((item)=>item._id===product._id);
    console.log("product id",product._id,ProductExist);
    if(ProductExist){
      setCartItems(
        cartItems.map((item)=>
        item.id===product.id
          ?{ ...ProductExist, quantity:ProductExist.quantity+1}:item)
      );
    }else{
        setCartItems([...cartItems,{ ...product,quantity:1}]);
      }
    };

    const handleRemoveProduct=(product)=>{
      const ProductExist=cartItems.find((item)=>item._id===product._id);
      if(ProductExist){
        setCartItems(cartItems.filter((item)=>item._id !==product._id));
      }else{
        setCartItems(
        cartItems.map((item)=>
          item._id===product._id
          ? { ...ProductExist,quantity:ProductExist.quantity-1}:item
        )

        );
      }
    }

    const handleCartClearance=()=>{
      setCartItems([]);
    }
    



    
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar2 cartItems={cartItems} />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products  handleAddProduct={handleAddProduct}/>} loading />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
          <Route path="form" element={<Form/>} />
          <Route path="admin" element={<AdminLogin/>}/>
          <Route path="adminNav" element={<AdminNav/>}/>
          <Route path="viewproduct" element={<ViewProducts />}/>
          <Route path="order" element={<Order/>}/> 
          <Route path="addproduct" element={<AddProduct/>}/>


        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}


export default App;
