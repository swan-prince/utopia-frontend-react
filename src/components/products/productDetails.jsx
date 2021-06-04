import React, { Component } from "react";
import "../common/index.scss";

//header footer

import StoreHeader from "../common/headers/storeheader";
import FooterOne from "../common/footers/footer-one";

//details
import LeftImage from "./left-image";
import ProductReviews from "./common/product/product-reviews";

//realted product

class HomePage extends Component {
  componentDidMount() {
    document.getElementById("color").setAttribute("href", `#`);
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }
  addToWishlistClicked(items) {
    console.log(items);
  }
  addToCart() {
    console.log("aadded");
  }
  addToCartUnsafe() {
    console.log("aadded unsafe");
  }

  render() {
    var item = {
      id: "5d3c87034532003a6c666a67",
      name: "Levis Denim",
      shortDetails: "This is Levi Denim ",
      variants: [
        { color: "black", images: "/assets/images/product/6.jpg" },
        { color: "blue", images: "/assets/images/product/6.jpg" },
      ],
      discount: "0",
      price: "100",
      size: ["XS", "S", "M", "L", "XL"],
      stock: 20,
      pictures: [
        "/assets/images/product/6.jpg",
        "/assets/images/product/5.jpg",
      ],
      reviews: [
        {
          name: "John Snow",
          rating: 4,
          date: "28/8/2019",
          note: "This is my review for the product",
        },
        {
          name: "Sansa Stark",
          rating: 4,
          date: "28/8/2019",
          note:
            "This is my review for the productThis is my review for the product This is my review for the productThis is my review for the productTThis is my review for the producthis is my review for the product This is my review for the product",
        },
      ],
      description: [
        {
          property: "Ideal For",
          value: "Women",
        },
        { property: "Pattern", value: "Embroidered" },
        { property: "Fabric", value: "Silk" },
        { property: "Type", value: "Ghagra, Choli, Dupatta Set" },
        { property: "Neck", value: "Round" },
        { property: "Sleeve", value: "3/4 Sleeve" },
      ],
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      seller: {
        name: "Seller1",
        ratings: 4,
        email: "seller@seller.com",
      },
    };

    var symbol = "AED";
    return (
      <div>
        <StoreHeader logoName={"logo.png"} />
        <div>
          <LeftImage
            symbol={symbol}
            item={item}
            addToCart={this.addToCart}
            addToCartUnsafe={this.addToCartUnsafe}
            addToWishlist={this.addToWishlistClicked}
          />
        </div>
        <section>
          <div class="collection-wrapper">
            <div class="container">
              <div class="row" />
              <ProductReviews reviews={item.reviews} />
            </div>
          </div>
        </section>
        <FooterOne />
      </div>
    );
  }
}

export default HomePage;
