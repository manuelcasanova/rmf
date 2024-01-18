// Import EditTips component
import EditComponent from "./EditComponent"

// Use EditTips for fulltips
export function Editfulltips({ data, setData }) {
  return <EditComponent data={data} setData={setData} property="fulltips" endpoint="fulltips" />;
}

// Use EditTips for assistanttips
export function Editassistanttips({ data, setData }) {
  return <EditComponent data={data} setData={setData} property="assistanttips" endpoint="assistanttips" />;
}


// import React, { useState } from "react";
// import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

// export default function Editfulltips({ data, setData }) {
//   const [fulltips, setFullTips] = useState(data[0].fulltips);

//   const editFulltips = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { fulltips };
//       await axios.put(`http://localhost:8001/data/fulltips`, body, {
//         headers: { "Content-Type": "application/json" },
//       });

//       const response = await axios.get(`http://localhost:8001/data`);
//       setData([...response.data]);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   return (
//     <div className="data-line">
//       <div className="data-left"></div>
//       <div className="data-right">
//         <input
//           type="number"
//           className="edit-input"
//           value={fulltips}
//           onChange={(e) => setFullTips(e.target.value)}
//         />
//       </div>
//       <FontAwesomeIcon
//         className="fa-check"
//         icon={faCheck}
//         onClick={(e) => editFulltips(e)}
//       />
//     </div>
//   );
// }
