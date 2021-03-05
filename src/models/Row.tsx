class Row {
  date: string;
  url: string;
  satisfied: string;
  comments: string;

  constructor(row: any) {
    this.date = row.datetime
    this.url = row.URL;
    this.satisfied = row.Satisfied.toString() || "n/a";
    this.comments = row.Comments || "n/a";
  }
}

export default Row;
