import './App.css'
import './nested.css'

function App() {
  return (
    <div className="App">
      <ul className='styled-list'>
        <li className="item">Item 1</li>
        <li className="item">Item 2</li>
        <li className="item">Item 3</li>
      </ul>

      <p className="item">
        This is NOT styled.
      </p>
    </div>
  )
}

export default App
