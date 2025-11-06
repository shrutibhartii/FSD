let total = 0;
function addExpense() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);
    if (description === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and amount.');
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.innerHTML = ${description} <span>$${amount.toFixed(2)}</span>;
    expenseList.appendChild(listItem);
    total += amount;
    totalAmount.textContent = total.toFixed(2);
    descriptionInput.value = '';
    amountInput.value = '';
}
