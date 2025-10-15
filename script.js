const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click", () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;
  if (amount === "" || amount <= 0) {
    result.innerText = "Please enter a valid amount.";
    return;
  }
  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      const converted = (amount * rate).toFixed(2);
      result.innerText = `${amount} ${from} = ${converted} ${to}`;
    })
    .catch(error => {
      result.innerText = "Error fetching data.Please try again";
      console.error(error);
    });
});
