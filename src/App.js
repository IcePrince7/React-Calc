import "./App.css";
import { ButtonComp } from "./ButtonComp";

function App() {
  return (
    <div className="mainBox">
      <input value={0} />
      <ButtonComp Value={7} />
      <ButtonComp Value={8} />
      <ButtonComp Value={9} />
      <ButtonComp Value={"*"} backColor="lightgrey" />

      <ButtonComp Value={4} />
      <ButtonComp Value={5} />
      <ButtonComp Value={2} />
      <ButtonComp Value={"-"} backColor="lightgrey" />

      <ButtonComp Value={1} />
      <ButtonComp Value={2} />
      <ButtonComp Value={3} />
      <ButtonComp Value={"+"} backColor="lightgrey" />

      <ButtonComp Value={"+/-"} backColor="lightgrey" />
      <ButtonComp Value={0} />
      <ButtonComp Value={"."} backColor="lightgrey" />
      <ButtonComp Value={"="} backColor="aqua" />
    </div>
  );
}

export default App;
