import './App.css';
import DropConference from './components/DropConference/DropConference';
import DropData from './components/DropData/DropData';
import DropFloor from './components/DropFloor/DropFloor';
import DropTower from './components/DropTower/DropTower';
import { useState } from 'react';

function App() {
  const [dropTower, setDropTower] = useState('A');
  const [dropFloor, setDropFloor] = useState(3);
  const [dropConference, setDropConference] = useState(1);
  const [inputData, setInputData] = useState([new Date(), new Date()]);
  const [inputComment, setInputComment] = useState('');

  const clearFormatter = () => {
    setDropTower('А');
    setDropFloor(3);
    setDropConference(1);
    setInputData([new Date(), new Date()]);
    setInputComment('');
  };

  const jsonFormatter = () => {
    const json = {
      башня: dropTower,
      этаж: dropFloor,
      переговорка: dropConference,
      дата: inputData,
      комментарий: inputComment,
    };
    console.log(JSON.stringify(json, null, 2));
  };

  return (
    <div className="App">
      <div className="wrapper">
        <header className="appHeader">Форма бронирования переговорной комнаты</header>
        <p className="appHeaderInfo">
          Для бронирования необходимо выбрать башню, желаемый этаж, номер кабинета для переговоров и временной интервал
        </p>
        <div className="dropBoxes">
          <DropTower dropTower={dropTower} setDropTower={setDropTower} />
          <DropFloor dropFloor={dropFloor} setDropFloor={setDropFloor} />
          <DropConference dropConference={dropConference} setDropConference={setDropConference} />
        </div>
        <DropData inputData={inputData} setInputData={setInputData} />
        <div className="buttonsComments">
          <input
            className="inputComment"
            type="text"
            placeholder="Комментарий к брони..."
            value={inputComment}
            onChange={(event) => {
              setInputComment(event.target.value);
            }}
          ></input>
          <div className="buttons">
            <button className="sendInfo" onClick={() => jsonFormatter()}>
              Отправить
            </button>
            <button className="clearForm" onClick={() => clearFormatter()}>
              Очистить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
