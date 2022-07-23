import './App.css';

const Person = ({ name, lastName, age }) => {
  return (
    <div className='person'>
      <h1>Name: {name}</h1>
      <h2>Last Name: {lastName}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className='App'>
      <h1>Hello {2 + 2}!</h1>
      <Person name='Toprak' lastName={'Bek'} age={28} />
      <Person name='Züleyha' lastName={'Karakaş'} age={38} />
      <Person name='Melike' lastName={'Karakaş'} age={14} />
      <Person name='Bahar' lastName={'Karakaş'} age={8} />
    </div>
  );
};

export default App;
