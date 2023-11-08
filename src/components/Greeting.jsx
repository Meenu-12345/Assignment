function Greeting(props) {
  const { name } = props;
  return (
    <h2>
      Hi <b>{name}</b>, Greeting of the day
    </h2>
  );
}

export default Greeting;
