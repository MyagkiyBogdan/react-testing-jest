import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => setToggle(prevValue => !prevValue);

  useEffect(() => {
    setTimeout(() => {
      setData({ name: 'Jhon' });
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">Toggle!</div>}
      {data && <div style={{ color: 'red' }}>{data.name}</div>}
      <h1>Hello World</h1>
      <button type="button" onClick={handleClick} data-testid="toggle-btn">
        Click me
      </button>
      <input onChange={e => setValue(e.target.value)} type="text" placeholder="name" />
    </div>
  );
}

export default App;
