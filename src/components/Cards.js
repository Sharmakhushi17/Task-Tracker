import React, { useState } from "react";
import { Modal } from "./Modal";

const Cards = ({ data, index, deleteCard }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditButton = () => {
    localStorage.setItem("modalName", "Edit");
    localStorage.setItem("modalHeading", "EDIT TASK");
    setIsEditModalOpen(true);
  };

  const deleteListCard = () => {
    deleteCard(data.heading, index);
  };
  return (
    <div className="bg-card card-body">
      <div className="display-flex align-items-center justify-space-between p-1">
        <span className="fw-500">{data.title}</span>
        <span className="bg-blue p-1 color-white fs-2">{data.priority}</span>
      </div>
      <hr />
      <p className="fs-2 card-description">{data.taskDescription}</p>

      <div className="display-flex align-items-center justify-space-between">
        <p>{`@${data.asignee}1234`}</p>
        <button
          className="bg-blue p-1 p-relative"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          :
          {isOptionsOpen && (
            <div className="color-white edit-modal">
              <button onClick={() => handleEditButton()}>Edit</button>
              <hr />
              <button onClick={() => deleteListCard()}>Delete</button>
            </div>
          )}
        </button>
      </div>

      <button className="card-btn btn">Assign</button>

      {isEditModalOpen && (
        <Modal
          setIsModalOpen={() => setIsEditModalOpen(false)}
          cardData={data}
        />
      )}
      {isDeleteModalOpen && (
        <Modal
          setIsModalOpen={() => setIsDeleteModalOpen(false)}
          cardData={data}
        />
      )}
    </div>
  );
};

export default Cards;
