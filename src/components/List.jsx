function List(props) {
  const { listElements } = props;
  return (
    <div>
      <ul>
        {listElements?.map((listElement) => (
          <li key={listElement?.id}>{listElement?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
