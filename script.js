
// 1. Store budgeting information
let budget = 0;

// 2. Store multiple expenses using an array
let expenses = [];

// 3. Get HTML elements from the webpage
const budgetForm = document.getElementById("budgetForm");
const expenseForm = document.getElementById("expenseForm");

const budgetDisplay = document.getElementById("budget");
const totalDisplay = document.getElementById("totalExpenses");
const balanceDisplay = document.getElementById("balance");

const expenseList = document.getElementById("expenseList");
const message = document.getElementById("message");

// 4. Display money in Kenyan shillings
function formatMoney(amount) {
    return "KSh " + amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// 5. Set monthly budget using an event listener
budgetForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredBudget = Number(
        document.getElementById("budgetInput").value
    );

    if (enteredBudget <= 0) {
        showMessage("Please enter a budget greater than zero.", "error");
        return;
    }

    budget = enteredBudget;

    updateDashboard();

    showMessage("Your monthly budget has been set!", "success");

    budgetForm.reset();
});

// 6. Add expenses using an event listener
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("expenseName").value.trim();
    const amount = Number(
        document.getElementById("expenseAmount").value
    );
    const category = document.getElementById("expenseCategory").value;

    if (name === "" || amount <= 0 || category === "") {
        showMessage("Please enter valid expense details.", "error");
        return;
    }

    // Conditional decision making
    if (budget === 0) {
        showMessage("Please set your budget before adding expenses.", "warning");
        return;
    }

    // Store the expense as an object inside an array
    const newExpense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(newExpense);

    updateDashboard();

    showMessage("Expense added successfully!", "success");

    expenseForm.reset();
});

// 7. Calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// 8. Update the dashboard dynamically
function updateDashboard() {
    const total = calculateTotal();
    const balance = budget - total;

    budgetDisplay.textContent = formatMoney(budget);
    totalDisplay.textContent = formatMoney(total);
    balanceDisplay.textContent = formatMoney(balance);

    // Display expenses using DOM manipulation
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        expenseList.innerHTML =
            '<tr><td colspan="3">No expenses added yet.</td></tr>';
    } else {
        for (let i = 0; i < expenses.length; i++) {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${escapeHTML(expenses[i].name)}</td>
                <td>${escapeHTML(expenses[i].category)}</td>
                <td>${formatMoney(expenses[i].amount)}</td>
            `;

            expenseList.appendChild(row);
        }
    }

    // Conditional budget feedback
    if (budget === 0) {
        balanceDisplay.style.color = "#173b67";
    } else if (balance < 0) {
        balanceDisplay.style.color = "red";
        showMessage("Warning! You have exceeded your budget.", "error");
    } else if (balance === 0) {
        balanceDisplay.style.color = "#c47b00";
        showMessage("You have used your entire budget!", "warning");
    } else {
        balanceDisplay.style.color = "green";
    }
}

// 9. Display messages on the webpage
function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

// 10. Protect the expense table from HTML entered as text
function escapeHTML(value) {
    return value.replace(/[&<>"']/g, function(character) {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return replacements[character];
    });
}

// 11. Show the initial dashboard
updateDashboard();
