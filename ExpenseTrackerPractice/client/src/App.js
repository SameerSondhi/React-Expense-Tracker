import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {id: 1, title: 'Car Insurance', amount: 297.67, date: new Date(2021, 2, 28)},
    {id: 2, title: 'Groceries', amount: 150.55, date: new Date(2021, 2, 31)},
    {id: 3, title: 'Video Games', amount: 59.99, date: new Date(2021, 3, 24)},
    {id: 4, title: 'Dress Shirts', amount: 250.45, date: new Date(2021, 4, 21)}
  ]
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
