import Shape from "./Shape";

function Card({ item, id, handleClick }) {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <Shape item={item} />
    </div>
  );
}

export default Card;
