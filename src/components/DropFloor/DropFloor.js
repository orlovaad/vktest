import '../style.css';

function DropFloor({ dropFloor, setDropFloor }) {
  let floors = [];
  for (let i = 3; i < 28; i++) {
    floors.push(i);
  }
  return (
    <div>
      <header className="dropHeader">Этаж</header>
      <select
        name="floor"
        value={floors.indexOf(dropFloor)}
        onChange={(event) => {
          setDropFloor(floors[event.target.value]);
        }}
      >
        {floors.map((val, ind) => (
          <option value={ind}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default DropFloor;
