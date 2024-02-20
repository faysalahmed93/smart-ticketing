const seatContainer = document.querySelectorAll(".Economoy");
const tableBody = document.getElementById("table-Body");
const grandTotalElement = document.getElementById("grand-total");
const couponCodeInput = document.querySelector('[name="coupon_code"]');
const applyButton = document.querySelector("#apply");

let availableSeats = 40; // Total available seats
let selectedSeatsCount = 0; // Number of selected seats
let totalPrice = 0;

function updateTotalPrice() {
  grandTotalElement.textContent = totalPrice.toFixed(0);
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
  if (couponCode === "NEW15") {
    totalPrice *= 0.85; // 15% discount
    updateTotalPrice();
  } else if (couponCode === "couple20") {
    totalPrice *= 0.8; // 20% discount
    updateTotalPrice();
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

applyButton.addEventListener("click", (event) => {
  event.preventDefault();
  const couponCode = couponCodeInput.value.trim();
  applyCouponCode(couponCode);
});
