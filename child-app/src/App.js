import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>当前在子应用</h1>
        <Link to="/child/about" className="App-link">About</Link>
      </header>
    </div>
  )
}

function About() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>当前在子应用 About 页面</h1>
        <Link to="/child" className="App-link">Home</Link>
      </header>
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="child">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
