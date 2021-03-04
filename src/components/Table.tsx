import Row from '../models/Row';

type TableProps = {
  rows: Row[]
}

function Table({ rows }: TableProps) {
  return (
    rows.length > 0 ?
      <table className="nhsuk-table">
        <thead className="nhsuk-table__head">
          <tr role="row">
            <th role="columnheader" scope="col">
              URL
            </th>
            <th role="columnheader" scope="col">
              Satisfied
            </th>
            <th role="columnheader" scope="col">
              Comments
            </th>
          </tr>
        </thead>
        <tbody className="nhsuk-table__body">
          { rows.map((row, rowIndex) => (
            <tr role="row" className="nhsuk-table__row" key={`row${rowIndex}`}>
                <td className="nhsuk-table__cell">
                  { row.url }
                </td>
                <td className="nhsuk-table__cell">
                  { row.satisfied }
                </td>
                <td className="nhsuk-table__cell">
                  { row.comments }
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    : null
  );
}

export default Table;
