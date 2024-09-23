import './App.css'

const logoName = "ttc-logo";
// top level await - not supported in every web browser
const module = await import(`./png-images/${logoName}.png`) as { default: string };

function App() {
  return (
    <>
      <div>
        <img src={module.default} />
      </div>
      <h1>Vite + React</h1>
      <a href="/another-route/">Another route</a>
    </>
  )
}

export default App
