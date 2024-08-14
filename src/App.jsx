import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="My Website" />
      <Content />
      <Footer year={2024} />
    </>
  );
}

export default App;
