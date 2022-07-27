import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(prevValue => !prevValue);

  useEffect(() => {
    setTimeout(() => {
      setData({ name: 'Jhon' });
    }, 100);
  }, []);

  return (
    <div className="App">
      {toggle && <div data-testid="toggle-elem">Toggle!</div>}
      {data && <div style={{ color: 'red' }}>{data.name}</div>}
      <h1>Hello World</h1>
      <button type="button" onClick={handleClick} data-testid="toggle-btn">
        Click me
      </button>
      <input type="text" placeholder="name" />
    </div>
  );
}

export default App;
