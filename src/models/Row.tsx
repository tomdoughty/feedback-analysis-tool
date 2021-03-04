class Row {
  url: string;
  satisfied: string;
  comments: string;

  constructor(row: Row) {
    this.url = row.url;
    this.satisfied = row.satisfied.toString() || "n/a";
    this.comments = row.comments || "n/a";
  }
}

export default Row;
