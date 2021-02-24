import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const person = {
    name: 'umar faruk'
  }
  const allName = ['arif', 'fahim', 'rofik', 'shubo']

  const productPrice = [
    {name: 'photoshop', price:'$99.99'}, 
    {name:'Illustetor', price:'$60.00'},
    {name:'Read pdf', price:'$320.00'},
    {name:'premiere pro', price:'$260.00'},
  ]
  const productName = productPrice.map(product => product.name)
  // console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo"alt="logo"/>
        <h1 style={{color:'yellow'}}>name: {person.name}</h1>
        <Counter></Counter>

        <Users></Users>
        <ul>
          {
            allName.map(name => <li>{name}</li>)
          }
        </ul>
        {
          productPrice.map(product => <Product products={product}></Product>)
        }

        {/* <Product products={productPrice[0]}></Product> */}
        {/* <Product products={productPrice[1]}></Product> */}

        <Person name={allName[0]} job='software engineer'></Person>
        <Person name='rafi'></Person>

      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '200px',
    height: '200px',
    float: 'left'
  }
  const {name, price} = props.products;
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}



function Person(props) {
  const personStyle = {
    border:  '2px solid red',
    margin: '10px'
  }
  console.log(props);
  return (
    <div style={personStyle}>
      <h1>name: {props.name}</h1>
      <h3>hero of {props.job} </h3>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    // console.log('calling effect');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>start: {users.length}</h2>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // };
  return (
      <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
  )
}













export default App;
