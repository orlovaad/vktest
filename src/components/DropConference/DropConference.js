import '../style.css';

function DropConference({ dropConference, setDropConference }) {
  let rooms = [];
  for (let i = 1; i < 11; i++) {
    rooms.push(i);
  }
  return (
    <div>
      <header className="dropHeader">Кабинет</header>
      <select
        name="conference"
        value={rooms.indexOf(dropConference)}
        onChange={(event) => {
          setDropConference(rooms[event.target.value]);
        }}
      >
        {rooms.map((val, ind) => (
          <option value={ind}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default DropConference;
