import React from "react";
import cross from "../assets/images/cross.svg";

export const Modal = ({ setNewTaskData, setIsModalOpen, cardData = {} }) => {
  const formData = {
    title: "",
    priority: "",
    taskDescription: "",
    asignee: "",
    team: "",
  };
  const handleFormSubmit = () => {
    setNewTaskData(formData);
    setIsModalOpen(false);
  };

  const modalName = localStorage.getItem("modalName");

  return (
    <div className="overlay">
      <div className="page-container-new-task">
        <header className="display-flex justify-space-between modal-header fw-500 align-items-center    ">
          <span>{localStorage.getItem("modalHeading")}</span>
          <img src={cross} onClick={() => setIsModalOpen(false)} alt="cross" />
        </header>
        <div className="new-task-body">
          <form className="displax-flex flex-column modal-form gap-1">
            <div
              className={`${
                modalName === "New" ? "display-flex" : ""
              } align-items-center gap-2`}
            >
              <p className={modalName === "Edit" ? "mb-3" : ""}>
                <label htmlFor="title">Title:</label>
              </p>
              <input
                type="text"
                id="title"
                defaultValue={modalName === "Edit" ? cardData.title : ""}
                readOnly={modalName === "Edit"}
                className="input-box-modal"
                onChange={(e) => (formData.title = e.target.value)}
              />
              <br />
            </div>
            <div
              className={`${
                modalName === "New" ? "display-flex" : ""
              } align-items-center gap-2`}
            >
              <p className={modalName === "Edit" ? "mb-3" : ""}>
                <label htmlFor="description">Description:</label>
              </p>
              <textarea
                type="text"
                id="description"
                defaultValue={
                  modalName === "Edit" ? cardData.taskDescription : ""
                }
                readOnly={modalName === "Edit"}
                className="input-box-modal h-3"
                onChange={(event) =>
                  (formData.taskDescription = event.target.value)
                }
              />
              <br />
            </div>
            <div
              className={`${
                modalName === "New" ? "display-flex" : ""
              } align-items-center gap-2`}
            >
              <p className={modalName === "Edit" ? "mb-3" : ""}>
                <label htmlFor="team">Team:</label>
              </p>
              <input
                type="text"
                id="team"
                defaultValue={modalName === "Edit" ? cardData.team : ""}
                readOnly={modalName === "Edit"}
                className="input-box-modal"
                onChange={(event) => (formData.team = event.target.value)}
              />
              <br />
            </div>
            <div
              className={`${
                modalName === "New" ? "display-flex" : ""
              } align-items-center gap-2`}
            >
              <p className={modalName === "Edit" ? "mb-3" : ""}>
                <label htmlFor="assignees">Assignees:</label>
              </p>
              <input
                type="text"
                id="assignees"
                defaultValue={
                  modalName === "Edit" ? `@${cardData.asignee}` : ""
                }
                readOnly={modalName === "Edit"}
                className="input-box-modal"
                onChange={(event) => (formData.asignee = event.target.value)}
              />
              <br />
            </div>
            <div className="display-flex align-items-center justify-space-between">
              <div className="display-flex align-items-center gap-1">
                <p>
                  <label htmlFor="assignees">Priority:</label>
                </p>
                <select
                  id="cars"
                  name="cars"
                  className="input-box-modal"
                  onChange={(event) => (formData.priority = event.target.value)}
                >
                  <option
                    selected={
                      modalName === "New" ||
                      (modalName === "Edit" && cardData.priority === "P1")
                    }
                    value="P1"
                  >
                    P1
                  </option>
                  <option
                    selected={
                      modalName === "Edit" && cardData.priority === "P2"
                    }
                    value="P2"
                  >
                    P2
                  </option>
                  <option
                    selected={
                      modalName === "Edit" && cardData.priority === "P3"
                    }
                    value="P3"
                  >
                    P3
                  </option>
                  <option
                    selected={
                      modalName === "Edit" && cardData.priority === "P4"
                    }
                    value="P4"
                  >
                    P4
                  </option>
                </select>
              </div>
              {modalName === "Edit" && (
                <div className="display-flex align-items-center justify-content-end gap-1">
                  <p>
                    <label htmlFor="status">Status:</label>
                  </p>
                  <select id="status" name="status" className="input-box-modal">
                    <option
                      selected={cardData.heading === "Pending"}
                      value="P1"
                    >
                      Pending
                    </option>
                    <option
                      selected={cardData.heading === "In Progress"}
                      value="P2"
                    >
                      In Progress
                    </option>
                    <option
                      selected={cardData.heading === "Completed"}
                      value="P3"
                    >
                      Completed
                    </option>
                    <option
                      selected={cardData.heading === "Deployed"}
                      value="P4"
                    >
                      Deployed
                    </option>
                    <option
                      selected={cardData.heading === "Deffered"}
                      value="P4"
                    >
                      Deffered
                    </option>
                  </select>
                </div>
              )}
            </div>
            {modalName === "New" ? (
              <button
                type="button"
                className="card-btn btn m-auto display-flex"
                onClick={() => handleFormSubmit()}
              >
                ADD
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
        {modalName === "Edit" ? (
          <div className="display-flex justify-content-end gap-2 bg-white p-11">
            <button className="btn card-btn">Submit</button>
            <button className="btn card-btn">Reset</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
