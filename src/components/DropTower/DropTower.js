import '../style.css';

function DropTower({ dropTower, setDropTower }) {
  const nameTower = ['А', 'Б'];
  return (
    <div>
      <header className="dropHeader">Башня</header>
      <select
        name="tower"
        value={nameTower.indexOf(dropTower)}
        onChange={(event) => {
          setDropTower(nameTower[event.target.value]);
        }}
      >
        {nameTower.map((val, ind) => (
          <option value={ind}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default DropTower;
