import "./Content.css";
import RowData from "../../constants/URLS";
import Row from "../row/Row";
export default function Content() {
  return (
    <div className="content-wrapper">
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}

//f4eb0a967e232dd97e042c5fbe0ab926
