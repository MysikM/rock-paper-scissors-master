import Header from "./components/Header/Header";
import MainBoard from "./components/MainBoard/MainBoard";
import Footer from "./components/Footer/Footer";
import {useContext} from "react";
import {GameStatus} from "./context/Start";
import MatchBoard from "./components/MatchBoard/MatchBoard";

function App() {
    const {isGameStart} = useContext(GameStatus);
  return (
    <div className="container">
        <Header />
        {isGameStart ? (<MatchBoard />) : (<MainBoard />)}
        <Footer />
    </div>
  );
}

export default App;
