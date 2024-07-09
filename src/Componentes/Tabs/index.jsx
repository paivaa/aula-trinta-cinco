import { useState } from "react";
import MirrorText from "../MirrorText";
import ToDoList from "../ToDoList";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onMouseEnter={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onMouseEnter={handleTab2}
        >
          Tab 2
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <MirrorText /> : <ToDoList/> }
      </div>
    </div>
  );
};
export default Tabs;