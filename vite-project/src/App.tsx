import './App.css'

const modules = import.meta.glob<{default: string}>(`./png-images/*.png`, { eager: true });

function App() {
  return (
    <>
      <div>
        {Object.values(modules).map(src => <img src={src.default} />)}
      </div>
      <h1>Vite + React</h1>
      <a href="/another-route/">Another route</a>
    </>
  )
}

export default App
