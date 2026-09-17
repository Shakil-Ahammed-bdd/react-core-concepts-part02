
import { Suspense } from 'react'
import './App.css'
import Batsman from './Batsman'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'



const fetchUsers = fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
  .then(res => res.json())


const fetchFriends = async() =>{
  const res = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
  return res.json();
}

const fetchPosts = async() =>{
  const res = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  const postsPromise = fetchPosts();

  function handleClick() {
    alert('I am Clicked one')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h1>React Core Concepts</h1>

      <Suspense fallback={<h3>Posts are comming....</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h2>Friends are comming ...</h2>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={function handleClick() {
        alert('Clicked 2 ')
      }}>Click me2</button>
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click 4')}>Click me 4</button>
      
      <button onClick={() => handleAdd5(15)}>Click add 5</button>
    </>
  )
}

export default App
