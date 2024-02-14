import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import ConditionalStatements from "./routes/ConditionalStatements";
import DataTypes from "./routes/DataTypes";
import LatestUpdate from "./routes/LatestUpdate";
import Loops from "./routes/Loops";
import Objects from "./routes/Objects";
import Operators from "./routes/Operators";
import Variables from "./routes/Variables";
import Function from "./routes/Function";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/ConditionalStatements"
            element={<ConditionalStatements />}
          />
          <Route path="/DataTypes" element={<DataTypes />} />
          <Route path="/Function" element={<Function />} />
          <Route path="/LatestUpdate" element={<LatestUpdate />} />
          <Route path="/Loops" element={<Loops />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Objects" element={<Objects />} />
          <Route path="/Operators" element={<Operators />} />
          <Route path="/Variables" element={<Variables />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
