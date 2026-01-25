import Intro from "./components/Intro"
import Menu from "./components/Menu"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <Menu />
    </div>
  )
}

export default App