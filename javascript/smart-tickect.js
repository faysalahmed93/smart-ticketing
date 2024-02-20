const seatContainer = document.querySelectorAll(".Economoy");
const tableBody = document.getElementById("table-Body");
const grandTotalElement = document.getElementById("grand-total");
const TotalPriceElement = document.getElementById("total-price");
const couponCodeInput = document.querySelector('[name="coupon_code"]');
const applyButton = document.getElementById("apply");
const discountAmountElement = document.getElementById("discount-amount");

let availableSeats = 40; // Total available seats
let selectedSeatsCount = 0; // Number of selected seats
let totalPrice = 0;
let discountApplied = false;

function updateTotalPrice() {
  grandTotalElement.textContent = totalPrice.toFixed(0);
  TotalPriceElement.textContent = totalPrice.toFixed(0);
}

function addSeatToTable(seatId) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${seatId}</td>
    <td>Economy</td>
    <td>500</td>
  `;
  tableBody.appendChild(row);
}

function applyCouponCode(couponCode) {
  if (couponCode === "NEW15" && selectedSeatsCount === 4) {
    if (!discountApplied) {
      totalPrice *= 0.85; // 15% discount
      updateTotalPrice();
      const discountAmount = totalPrice * 0.15; // Calculate discount amount
      discountAmountElement.textContent = `Discount Applied: ${discountAmount.toFixed(
        0
      )}`;
      discountApplied = true;
    }
  } else if (couponCode === "couple20") {
    if (!discountApplied) {
      totalPrice *= 0.8; // 20% discount
      updateTotalPrice();
      const discountAmount = totalPrice * 0.2; // Calculate discount amount
      discountAmountElement.textContent = `Discount Applied: ${discountAmount.toFixed(
        0
      )}`;
      discountApplied = true;
    }
  } else {
    alert("Invalid coupon code");
  }
}

function handleSeatClick(seat) {
  const seatId = seat.id;
  if (selectedSeatsCount < 4) {
    if (!seat.classList.contains("selected")) {
      seat.classList.add("selected");
      selectedSeatsCount++;
      totalPrice += 500;
      addSeatToTable(seatId);
      updateTotalPrice();
      availableSeats--; // Decrease available seats count
      document.getElementById("seat-available").textContent = availableSeats;
      document.getElementById("click-seat").textContent = selectedSeatsCount;

      // Show apply button when 4 seats are selected
      if (selectedSeatsCount === 4) {
        applyButton.style.display = "block";
      }
    } else {
      alert("Seat already selected");
    }
  } else {
    alert("You can't book more than 4 seats");
  }
}

for (const seat of seatContainer) {
  seat.addEventListener("click", function () {
    handleSeatClick(seat);
  });
}

applyButton.addEventListener("click", function (event) {
  event.preventDefault();
  const couponCode = couponCodeInput.value.trim();
  applyCouponCode(couponCode);
});

// next ----------------

const NextButton = document.getElementById("next-button");

NextButton.addEventListener("click", function () {
  document.classList.add("hidden");
  NextButton.classList.remove("hidden");
});
