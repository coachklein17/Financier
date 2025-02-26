let balance = 0;
let transactions = [];

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;

    if (!description || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid description and amount.");
        return;
    }

    // Create transaction object
    const transaction = { description, amount, type };
    transactions.push(transaction);

    // Update balance
    if (type === "income") {
        balance += amount;
    } else {
        balance -= amount;
    }

    updateUI();
}

function updateUI() {
    document.getElementById("balance").textContent = balance.toFixed(2);

    const transactionList = document.getElementById("transaction-list");
    transactionList.innerHTML = "";

    transactions.forEach((t, index) => {
        const li = document.createElement("li");
        li.classList.add(t.type);
        li.innerHTML = `${t.description} <strong>$${t.amount.toFixed(2)}</strong>`;

        transactionList.appendChild(li);
    });
}
