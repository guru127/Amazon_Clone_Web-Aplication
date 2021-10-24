import React from 'react'
import './../Styles/Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
           <div className="home_container" >
               <img  src="https://m.media-amazon.com/images/I/71g6GkQj38L._SX3000_.jpg"
                // src=".Images/AmazonWallpaper.png"
                 alt="image"  className="home_image" />
           
               <div className="home_row">
                  <Product
                       id="001"
                      tittle="boAt Rockerz 450 Wireless Bluetooth Headphone with Up to 15H Playback. "
                      price={999}
                      image="https://m.media-amazon.com/images/I/61IN9K+dIcL._AC_UY327_FMwebp_QL65_.jpg"
                      rating={4}
                  />  
                   <Product
                      id="002"
                      tittle="Samsung Galaxy M31s 2021 Edition"
                      price={1996.27}
                      image="https://m.media-amazon.com/images/I/61d-phh4GfL._SL1500_.jpg"
                      rating={4}
                  />  
                                         
               </div>
               <div className="home_row">
               <Product
                      id= "003"
                      tittle="Nike Men's Revolution Running Shoes"
                      price={1996.27}
                      image="https://rukminim1.flixcart.com/image/781/937/ke8uv0w0-0/shoe/o/i/e/bq3204-402-7-nike-obsidian-mist-laser-crimson-original-imafuyy2ywtfs3ry.jpeg?q=50"
                      rating={4}
                  />  
                                
                  <Product
                     id= "004"
                      tittle="Peter England Men Coat Jacket Winter Stylish Autumn and Winter Casual Solid"
                      price={1999}
                      image="https://m.media-amazon.com/images/I/71OwcH9pCqL._AC_UL480_FMwebp_QL65_.jpg"
                      rating={4}
                  />  
                                 
                  <Product
                      id= "005"   
                      tittle="Royal Enfield
                       Universal Fit X Levis Granite Jeans"
                      price={5599}
                      image="https://m.media-amazon.com/images/I/71jwt+EQZzL._AC_UL480_FMwebp_QL65_.jpg"
                      rating={4}
                  />  
                                 
               </div>
              <div className="home_row">
              <Product
                     id= "006"
                      tittle="OnePlus 108 cm (43 inches)
                       Y Series Full HD LED Smart Android TV 
                       43Y1 (Black) (2020 Model)"
                      price={29996.27}
                      image="https://m.media-amazon.com/images/I/71vZLIfj5yS._AC_UY327_FMwebp_QL65_.jpg"
                      rating={4}
                  />  
                                
             </div>
           </div>
        </div>
    )
    
}

export default Home
