import './App.css';
import Shop from './Components/Shop/Shop';
function App() {
  return (
    <div className="App">
      <h1>Camera House</h1>
      <Shop></Shop>
      <div className='QnA'>
        <h3>Props vs State</h3>
        <p>State can only be accessed or modified inside the component or by the component directly. State is mutable. It's equivalent to local variables in a function. It cannot be accessed by child components. Props cannot modify the props from inside the component. Props are immutable. it can be accessed by the child component. Props are used to communicate between components.</p>
        <h3>How useState works?</h3>
        <p>useState is a Hook function that is the most commonly used Hook for building React components. it adds state to function components without having to convert them to classes.</p>
      </div>
    </div>
  );
}

export default App;
