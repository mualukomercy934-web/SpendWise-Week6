
# SpendWise - Interactive Budget Tracker

## 1. Project Description

SpendWise is an interactive budget tracking application developed using HTML, CSS, and JavaScript. It helps users manage their monthly budgets, record expenses, calculate total spending, and monitor their remaining balance.

## 2. Improvements Made This Week

The following improvements were made to SpendWise:

- Added an interactive monthly budget form.
- Added an expense form where users can enter expense names, amounts, and categories.
- Added automatic calculation of total expenses and remaining balance.
- Added budget feedback messages.
- Added a dynamic dashboard that updates when users add expenses.
- Improved the design to make the application user-friendly and responsive.
- Added JavaScript functionality to make the application interactive.

## 3. How Conditionals Are Used

Conditional statements (if, else if, and else) are used to make decisions in the application.

They check whether:

- The budget entered is valid.
- The user has set a budget before adding expenses.
- The remaining balance is positive.
- The user has exceeded the budget.
- The entire budget has been spent.

These conditions help SpendWise provide appropriate feedback to users based on their budgeting information.

## 4. How Arrays Are Used

Arrays are used to store multiple expense records.

The expenses array stores expense objects containing:

- Expense name
- Expense amount
- Expense category

The push() method is used to add new expenses to the array.

This makes it easier to manage multiple expense records instead of using separate variables for each expense.

## 5. How Loops Are Used

A for loop is used to process the expense records stored in the expenses array.

The loop calculates the total expenses by adding the amounts of all recorded expenses.

Another loop displays all expense records in the expense table.

This makes it possible to process multiple expenses efficiently.

## 6. How the DOM Is Updated

DOM manipulation is used to update the webpage dynamically.

JavaScript uses document.getElementById() to access HTML elements and textContent to update dashboard information.

The expense table is updated using:

- innerHTML
- createElement()
- appendChild()

This allows users to see updated budget information and expense records directly on the webpage without refreshing it.

## 7. How User Interactions Are Handled

Event listeners are used to respond to user actions.

The submit event listener handles the budget form and expense form.

When users submit information:

1. JavaScript collects the entered data.
2. The application validates the information.
3. Valid expenses are stored in an array.
4. The application calculates total expenses.
5. The dashboard is updated automatically.
6. Feedback messages are displayed to the user.

This makes SpendWise interactive and easy to use.

## 8. Challenges Encountered and Solutions

One challenge encountered was understanding how to connect JavaScript with HTML elements.

I resolved this by learning how to use DOM methods such as getElementById() and textContent.

Another challenge was calculating total expenses from multiple records.

I solved this by using arrays and for loops to store and process expense information.

I also learned how conditional statements help the application make decisions and provide feedback based on the user's budget.

## 9. Technologies Used

- HTML - Used to create the webpage structure.
- CSS - Used to style the application and make it responsive.
- JavaScript - Used to add functionality and interactivity.

## 10. Conclusion

SpendWise demonstrates how JavaScript can make a webpage interactive by using conditional statements, arrays, loops, DOM manipulation, and event listeners.

The application helps users record expenses, monitor their spending, and manage their monthly budgets effectively.

This project has improved my understanding of JavaScript and how it works together with HTML and CSS to create interactive web applications.
