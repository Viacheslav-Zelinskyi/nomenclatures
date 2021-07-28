import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [nomenclatures, setnomenclatures] = useState();
  const [firstSelect, setFirstSelect] = useState("1");
  const [secondSelect, setSecondSelect] = useState("1");
  const [thirdSelect, setThirdSelect] = useState("");

  useEffect(() => {
    getNomenclatures(setnomenclatures);
  }, []);

  return (
    <div className="App">
      <select onChange={(event) => setFirstSelect(event.target.value)}>
        {nomenclatures
          ? nomenclatures.firstTable.map((item) => (
              <option value={item.ID} key={item.ID}>
                {item.NAME}
              </option>
            ))
          : null}
      </select>
      <select onChange={(event) => setSecondSelect(event.target.value)}>
        {nomenclatures
          ? nomenclatures.secondTable.map((item) => (
              <option value={item.ID} key={item.ID}>
                {item.NAME}
              </option>
            ))
          : null}
      </select>
      <select onChange={(event) => setThirdSelect(event.target.value)}>
        <option value="">...</option>
        {nomenclatures
          ? nomenclatures.thirdTable.map((item) => (
              <option value={item.id} key={item.ID}>
                {item.name_ru}
              </option>
            ))
          : null}
      </select>
      <div>
        {nomenclatures ? (
          <Result
            selection={[firstSelect, secondSelect, thirdSelect]}
            table={nomenclatures.testTable}
          ></Result>
        ) : null}
      </div>
    </div>
  );
}

export default App;

const Result = ({ selection, table }) => {
  const result = table.filter((row) => {
    const firstChannel = row.CHANNELS.split(",")[0];
    const secondChannel = row.CHANNELS.split(",")[1];
    const thirdChannel = row.CHANNELS.split(",")[2];

    if (firstChannel === selection[0]) {
      if (secondChannel === selection[1]) {
        if (selection[2].length > 0) {
          if (thirdChannel === selection[2]) return row;
        } else return row;
      }
    }
  });

  return (
    <div>
      {result.map((item) => (
        <p>{item.DEVICE_NAME_ID}</p>
      ))}
    </div>
  );
};

const getNomenclatures = async (setData) => {
  fetch("http://localhost:8000/nomenclatures", {})
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err));
};
