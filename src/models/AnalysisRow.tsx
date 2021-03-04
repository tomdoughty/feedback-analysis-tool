import Row from './Row';

class AnalysisRow {
  id: string;
  label: string;
  value: number;
  percentage: string;

  constructor(response: string, rows: Row[]) {
    this.id = response;
    this.label = response;
    this.value = this.getValue(response, rows);
    this.percentage = this.getPercentage(response, rows);
  }

  getValue(response: string, rows: Row[]): number {
    return rows.filter((row) => row.satisfied === response).length;
  }

  getPercentage(response: string, rows: Row[]): string {
    const feedbackByResponseCount = rows.filter((row) => row.satisfied === response).length;
    const filteredFeedbackCount = rows.length;
    return `${((feedbackByResponseCount / filteredFeedbackCount) * 100).toFixed(2)}%`;
  }
}

export default AnalysisRow;
