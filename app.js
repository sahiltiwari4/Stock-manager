document.getElementById('show-more-btn').addEventListener('click', function() {
    window.location.href = 'recent-activity.html';
});

document.getElementById('stock-price-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const stockSymbol = document.getElementById('stock-symbol').value;
    // Simulate fetching stock price
    const stockPrice = '$' + (Math.random() * 1000).toFixed(2);
    document.getElementById('stock-price-result').innerText = `The price of ${stockSymbol} is ${stockPrice}`;
});

document.getElementById('buy-stock-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const stockSymbol = document.getElementById('buy-stock-symbol').value;
    const quantity = document.getElementById('buy-quantity').value;
    // Simulate buying stock
    document.getElementById('buy-stock-result').innerText = `You have successfully bought ${quantity} shares of ${stockSymbol}`;
});

// Mock data for available stocks
const stocks = [
    { company: 'Company A', symbol: 'COMPA', price: '$100.00' },
    { company: 'Company B', symbol: 'COMPB', price: '$150.00' },
    { company: 'Company C', symbol: 'COMPC', price: '$200.00' },
];

// Function to populate stock data in the table
function populateStockTable() {
    const stockTableBody = document.getElementById('stock-table-body');
    stocks.forEach(stock => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${stock.company}</td>
            <td>${stock.symbol}</td>
            <td>${stock.price}</td>
            <td><button onclick="buyStock('${stock.symbol}', '${stock.price}')">Buy</button></td>
        `;
        stockTableBody.appendChild(row);
    });
}

// Function to handle buying stock
function buyStock(symbol, price) {
    const quantity = prompt(`Enter the quantity of ${symbol} to buy:`);
    if (quantity && !isNaN(quantity)) {
        alert(`You have successfully bought ${quantity} shares of ${symbol} at ${price} each.`);
    } else {
        alert('Invalid quantity entered.');
    }
}

// Call the function to populate stock data when the page loads
if (document.getElementById('stock-table-body')) {
    populateStockTable();
}
