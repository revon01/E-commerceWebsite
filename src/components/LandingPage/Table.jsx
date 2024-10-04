import Data from "../../utils/Data.json";
import '../../styles/Table.css';
import { IoCloudDone } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Table = () => {
  
const coffeeMakersData = Data.coffeeMakersData || [];
console.log(coffeeMakersData);
return (
    <div className="container">
      <h1>𝙃𝙤𝙬 𝙒𝙚 𝙎𝙩𝙖𝙣𝙙 𝙊𝙪𝙩</h1>

      {coffeeMakersData.length > 0 ? (
        <table>
     <thead>
            <tr>
              <th>Features</th>
              <th>Our Coffee Maker</th>
              <th>Other Coffee Maker 1</th>
              <th>Other Coffee Maker 2</th>
            </tr>
          </thead>
          <tbody>

            {coffeeMakersData.map((item, index) => (
              <tr key={index}>
                <td>{item.feature || " "}</td>
                <td>{item.ourCoffeeMaker !== null ? (item.ourCoffeeMaker ? <span className="check"><IoCloudDone />
                </span> : <span className="cross"><ImCross /></span>) : ""}</td>
                <td>{item.otherCoffeeMaker1 !== null ? (item.otherCoffeeMaker1 ? <span className="check"><IoCloudDone />
                </span> : <span className="cross"><ImCross /></span>) : ""}</td>
                <td>{item.otherCoffeeMaker2 !== null ? (item.otherCoffeeMaker2 ? <span className="check"><IoCloudDone />
                </span> : <span className="cross"><ImCross /></span>) : ""}</td>
              </tr>
              
            ))}
          </tbody>
        </table>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
};

export default Table;
