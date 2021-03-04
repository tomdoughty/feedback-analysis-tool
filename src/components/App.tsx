import { useState } from 'react';
import XLSX from 'xlsx';

import Row from '../models/Row';

import Inputs from './Inputs';
import Table from './Table';
import Analysis from './Analysis';

function App() {

  const [allRows, setAllRows] = useState<Row[]>([]);
  const [filteredRows, setFilteredRows] = useState<Row[]>([]);

  function fileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    if (!event.target.files) return;
    const reader = new FileReader();
    reader.onload = (): void => {
      const wb = XLSX.read(reader.result, {type: 'binary'});
      const rawRows : Row[] = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
      const rows = rawRows.map((row) => new Row(row));
      setAllRows(rows);
      setFilteredRows(rows);
    }
    reader.readAsBinaryString(event.target.files[0]);
  }

  function filterChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const rows = allRows.filter((row) => row.url.includes(event.currentTarget.value));
    setFilteredRows(rows);
  }

  return (
    <main id="main-content" className="nhsuk-main-wrapper">
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1>Feedback analysis tool</h1>
        </div>
      </div>
      <Inputs fileChange={fileChange} filterChange={filterChange} rows={filteredRows} />
      { filteredRows.length > 0 &&
        <div className="nhsuk-grid-row">
          <div className="nhsuk-grid-column-two-thirds">
            <h2>Uploaded data</h2>
            <Table rows={ filteredRows } />
          </div>
          <div className="nhsuk-grid-column-one-third">
              <Analysis rows={ filteredRows } />
          </div>
        </div>
      }
    </main>
  );
}

export default App;
