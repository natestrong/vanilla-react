import ReactDOM from "react-dom";
import { Pet } from "./Pet";

const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Oliver" animal="Cat" favoriteThing="Eating snacks." />
    <Pet name="Maxwell" animal="Cat" favoriteThing="Back scratches." />
    <Pet name="Sophie" animal="Cat" favoriteThing="Cuddling." />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
