import React, { Component } from 'react'
import BatLogo from '../shirt_with_bat.jpeg'
import LogoShirt from '../shirt_with_logo.jpeg'
import ShirtDesign1 from '../shirt_design_1.jpeg'
import StripeCheckout from 'react-stripe-checkout';

export default class Store extends Component {
  
  handleBuy = () => {
    alert("Thank you for your purchase.")
  }
  onToken = (token) => {
    fetch('https://bp-sports-backend.herokuapp.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
      body: JSON.stringify({
        token: token.id,
        amount: 2495
      }),
    }).then(response => {
      response.json().then(data => {
        });
      });
          alert("Your payment was succesfull");
  }
    
    render() {
        return (
            <React.Fragment>
            <div class="card-columns">
  <div class="card">
    <img src={LogoShirt} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Logo Shirt $24.95</h5>
      <p class="card-text">This shirt has the classic BP Sports Logo </p>
    </div>
    <div class="card-footer">
      {/* <button onClick={this.handleBuy}>Buy</button> */}
      <StripeCheckout
        name="BP Sports Merch"
        token={this.onToken}
        label="Pay with 💳"
        amount={2495}
        // bitcoin
        allowRememberMe="false"
        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
      />
    </div>
  </div>
  <div class="card">
    <img src={ShirtDesign1} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Home Plate Shirt $24.95 </h5>
      <p class="card-text">Plain T-shirt with classic design</p>
    </div>
    <div class="card-footer">
    {/* <button onClick={this.handleBuy}>Buy</button> */}
    <StripeCheckout
        token={this.onToken}
        label="Pay with 💳"
        amount={2495}
        allowRememberMe="false"
        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
      />
    </div>
  </div>
  <div class="card bg-primary text-white text-center p-3">
    <blockquote class="blockquote mb-0">
      <p>"BP sports products have a lifetime-guarantee. Quality you can rely on."</p>
      <footer class="blockquote-footer text-white">
        <small>
          Someone famous 
        </small>
      </footer>
    </blockquote>
  </div>
  <div class="card">
    <img src={BatLogo} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Bat Shirt  $24.95 </h5>
      <p class="card-text">Plain T-shirt with bat and ball design</p>
    </div>
    <div class="card-footer">
    {/* <button onClick={this.handleBuy}>Buy</button> */}
    <StripeCheckout
        token={this.onToken}
        label="Pay with 💳"
        amount={2495}
        allowRememberMe="false"
        stripeKey={process.env.REACT_APP_STRIPE_API_KEY}
      />
    </div>
  </div>
</div>
</React.Fragment>
        )
    }
}