document.getElementById("productForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;

  if(!name || !price){
    alert("Fill all fields!");
    return;
  }

  fetch('http://127.0.0.1:5000/insertProduct', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      product_name: name,
      uom_id: 1, // default UOM
      price_per_unit: price
    })
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Product Added! ID: " + data.product_id);

    // Add to table
    const table = document.getElementById("productTable");
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>₹${price}</td>`;

    // Show thank you message
    document.getElementById("thankYouMsg").style.display = "block";

    this.reset();
  })
  .catch(err => {
    console.error(err);
    alert("❌ Error adding product!");
  });
});