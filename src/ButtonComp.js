export function ButtonComp(props) {
    return <button onClick={props.onClick} style={{ backgroundColor: props.backColor }} value={props.Value}>{props.Value}</button>;
  }
  