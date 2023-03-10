import React ,{useState}from 'react'
import {Product} from "../../components"
import {AiOutlineMinus,AiOutlinePlus,AiFillStar,AiOutlineStar} from "react-icons/ai"
import {useStateContext} from "../../context/StateContext"

let staticProducts = {
      "X8-Ultra-Smartwatch-49MM":{
            "_createdAt": "2022-12-23T12:21:48Z",
            "_id": "0ce2dbce-c80e-4fd7-b0be-2ff828adf524",
            "_rev": "L8aFLi55VFgOg3uLsrVSOr",
            "_type": "product",
            "_updatedAt": "2022-12-23T12:21:48Z",
            "details": `
Screen size: 2.08nch 
Waterproof level: IP67 
APP: WearFit pro
System requirements: Android5.0+ / ios10.0+
The main chip:HS6621-PG
Memory: 128MB
Bluetooth phone:AB5376A2
Bluetooth version:5.2
Battery capacity:300mah
Loudspeaker: YES
Charging interface mode: wireless charger cable
Note: Straps Color is Random
What's in the box:
Smart watch*1
Wireless Charger *1
User manual *1`,
            "image": [
                {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "image-a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555-webp",
                        "_type": "reference"
                    }
                },

            {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "image-9W945618cb6150813c237942a285c0af8597c7718-600x600-webp",
                        "_type": "reference"
                    }
                },




            ],

                "reviews":[
                  {
                    "comment": "Very hight quality product, thanks",
                    "images": ["1.jpg","2.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/48.jpg",
                    "username":"Serenity Howard"
                    },

                         {
                    "comment": "Fast shipping , came exactly as promoted.",
                    "images": ["3.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/4.jpg",
                    "username":"Vivan Fields"
                    },


                     {
                    "comment": "Really good watch for that price , recomended",
                    "images": ["4.jpg","6.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/54.jpg",
                    "username":"Ethan Barrett"
                    },


                     {
                    "comment": "goods match the description",
                    "images": ["5.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/37.jpg",
                    "username":"Cory Allen"
                    }
            ],
            "name": "X8 Ultra Smartwatch 49MM",
            "price": 20,
            "slug": {
                "_type": "slug",
                "current": "X8-Ultra-Smartwatch-49MM"
            }
         },
        "Xiaomi-Smart-Band-7-Pro":{
              "reviews":[
                  {
                    "comment": "Very hight quality product, thanks",
                    "images": ["1.jpg","2.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/48.jpg",
                    "username":"Serenity Howard"
                    },

                         {
                    "comment": "Fast shipping , came exactly as promoted.",
                    "images": ["3.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/4.jpg",
                    "username":"Vivan Fields"
                    },


                     {
                    "comment": "Really good watch for that price , recomended",
                    "images": ["4.jpg","6.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/54.jpg",
                    "username":"Ethan Barrett"
                    },


                     {
                    "comment": "goods match the description",
                    "images": ["5.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/37.jpg",
                    "username":"Cory Allen"
                    },


                     {
                    "comment": "good",
                    "images": ["7.jpg","8.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/29.jpg",
                    "username":"Timmothy Neal"
                    }

            ],
            "_createdAt": "2022-12-23T12:21:48Z",
            "_id": "0ce2dbce-c80e-4fd7-b0be-2ff828adf524",
            "_rev": "L8aFLi55VFgOg3uLsrVSOr",
            "_type": "product",
            "_updatedAt": "2022-12-23T12:21:48Z",
            "details": `
Dimensions: 44.7x28.8x11 mm (without strap)
Weight: 20.5g (without strap)
Bracelet length: 130-205 mm
Protection: 5ATM water resistance`,
            "image": [
                {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "cdb4bf9df390fd8f52b2cf7f25599b4ffa997f48ddcbf4ad816207e19023840b (1).png",
                        "_type": "reference"
                    }
                },
                     {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "6b8690a485fa10c8da780ae2ceca4343c28cd7dbfd34a501b75fbbc5046041d3.png",
                        "_type": "reference"
                    }
                }
            ],
            "name": "Xiaomi Smart Band 7 Pro",
            "price": 30,
            "slug": {
                "_type": "slug",
                "current": "Xiaomi-Smart-Band-7-Pro"
            }
         },
            "Oratech-Smartwatch-i7-Pro-Max-Series-7":{
            "_createdAt": "2022-12-23T12:21:48Z",
            "_id": "0ce2dbce-c80e-4fd7-b0be-2ff828adf524",
            "_rev": "L8aFLi55VFgOg3uLsrVSOr",
            "_type": "product",
            "_updatedAt": "2022-12-23T12:21:48Z",
            "details": `
 Model name: i7 PRO MAX
 Brand-AppIe???
 Watch Size: *44*38*10.7 mm*???
 Resolution: *240 *240 Pixel*???
 Bluetooth: Support *3.0, 4.0*???
 LCD type: IPS???
 Battery:200mAh???
 Wireless Megnetic charger???
 Bluetooth to play music???
 Can make calls???
 High-quality sound???
 Turn the wrist and bright screen???
 Various Dials -- 7 Different Faces
 Heart rate blood pressure and blood oxygen measurement???
 More functions are waiting for you to Experience*????
 Higher specification packaging can be used as gifts for friends and relatives*????`,
            "image": [
                {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "515BNisImJL._SX522_ (1).jpg",
                        "_type": "reference"
                    }
                },
                     {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "410gBstwbEL._SX522_.jpg",
                        "_type": "reference"
                    }
                }
            ],
            "name": "Oratech Smartwatch i7 Pro Max Series 7",
            "price": 10,
            "slug": {
                "_type": "slug",
                "current": "Oratech-Smartwatch-i7-Pro-Max-Series-7"
            },
             "reviews":[
                  {
                    "comment": "Very hight quality product, thanks",
                    "images": ["1.jpg","2.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/48.jpg",
                    "username":"Serenity Howard"
                    },

                         {
                    "comment": "Fast shipping , came exactly as promoted.",
                    "images": ["3.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/4.jpg",
                    "username":"Vivan Fields"
                    },


                     {
                    "comment": "Really good watch for that price , recomended",
                    "images": ["4.jpg","6.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/54.jpg",
                    "username":"Ethan Barrett"
                    },


                     {
                    "comment": "goods match the description",
                    "images": ["5.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/37.jpg",
                    "username":"Cory Allen"
                    }
            ],
         },


    "Wise-Glaze":{
             "reviews":[
                  {
                    "comment": "Very hight quality product, thanks",
                    "images": ["1.jpg","2.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/48.jpg",
                    "username":"Serenity Howard"
                    },

                         {
                    "comment": "Fast shipping , came exactly as promoted.",
                    "images": ["3.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/4.jpg",
                    "username":"Vivan Fields"
                    },


                     {
                    "comment": "Really good watch for that price , recomended",
                    "images": ["4.jpg","6.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/54.jpg",
                    "username":"Ethan Barrett"
                    },


                     {
                    "comment": "goods match the description",
                    "images": ["5.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/37.jpg",
                    "username":"Cory Allen"
                    }
            ],
            "_createdAt": "2022-12-23T12:21:48Z",
            "_id": "0ce2dbce-c80e-4fd7-b0be-2ff828adf524",
            "_rev": "L8aFLi55VFgOg3uLsrVSOr",
            "_type": "product",
            "_updatedAt": "2022-12-23T12:21:48Z",
            "details": `
Screen size: 2.08nch 
Waterproof level: IP67 
APP: WearFit pro
System requirements: Android5.0+ / ios10.0+
The main chip:HS6621-PG
Memory: 128MB
Bluetooth phone:AB5376A2
Bluetooth version:5.2
Battery capacity:300mah
Loudspeaker: YES
Charging interface mode: wireless charger cable
Note: Straps Color is Random
What's in the box:
Smart watch*1
Wireless Charger *1
User manual *1`,
            "image": [
                {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "Black_1080x (1).webp",
                        "_type": "reference"
                    }
                },

 {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "Listing_Black6_1080x.webp",
                        "_type": "reference"
                    }
                },




            ],
            "name": "Wise Glaze",
            "price": 20,
            "slug": {
                "_type": "slug",
                "current": "Wise-Glaze"
            }
         },

  "Xiaomi-Redmi-Watch-2-Lite-Black":{
     "reviews":[
                  {
                    "comment": "Very hight quality product, thanks",
                    "images": ["1.jpg","2.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/48.jpg",
                    "username":"Serenity Howard"
                    },

                         {
                    "comment": "Fast shipping , came exactly as promoted.",
                    "images": ["3.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/women/4.jpg",
                    "username":"Vivan Fields"
                    },


                     {
                    "comment": "Really good watch for that price , recomended",
                    "images": ["4.jpg","6.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/54.jpg",
                    "username":"Ethan Barrett"
                    },


                     {
                    "comment": "goods match the description",
                    "images": ["5.jpg"],
                    "userImage":"https://randomuser.me/api/portraits/men/37.jpg",
                    "username":"Cory Allen"
                    }
            ],
            "_createdAt": "2022-12-23T12:21:48Z",
            "_id": "0ce2dbce-c80e-4fd7-b0be-2ff828adf524",
            "_rev": "L8aFLi55VFgOg3uLsrVSOr",
            "_type": "product",
            "_updatedAt": "2022-12-23T12:21:48Z",
            "details": `
1.55" colourful touch display
100+ fitness modes
5 ATM water resistance
SpO??? measurement and 24-hour heart rate tracking
Multi-system standalone GPS
10-day extra-long battery life
`,
            "image": [
                {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "0157610_xiaomi-redmi-watch-2-lite-black_550 (1).jpeg",
                        "_type": "reference"
                    }
                },

 {
                    "_key": "e916ef72026d",
                    "_type": "image",
                    "asset": {
                        "_ref": "0157611_xiaomi-redmi-watch-2-lite-black_550.jpeg",
                        "_type": "reference"
                    }
                },
            ],
            "name": "Xiaomi Redmi Watch 2 Lite Black",
            "price": 22,
            "slug": {
                "_type": "slug",
                "current": "Xiaomi-Redmi-Watch-2-Lite-Black"
            }
         },
 

}





const ProductDetails = ({product,products,slug}) => {
    console.log(slug)
    product = staticProducts[slug]
    const {image,name,details,price} = product
 

    const [index,setIndex] = useState(0)
    const {decQty,incQty,qty,onAdd,setShowCart} = useStateContext()

    const handleBuyNow = ()=>{
        onAdd(product,qty)
        setShowCart(true)

    }
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img   src={('/assets/' + image[index].asset._ref)} className="product-detail-image"/>
                </div>
                <div className='small-images-container'>
                    {
                        image?.map((item,i)=>(
                            <img src={('/assets/' + item.asset._ref)}  key={item+i}
                            className={i===index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={()=>setIndex(i)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    </div>
                    <p>(20)</p>
                      <div>
                 
                    </div>
                    <p style={{textDecoration:"underline"}}>100 reviews </p>
                    <p style={{textDecoration:"underline"}}>197 bought </p>
                </div>

                <h4 >Description : </h4>
                <p style={{whiteSpace:"pre-wrap"}}>{details}</p>
                <p className='price'>${price}</p>
                <div className='quantity'>
                    <h3>Quantity : </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty}>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num' >
                            {qty}
                        </span>
                        <span className='plus' onClick={incQty}>
                            <AiOutlinePlus/>
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick={()=>onAdd(product,qty)}>
                        Add to Cart
                    </button>
                    <button type='button' className='buy-now' onClick={handleBuyNow}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>










<div style={{padding:"20px !important"}}>
          <h2>User Reviews</h2>

</div>




<section id="testimonials">

        <div class="testimonial-box-container">
        
          
           {
            product.reviews.map(itm => {
                return (

            <div class="testimonial-box">
                <div class="box-top">
                    <div class="profile">
                        <div class="profile-img">
                            <img src={itm.userImage} />
                        </div>
                        <div class="name-user">
                            <span>{itm.username}</span>
                        </div>
                    </div>
                    <div class="reviews">     
                      <a href="https://uk.trustpilot.com/review/www.packagingworld.co.uk" target="_blank">
                        <div class="okayyyyy"></div>
                      </a>
                    </div>
                </div>
                <div class="client-comment">
                    <p>{itm.comment}</p>
                </div>
                     <div style={{display:"flex",gap:20}}>
              

                    
              
                   {
                itm.images.map((imm) => {
                  return (   <img style={{width:100}} src={"/assets/reviews/" + product.slug.current + "/" + imm} />)
                 })
                  }
                </div>
            </div>
        

                )
            })
           }



        </div>
      </section>












        <div className='maylike-products-wrapper'>




                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {
                            products.map((item)=>(
                                <Product key={item._id}
                                     product={item}
                                />
                            ))
                        }
                    </div>
                </div>

        </div>
    </div>
  )
}

export const getStaticPaths = async()=>{
    const Products =  Object.values(staticProducts)


    const paths = Products.map((product)=>({
        params : {
            slug : product.slug.current
        }
    }))

    return {
        paths,
        fallback : 'blocking'
    }
}

export const getStaticProps = async({params:{slug}})=>{


 


    const product =  staticProducts[slug]
    const products = Object.values(staticProducts)

 
    return{
        props : {product,products, slug}
    }
}

export default ProductDetails