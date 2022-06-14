let allPurchases = JSON.parse(localStorage.getItem('shops')) || [];
let valueInputShop = '';
let valueInputMoney = '';
let inputShop = null;
let inputMoney = null;

window.onload = init = () => {
  inputShop = document.getElementById('add-purchase');
  inputShop.addEventListener('change', updateValueShop);

  inputMoney = document.getElementById('add-sum')
  inputMoney.addEventListener('change', updateValueMoney);

  localStorage.setItem('shops', JSON.stringify(allPurchases));
  // render();
  const shops = JSON.parse(localStorage.getItem('shops'));
};

const onClickButton = () => {
  allPurchases.push({
    text: valueInputShop,
    sum: valueInputMoney,
    purchaseDate: new Date()
  })
  // localStorage.setItem('tasks', JSON.stringify(allPurchases));
  valueInput = '';
  inputShop.value = '';
  inputMoney.value = '';

  render();
  console.log(allPurchases);
};

updateValueShop = (event) => {
  valueInputShop = event.target.value;
};

updateValueMoney = (event) => {
  valueInputMoney = event.target.value;
}

render = () => {
  allPurchases.map((item, index) => {
    const container = document.createElement('div');
    
  })
}