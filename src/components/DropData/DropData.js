import { DateRangePicker } from 'rsuite';
import './dropData.css';

function DropData({ inputData, setInputData }) {
  return (
    <div className="dropData__wrapper">
      <header className="dropHeader">Дата</header>
      <DateRangePicker
        format="dd-MM-yyyy HH:mm"
        onChange={setInputData}
        value={inputData}
        defaultCalendarValue={inputData}
      />
    </div>
  );
}

export default DropData;
