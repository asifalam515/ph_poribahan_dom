document.addEventListener("DOMContentLoaded", function () {
  var seatButtons = document.querySelectorAll(".seat-booking .btn-primary");
  var selectedSeats = [];
  var seatPrice = 550;
  var totalSeats = 40;
  var couponField = document.getElementById("coupon-field");
  var totalPriceField = document.getElementById("total-price");
  var grandTotalField = document.getElementById("grand-total");
  var selectedSeatNumberField = document.getElementById("selected-seat-number");
  var targetButton = document.getElementById("targetButton");
  var appliedCoupon = false;
  var couponCodes = {
    NEW15: 0.15,
    "Couple 20": 0.2,
  };

  function updatePrice() {
    var totalPrice = selectedSeats.length * seatPrice;
    var grandTotal = totalPrice;

    if (appliedCoupon) {
      grandTotal =
        grandTotal * (1 - couponCodes[couponField.value.toUpperCase()]);
    }

    totalPriceField.textContent = totalPrice;
    grandTotalField.textContent = grandTotal;
  }

  function updateSelectedSeats() {
    selectedSeatNumberField.textContent = selectedSeats.length;
  }

  function updateSeatLeft() {
    document.getElementById("seat-number").textContent =
      totalSeats - selectedSeats.length;
  }

  function checkFields() {
    var passengerName = document.getElementById("passanger-name-field").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.querySelector('input[type="email"]').value;

    targetButton.disabled =
      selectedSeats.length === 0 || !passengerName || !phoneNumber || !email;
  }

  seatButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var seatId = button.id;
      if (selectedSeats.indexOf(seatId) === -1) {
        selectedSeats.push(seatId);
        button.classList.add("btn-success");
        button.classList.remove("btn-primary");
      } else {
        selectedSeats.splice(selectedSeats.indexOf(seatId), 1);
        button.classList.remove("btn-success");
        button.classList.add("btn-primary");
      }
      updatePrice();
      updateSelectedSeats();
      updateSeatLeft();
      checkFields();
      targetButton.disabled = selectedSeats.length === 0;

      if (selectedSeats.length >= 4) {
        couponField.classList.remove("hidden");
      } else {
        couponField.classList.add("hidden");
        appliedCoupon = false; // Reset appliedCoupon if seats < 4
        updatePrice(); // Recalculate price without coupon
      }
    });
  });

  couponField.addEventListener("input", function () {
    if (
      selectedSeats.length >= 4 &&
      couponField.value.toUpperCase() in couponCodes
    ) {
      appliedCoupon = true;
      var savings =
        selectedSeats.length *
        seatPrice *
        couponCodes[couponField.value.toUpperCase()];
      alert("Coupon applied! You saved BDT " + savings);
    } else if (selectedSeats.length >= 4) {
      alert("Invalid coupon code");
    }
    updatePrice();
  });

  targetButton.addEventListener("click", function () {
    if (selectedSeats.length >= 4) {
      // Process the booking here
    } else {
      alert("Please select at least 4 seats to apply a coupon.");
    }
  });
});
document.getElementById("next-button").addEventListener("click", function () {
  document.getElementById("my_modal_5").showModal();
});
function orderConfirm() {}
