// import React from "react";
// import "../css/Navbar1.css";
// import logo1 from "../assets/logo1b.png";
// export default function AdminNav(){
//     return(
//         <>
//         <header>

//         <div class="container-fluid">

//             <div class="navb-logo">
//                 <img src={logo1} alt="Logo" />
//             </div>

//             <div class="navb-items nav-items d-none d-xl-flex">

//                 <div class="item">
//                     <NavLink to="/"  >Home</NavLink>
//                 </div>

//                 <div class="item">
//                     <NavLink to="/products"  >Products</NavLink>
//                 </div>

//                 <div class="item">
//                     <NavLink to="/contact" >Contact</NavLink>
//                 </div>

//                 <div class="item">
//                     <NavLink to="/about" >About</NavLink>
//                 </div>

//                 <div class="item-button">
//                     <a href="/login" type="button" >Login</a>
//                 </div>
//                 <div class="item">
//                     <NavLink to="/cart">
//                         <i class="fas fa-shopping-cart"/>
//                         <span className="cart-length">
//                             {props.cartItems.length ===0 ? "" : props.cartItems.length}
//                         </span>
//                     </NavLink>
//                 </div>

                
//             </div>


//             <div class="mobile-toggler d-xl-none">
//                 <a href="/home" data-bs-toggle="modal" data-bs-target="#navbModal">
//                 <i class="fa fa-solid fa-bars fontbars"></i>
//                 </a>
//             </div>


//             <div class="modal fade" id="navbModal" tabindex="-1" aria-labelledby="exampleModalLabel"
//                 aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">

//                         <div class="modal-header">
//                             <img src={logo1} alt="Logo" />
//                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa fa-xmark"></i></button>
//                         </div>

//                         <div class="modal-body">

//                             <div class="modal-line">
//                             <i class="fa fa-home" aria-hidden="true"></i><a href="/">Home</a>
//                             </div>

//                             <div class="modal-line">
//                             <i class="fa-solid fa-droplet"></i> <a href="/products">Products</a>
//                             </div>

//                             <div class="modal-line">
//                             <i class="fa-solid fa-phone"></i> <a href="/contact">Contact</a>
//                             </div>

//                             <div class="modal-line">
//                             <i class="fa-solid fa-circle-info"></i> <a href="/about">About</a>
//                             </div>

//                             <a href="/login" class="navb-button" type="button">Login</a>
//                         </div>

                        
//                     </div>
//                 </div>
//             </div>

//         </div>
//         </header>
//         </>
//     );
// }