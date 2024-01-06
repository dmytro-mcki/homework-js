// Calc
function promptForPrice(productName) {
    let price = prompt(`Enter the price for ${productName}:`);
    return parseFloat(price) || 0;
  }
  let product1Price = promptForPrice("Tomato");
  let product2Price = promptForPrice("Fish");
  let product3Price = promptForPrice("Cucumber");
  let totalAmount = product1Price + product2Price + product3Price;
  alert(`Price for Tomato: $${product1Price.toFixed(2)}\nPrice for Fish: $${product2Price.toFixed(2)}\nPrice for Cucumber: $${product3Price.toFixed(2)}\n\nTotal Amount: $${totalAmount.toFixed(2)}`);



// Login& Pass check

const credentials = {
    login: 'admin',
    password: 'qwerty',
  };

  function checkCredentials() {
    const enteredLogin = document.getElementById('login').value;
    const enteredPassword = document.getElementById('password').value;

    if (enteredLogin === credentials.login && enteredPassword === credentials.password) {
      alert('Login successful!');
    } else {
      alert('Incorrect login or password. Please try again.');
    }
  }