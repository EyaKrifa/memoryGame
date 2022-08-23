function Shape({ item }) {
  // return <img src={item.img} alt="" />;
  return (
    <object data={item.img} type="image/svg+xml">
      {item.img}
    </object>
  );
}

export default Shape;
