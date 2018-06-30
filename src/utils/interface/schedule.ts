export default interface Schedule {
    id: String;
    name: String;
    date: String;
    time: {
      start: String,
      end: String
    }
    place: String;
  }