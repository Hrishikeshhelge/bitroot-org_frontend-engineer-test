import "./App.css";
import API from "./records.json";

function App() {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="grid-wrapper">
      {API &&
        API.map((record) => {
          return (
            <div className="box01" key={record.id}>
              <br></br>
              <img src={record.thumbnail.small} />
              <br></br>
              <strong>{record.title}</strong>
              <br></br>
              {record.content}
              <br></br>
              {record.author.name} - {record.author.role}
              <p>{formatDate(record.date)}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
