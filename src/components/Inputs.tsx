import { ChangeEvent } from 'react';

import Row from '../models/Row';

type InputsProps = {
  fileChange: (e: ChangeEvent<HTMLInputElement>) => void,
  filterChange: (e: ChangeEvent<HTMLInputElement>) => void,
  rows: Row[]
}

function Inputs({ fileChange, filterChange, rows }: InputsProps) {
  return (
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-one-third">
        <div className="nhsuk-form-group">
          <label className="nhsuk-label" htmlFor="upload">
            Upload feedback spreadsheet
          </label>
          <input className="nhsuk-input" id="upload" name="upload" type="file" onChange={fileChange} />
        </div>
      </div>
      <div className="nhsuk-grid-column-one-third">
        { rows.length > 0 &&
          <div className="nhsuk-form-group">
            <label className="nhsuk-label" htmlFor="filter">
              Filter by URL
            </label>
            <input className="nhsuk-input" id="filter" name="filter" type="text" onChange={filterChange} />
          </div>
        }
      </div>
    </div>
  );
}

export default Inputs;
