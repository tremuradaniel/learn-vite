import './App.css'
import moduleOne from './one.module.css';
import moduleTwo from './two.module.css';

const modules = import.meta.glob<{default: string}>(`./png-images/*.png`, { eager: true });

function App() {
  return (
    <>
      <div>
        {Object.values(modules).map(src => <img src={src.default} />)}
      </div>
      <h1 className={moduleOne.another}>Vite + React</h1>
      <a href="/another-route/">Another route</a>
    </>
  )
}

export default App
