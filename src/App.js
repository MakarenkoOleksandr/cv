import "./style/style.scss";

import Header from "./components/header";
import Main from "./components/main";
import Aside from "./components/aside";

function App() {
  return (
    <div className="container">
      <div className="cv">
        <Header />
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
