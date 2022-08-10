import React from "react";
import "./Main.css";
export default function main() {
  return (
    <div>
      <div className="main-container justify-center items-center bg-black h-auto ">
        <div className="container-main">
          <div className="row lg:flex md:text-3xl w-11/12 mx-auto ">
            <div className="container-column1 w-1/2 my-5 mx-auto">
              
              <div className="column1-images flex  items-center justify-center">
                <div className="col1-img1 flex-initial">
                  <img src="./images/webbg2.png" alt="" />
                </div>
                <div className="col1-img2 flex-initial ">
                  <img src="./images/webbg1.png" alt="" />
                </div>
                <div className="col1-img3 flex-initial ">
                  <img src="./images/webbg2.png" alt="" />
                </div>
              </div>

              <div className="count-desc">
                <div className="count-desc-content w-4/5 flex m-auto">
                  <div className="total">
                    <p className="count-number">2500+</p>
                    <p className="count-title">Total</p>
                  </div>
                  <div className="sold">
                    <p className="count-number">2500+</p>
                    <p className="count-title">Sold</p>
                  </div>
                  <div className="price">
                    <p className="count-number">2500+</p>
                    <p className="count-title">Price</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-column2">
              <div className="column2-contents">
                <p className="red-saint-title text-xl md:text-6xl">RED SAINT</p>
                <p className="scarf-subhead tracking-[.5em]">The Scarf Ninja</p>
                <img src="./images/ninja.png" alt="" />
                <p className="text-sm" >The justice devil who sends his enemy to hell. A collection of 3,578 scarf ninjas. Mint and collect the one and only Red Saint.</p>
                
              </div>
              <div className="join-btn text-center p-2 m-4">
              <button type="button" 
                class="inline-block px-6 py-2.5 bg-red-800 text-white 
                font-bold text-xl leading-tight rounded-full 
                shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 
                focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 
                active:shadow-lg transition duration-150 ease-in-out">Join Red Army
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
