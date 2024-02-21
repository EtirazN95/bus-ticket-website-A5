// const price = document.getElementById("ticket-price").innerText;
// const convertPrice = parseInt(price);

// const seatLeft = document.getElementById("seat-left").innerText;
// const convertTotal = parseInt(seatLeft);

// const seatAdd = document.getElementById("seat-add").innerText;
// const convertSeat= parseInt(seatAdd);

// console.log(price);
// console.log(seatLeft);
// console.log(seatAdd);

// const price = getConvertedValue("ticket-price");
// const seatLeft = getConvertedValue("seat-left");
// const seatAdd = getConvertedValue("seat-add");



// const allBtn = document.getElementById("add-btn").innerText;
// console.log(allBtn); 
// for (const btn of allBtn){
//   console.log(btn);
// } 

// const allBtn = document.getElementById("add-btn").innerText;
// for (const btn of allBtn){
//   console.log(btn);
// btn.addEventListener("click", function (event){
//   console.log(event);
// }

const allBtn = document.querySelectorAll("#add-btn");

allBtn.forEach(btn => {
    btn.addEventListener("click", function(event) {
        const seat = event.target.innerText;
        const price = getConvertedValue("ticket-price")
      // console.log(seat + " Economic " + price);


      const selectedContainer = document.getElementById("selected-price-container");
       
      event.target.setAttribute("disabled", false);
     
      
    



     const firstCartCount = getConvertedValue("seat-add");
    if(firstCartCount+1 > 4){
        alert("The limit will not expire");
        return;
    }
    event.target.style.backgroundColor = "#1DD100";

    

   




      // update seat and available seat
      const seatCount = getConvertedValue("seat-add");
      document.getElementById("seat-add").innerText = seatCount +1;

      const seatLeft = getConvertedValue("seat-left");
      document.getElementById("seat-left").innerText = seatLeft -1;


      // const secondCartCount = getConvertedValue("seat-add");
      // console.log(secondCartCount);


      const div = document.createElement("div");
      div.classList.add("price-container")

      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      p1.innerText = seat; 
      p2.innerText = "Economic"; 
      p3.innerText = price;

      
      

      div.appendChild(p1);
      div.appendChild(p2);
      div.appendChild(p3);

      selectedContainer.appendChild(div);


      updateTotalCost(price);
      updateGrandTotal();



    });
});









function updateGrandTotal(status){
  const totalCost = getConvertedValue("total-price");
  if(status == undefined ){
    document.getElementById("grand-total").innerText = totalCost;
  }
  else{
    const couponCode = document.getElementById("coupon-code").value;

    if(couponCode == "NEW15"){
      const discounted = totalCost * 0.15;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    }else if(couponCode == "Couple 20"){
      const discounted = totalCost * 0.2;
      document.getElementById("grand-total").innerText = totalCost - discounted;
    }
    else{
      alert("please enter valid coupon code");
    }
  }
}

// function updateGrandTotal(status){
//   const totalCost = getConvertedValue("total-price");
//   console.log("Total Cost:", totalCost);
  
//   if(status == undefined ){
//     document.getElementById("grand-total").innerText = totalCost;
//   }
//   else{
//     const couponCode = document.getElementById("coupon-code").value;
//     console.log("Coupon Code:", couponCode);

//     if(couponCode == "love420"){
//       const discounted = totalCost * 0.2;
//       console.log("Discounted Amount:", discounted);
//       document.getElementById("grand-total").innerText = totalCost - discounted;
//     }
//     else{
//       alert("please enter valid coupon code");
//     }
//   }
// }



function updateTotalCost(value){
  // console.log(value);
  const totalCost = getConvertedValue("total-price");
  const sum = totalCost+parseInt(value);
  document.getElementById("total-price").innerText = sum;

}


function getConvertedValue(id){
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}


function checkParameter(status){
  if(status==undefined){
    console.log("kichu dei nai ");
  }
  else{
    console.log("parameter ache");
  }
}
 
 checkParameter()

// const result = getConvertedValue("ticket-price")
// console.log(result)
const applyCouponBtn = document.getElementById("apply-btn");
const seatSelect = document.getElementById("add-btn");
seatSelect.addEventListener("change", function () {
    validateCouponButton();
});

const nextBtn = document.getElementById("next-btn");
const phoneNumberInput = document.getElementById("phone-number");
phoneNumberInput.addEventListener("input", function () {
    validateInputs();
});

function validateInputs() {
    const selectedSeat = seatSelect.value;
    const phoneNumber = phoneNumberInput.value;

    const isValid = selectedSeat !== "" && isValidPhoneNumber(phoneNumber);

    nextBtn.disabled = !isValid;

    validateCouponButton();
}

function validateCouponButton() {
    const selectedSeats = getConvertedValue("seat-add");

    applyCouponBtn.disabled = selectedSeats !== 4;
}

function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.length >= 10;
}

