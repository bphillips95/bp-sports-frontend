import React, { Component } from 'react'
import BatLogo from '../shirt_with_bat.jpeg'
import LogoShirt from '../shirt_with_logo.jpeg'
import ShirtDesign1 from '../shirt_design_1.jpeg'

export default class Store extends Component {
    render() {
        return (
            <div class="card-columns">
  <div class="card">
    <img src={LogoShirt} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Logo Shirt $24.95</h5>
      <p class="card-text">This shirt has the classic BP Sports Logo </p>
    </div>
    <div class="card-footer">
      <button>Buy</button>
    </div>
  </div>
  <div class="card">
    <img src={ShirtDesign1} class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title">Home Plate Shirt $14.95 </h5>
      <p class="card-text">Plain T-shirt with classic design</p>
    </div>
    <div class="card-footer">
      <button>Buy</button>
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
      <h5 class="card-title">Bat Shirt  $14.95 </h5>
      <p class="card-text">Plain T-shirt with bat and ball design</p>
    </div>
    <div class="card-footer">
      <button>Buy</button>
    </div>
  </div>
</div>






        )
    }
}

// {/* <div> */}
//    {/* // style={{"text-align": "center"}} */}
// {/* <div> <img src={BatLogo} alt="shirt pic"/></div>  
//  <div style={{"marginLeft": "55vw", "width":"20vw" }} ><img src={LogoShirt} alt="shirt pic"/></div>  
//    <img src={ShirtDesign1} alt="shirt pic"/> */}
//    {/* </div> */}
{/* //     <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
//     <ol class="carousel-indicators">
//       <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
//       <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
//       <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
//     </ol>
//     <div class="carousel-inner" style={{height: "500px"}}>
//       <div class="carousel-item active">
//         <img src={BatLogo} class="d-block w-100" alt="..."></img>
//         <div class="carousel-caption d-none d-md-block">
//           <h5>First slide label</h5>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img src={ShirtDesign1} class="d-block w-100" alt="..."></img>
//         <div class="carousel-caption d-none d-md-block">
//           <h5>Second slide label</h5>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </div>
//       </div>
//       <div class="carousel-item">
//         <img src={LogoShirt} class="d-block w-100" alt="..."></img>
//         <div class="carousel-caption d-none d-md-block">
//           <h5>Third slide label</h5>
//           <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         </div>
//       </div>
//     </div>
//     <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="sr-only">Previous</span>
//     </a>
//     <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="sr-only">Next</span>
//     </a>
//   </div> */}