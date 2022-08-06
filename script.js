"use strict";
// class Car {
//   constructor(name, price, mph) {
//     (this.name = name), (this.price = price), (this.mph = mph);
//   }
//   static register(){
//     console.log("asdasd");
//   }
//   info() {
//     console.log(`This is ${this.name}.Price ${this.price}.Speed ${this.mph}`);
//   }
// }
// const bmw = new Car("bmw", "$55500", 350);
// console.log(bmw);
// bmw.info();
// Car.register();

const cardGroup = document.querySelector(".container");
const clothesBox = document.querySelector(".boxes");
const boxItem = document.querySelector("#clothes__boxes");
const backBtn = document.querySelector(".back");

const cardItems = [];
let productsData = [];
let index = "";

const kutibChiqar = async function () {
  try {
    const res = await fetch(" https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    console.log(data);
    productsData = data;

    let html = "";
    data.forEach((el) => {
      html += `
    <div class="card" >
      <img src="${el.image}" alt="">
      <h2>${el.name}</h2>
    </div>
`;
    });
    cardGroup.innerHTML = html;
    const cardes = document.querySelectorAll(".card");
    console.log(cardes);

    cardes.forEach((card, idx) => {
      card.addEventListener("click", () => {
        console.log(idx);
        index = idx+1;
        boxItem.classList.add("active");
        clothes();
      });
    });
  } catch (arr) {
    console.log("error");
  }
};
kutibChiqar();

async function clothes() {
  try {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${index}/products`
    );
    const cothesData = await res.json();
    console.log(cothesData);
    let html = "";
    cothesData.forEach((item) => {
      html += `
        <div class="box">
          <img src="${item.images}" alt="">
          <h2>${item.title}</h2>
        </div>
    `;
    });

    clothesBox.innerHTML = html;
  } catch (arr) {
    console.log("error");
  }
}

backBtn.addEventListener("click", () => {
  boxItem.classList.remove("active");
  clothes.remove();
});
