import { useEffect, useState } from "react";
import "./App.css";
import { ButtonComp } from "./ButtonComp";

function App() {
  const [display, setDisplay] = useState({
    currentValue: 0,
    isClear: true,
  });
  const [operator, setoperator] = useState({
    operator: "",
    isoperatorClear: false,
  });
  useEffect(() => {
    const myKeyHandler = (event) => {
      let key = event.key;
      if( 
        (key >= "0" && key <="9") || 
        key ==="+" ||
        key ==="-" ||
        key ==="%" ||
        key ==="/" ||
        key ==="*" 
      ){
        if (display.isClear) {
          setDisplay({
            currentValue: key,
            isClear: false,
          });
        } else if (operator.isoperatorClear) {
          setoperator({
            operator: operator.operator,
            isoperatorClear: false,
          });
          setDisplay((prevState) => ({
            ...prevState,
            currentValue:
              prevState.currentValue +
              operator.operator +
              key,
          }));
        }else if (event.key === "Enter") {
          // Handle Enter key for result calculation
          makeResult(); }
         else {
          setDisplay((prevState) => ({
            ...prevState,
            currentValue: prevState.currentValue + key,
          }));
        }
      }
    };

    window.addEventListener("keydown", myKeyHandler);
    return() => {
      window.removeEventListener ("keydown",myKeyHandler)
    }
  }, [display,operator]);

  const changeNumber = (pressedNumber) => {
    // console.log("In change number fun : ",pressedNumber);

    if (display.isClear) {
      setDisplay((prevState) => ({
        currentValue: pressedNumber.target.value,
        isClear: false,
      }));
    } else if (operator.isoperatorClear) {
      console.log(
        "In numer Else : Disp and op set to cureent number state and false"
      );
      setoperator(() => ({
        operator: operator.operator,
        isoperatorClear: false,
      }));
      setDisplay((prevState) => ({
        ...prevState,
        currentValue:
          prevState.currentValue +
          operator.operator +
          pressedNumber.target.value,
      }));
    } else {
      
      setDisplay((prevState) => ({
        ...prevState,
        currentValue: prevState.currentValue + pressedNumber.target.value,
      }));
    }
  };

  const changeOperator = (pressedOpertor) => {
    console.log("In operator IF");
    setoperator(() => ({
      isoperatorClear: true,
      operator: pressedOpertor.target.value,
    }));
  };

  const makeResult = () => {
    console.log("Res : ", display, operator);
    try {
      let res = eval(display.currentValue);
      setDisplay({ currentValue: res, isClear: false });
      setoperator({ operator: "", isoperatorClear: false });
    } catch (error) {
      console.log("facing ", error.className);
      if (
        window.confirm("Error occured! Please click here to refresh the page ")
      ) {
        window.location.reload();
      }
    }
  };
  const settoPrev = () => {
    console.log("In prev : ", display, operator);

    // setDisplay((prevstate) => ({
    //   currentValue: prevstate.currentValue.slice(0,-1),
    //   isClear: false,
    // }));
    // setoperator({ operator: "", isoperatorClear: false });
  };

  return (
    <div className="mainBox">
      <input
        value={
          display.currentValue +
          (operator.isoperatorClear ? operator.operator : "")
        }
      />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={7} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={8} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={9} />
      <ButtonComp
        onClick={(event) => changeOperator(event)}
        Value={"*"}
        backColor="lightgrey"
      />

      <ButtonComp onClick={(event) => changeNumber(event)} Value={4} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={5} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={6} />
      <ButtonComp
        onClick={(event) => changeOperator(event)}
        Value={"-"}
        backColor="lightgrey"
      />

      <ButtonComp onClick={(event) => changeNumber(event)} Value={1} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={2} />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={3} />
      <ButtonComp
        onClick={(event) => changeOperator(event)}
        Value={"+"}
        backColor="lightgrey"
      />

      <ButtonComp Value={"+/-"} backColor="lightgrey" />
      <ButtonComp onClick={settoPrev} Value={"X"} backColor="red" />
      <ButtonComp onClick={(event) => changeNumber(event)} Value={0} />
      <ButtonComp
        onClick={(event) => changeNumber(event)}
        Value={"."}
        backColor="lightgrey"
      />
      <ButtonComp onClick={makeResult} Value={"="} backColor="aqua" />
    </div>
  );
}

export default App;
