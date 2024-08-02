document.addEventListener("DOMContentLoaded", function () {
  var seatButtons = document.querySelectorAll(".seat");
  var selectedSeats = [];
  var seatPrice = 550;
  var totalPriceElem = document.getElementById("total-price");
  var grandTotalElem = document.getElementById("grand-total");
  var selectedSeatNumberElem = document.getElementById("selected-seat-number");
  var selectedSeatNoElem = document.getElementById("selcted-seat-no");
  var seatNumberElem = document.getElementById("seat-number");
  var targetButton = document.getElementById("targetButton");

  seatButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var seatId = button.id;

      if (selectedSeats.indexOf(seatId) === -1) {
        selectedSeats.push(seatId);
        button.classList.remove("btn-primary");
        button.classList.add("btn-success");

        // Update total price and grand total price
        var totalPrice = selectedSeats.length * seatPrice;
        totalPriceElem.innerText = totalPrice;
        grandTotalElem.innerText = totalPrice;

        // Update selected seat number
        selectedSeatNumberElem.innerText = selectedSeats.length;

        // Update selected seat IDs
        selectedSeatNoElem.innerText = selectedSeats.join(", ");

        // Update seats left
        var seatsLeft = parseInt(seatNumberElem.innerText, 10) - 1;
        seatNumberElem.innerText = seatsLeft;

        // Enable "Buy Now" button
        targetButton.disabled = false;
      }
    });
  });
});
