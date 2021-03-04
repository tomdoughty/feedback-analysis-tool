import { useState, useEffect } from 'react';

import Row from '../models/Row';
import AnalysisRow from '../models/AnalysisRow';

import Chart from './Chart';

type AnalysisProps = {
  rows: Row[]
}

function Analysis({ rows }: AnalysisProps) {

  const [analysis, setAnalysis] = useState<AnalysisRow[]>([]);

  useEffect(() => {
    const uniqueResponses: string[] = [...new Set(rows.map((row) => row.satisfied))];
    const analysisRows = uniqueResponses.map((response) => new AnalysisRow(response, rows));
    setAnalysis(analysisRows);
  }, [rows]);

  return (
    <>
      <h2>Analysis</h2>
      <div className="chart-container">
        <Chart data={ analysis } />
      </div>
      <table className="nhsuk-table">
        <thead className="nhsuk-table__head">
          <tr role="row">
          <th role="columnheader" className="" scope="col">
              Satisfied
            </th>
            <th role="columnheader" className="" scope="col">
              Percentage
            </th>
          </tr>
        </thead>
        <tbody className="nhsuk-table__body">
          { analysis.map((row, index) => (
            <tr role="row" className="nhsuk-table__row" key={`responses${index}`}>
              <td className="nhsuk-table__cell">{ row.label }</td>
              <td className="nhsuk-table__cell">{ row.percentage }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Analysis;
