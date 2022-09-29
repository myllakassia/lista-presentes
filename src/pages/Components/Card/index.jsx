import "./styles.css";

export function Card(props) {
  //aqui pode desustruturar pasando ({ name, time }) e tirando o nome props.
  //mudando dentro da div, tirando a propeiedade deixando só name e time
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
