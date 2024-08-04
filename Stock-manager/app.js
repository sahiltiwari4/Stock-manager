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
