import Header from "./components/Header";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <ProjectList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
