const user = {
    firstName: "Brennan",
    lastName: "Stopnik",
    age: 42
  }
  
  const MyFirstAndLast = () => {
    return (
      <div className="app-container">
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
      </div>
    )
  }
   
  const App = () => {
    return (
      <h1>Hello, my name is <MyFirstAndLast /> and I will be {user.age + 1} this Month.</h1>
    )
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  
