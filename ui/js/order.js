document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  const customerName = document.getElementById("customerName").value;
  const productId = parseInt(document.getElementById("orderItem").value);

  if (!customerName || !productId) {
    alert("Please fill all fields!");
    return;
  }

  const orderData = {
    customer_name: customerName,
    grand_total: 100, // calculate if you want later
    order_details: [
      {
        product_id: productId,
        quantity: 1,
        total_price: 100 // calculate if needed
      }
    ]
  };

  fetch('http://127.0.0.1:5000/insertOrder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData)
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Order Submitted! ID: " + data.order_id);
    document.getElementById("thankYouMsg").style.display = "block";
    this.reset();
  })
  .catch(err => {
    console.error(err);
    alert("❌ Error submitting order!");
  });
});