import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
           <div className="home_container" >
               <img src="https://www.technodecks.com/wp-content/uploads/2021/06/Wallpaper_com.amazon.avod_.thirdpartyclient.jpg"  alt="image"  className="home_image" />
           
               <div className="home_row">
                  <Product
                       id="001"
                      tittle="boAt Rockerz 450
                       Wireless Bluetooth Headphones 
                       with Mic "
                      price={999}
                      image="https://m.media-amazon.com/images/I/51xxA+6E+xL._AC_UY327_FMwebp_QL65_.jpg"
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
                      tittle="Head phone"
                      price={1996.27}
                      image="https://m.media-amazon.com/images/I/71fD5J6r3NS._AC_UL480_FMwebp_QL65_.jpg"
                      rating={4}
                  />  
                                
                  <Product
                     id= "004"
                      tittle="Peter England
                        blue formal Shirt"
                      price={1999}
                      image="https://m.media-amazon.com/images/I/91VoXe0sOvL._AC_UL480_FMwebp_QL65_.jpg"
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
