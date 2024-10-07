import './App.css'
import './nested.css'
import ReactLogo from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <img src={ReactLogo} alt="React Logo" />
      <ul className='styled-list'>
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
        <li className="item">Item 4</li>
      </ul>

      <p className="item">
        This is NOT styled.
      </p>
    </div>
  )
}

export default App
