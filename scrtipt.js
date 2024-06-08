let balance = 1000000;

function displayBalance() {
    document.getElementById('balance-display').innerText = `Your Balance: $${balance.toLocaleString()}`;
}

function showPopup(action) {
    const popup = document.getElementById('popup');
    const popupForm = document.getElementById('popup-form');
    popupForm.innerHTML = '';

    let formContent = '';

    if (action === 'deposit') {
        formContent = `
            <h2>Deposit Funds</h2>
            <label for="deposit-amount">Amount:</label>
            <input type="number" id="deposit-amount" min="0" step="1">
            <button onclick="depositFunds()">Submit</button>
        `;
    } else if (action === 'withdraw') {
        formContent = `
            <h2>Withdraw Funds</h2>
            <label for="withdraw-amount">Amount:</label>
            <input type="number" id="withdraw-amount" min="0" step="1">
            <button onclick="withdrawFunds()">Submit</button>
        `;
    } else if (action === 'transfer') {
        formContent = `
            <h2>Transfer Funds</h2>
            <label for="transfer-amount">Amount:</label>
            <input type="number" id="transfer-amount" min="0" step="1">
            <label for="transfer-account">Account Number:</label>
            <input type="text" id="transfer-account">
            <button onclick="transferFunds()">Submit</button>
        `;
    }

    popupForm.innerHTML = formContent;
    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function depositFunds() {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        displayBalance();
        closePopup();
    }
}

function withdrawFunds() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
        balance -= amount;
        displayBalance();
        closePopup();
    }
}

function transferFunds() {
    const amount = parseFloat(document.getElementById('transfer-amount').value);
    const account = document.getElementById('transfer-account').value;
    if (!isNaN(amount) && amount > 0 && amount <= balance && account.trim() !== '') {
        balance -= amount;
        displayBalance();
        closePopup();
    }
}

document.addEventListener('DOMContentLoaded', displayBalance);
