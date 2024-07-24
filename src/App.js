import React, { useEffect, useState } from "react";
import profileIcon from "./assets/images/profile-icon.png";
import "./app.css";
import { Modal } from "./components/Modal";
import MainCard from "./components/MainCard";

function App() {
  const [pendingList, setPendingList] = useState([]);
  const [inProgressList, setInProgressList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [deployedList, setDeployedList] = useState([]);
  const [deferredList, setDeferredList] = useState([]);
  const [newTaskData, setNewTaskData] = useState({});
  const [isAddNewTaskModalOpen, setIsAddNewTaskModalOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(newTaskData).length > 0) {
      setPendingList([...pendingList, newTaskData]);
    }
  }, [newTaskData]);

  const mainCardInfo = [
    { title: "Pending", class: "bg-grey", list: pendingList },
    { title: "In Progress", class: "bg-orange", list: inProgressList },
    { title: "Completed", class: "bg-green", list: completedList },
    { title: "Deployed", class: "bg-dark-blue", list: deployedList },
    { title: "Deffered", class: "bg-pink", list: deferredList },
  ];

  const deleteCard = (heading, index) => {
    if (heading === "Pending") {
      setPendingList(
        pendingList.filter((_, ind) => {
          return index !== ind;
        })
      );
    } else if (heading === "In Progress") {
      setInProgressList(
        inProgressList.filter((_, ind) => {
          return index !== ind;
        })
      );
    } else if (heading === "Completed") {
      setCompletedList(
        completedList.filter((_, ind) => {
          return index !== ind;
        })
      );
    } else if (heading === "Deployed") {
      setDeployedList(
        deployedList.filter((_, ind) => {
          return index !== ind;
        })
      );
    } else if (heading === "Deffered") {
      setDeferredList(
        deferredList.filter((_, ind) => {
          return index !== ind;
        })
      );
    }
  };

  return (
    <div className="page-container">
      <header className="display-flex justify-space-between align-items-center">
        <h2>Task Board</h2>
        <img src={profileIcon} className="profile-icon" alt="profile"></img>
      </header>
      <div className="border p-2">
        <div className="display-flex justify-space-between align-items-center">
          <div className="display-flex gap-2">
            <p>Filter By: </p>
            <div className="display-flex gap-2 align-items-center">
              <input
                type="text"
                className="input-box"
                placeholder="Assignee Name"
              ></input>
              <select
                id="cars"
                name="cars"
                className="input-box"
                placeholder="Assignee Name"
              >
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
              </select>
              <input type="date" className="input-box"></input>
            </div>
          </div>
          <button
            className="input-box btn"
            onClick={() => {
              localStorage.setItem("modalName", "New");
              localStorage.setItem("modalHeading", "CREATE A TASK");
              setIsAddNewTaskModalOpen(true);
            }}
          >
            Add New Task
          </button>
        </div>

        <div className="display-flex gap-2 align-items-center">
          <p>Sort By: </p>
          <select id="cars" name="cars" className="input-box">
            <option value="P1">P1</option>
            <option value="P2">P2</option>
            <option value="P3">P3</option>
            <option value="P4">P4</option>
          </select>
        </div>

        <div className="cards-wrapper display-flex">
          {mainCardInfo.map((mainCardData) => (
            <MainCard cardInfo={mainCardData} deleteCard={deleteCard} />
          ))}
        </div>
      </div>
      {isAddNewTaskModalOpen && (
        <Modal
          setNewTaskData={setNewTaskData}
          setIsModalOpen={setIsAddNewTaskModalOpen}
        />
      )}
    </div>
  );
}

export default App;
