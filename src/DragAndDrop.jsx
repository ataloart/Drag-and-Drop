import { useState } from "react";
import "./DragAndDrop.css";

export const DragAndDrop = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Tarea 1",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 2,
      title: "Tarea 2",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 3,
      title: "Tarea 3",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 4,
      title: "Tarea 4",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
    {
      id: 5,
      title: "Tarea 5",
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit ipsum dolor.",
      list: 1,
    },
  ]);

  const getList = (list) => {
    return tasks.filter((item) => item.list === list);
  };

  // Obtenemos los datos del elemento que arrastramos
  const startDrag = (evt, item) => {
    evt.dataTransfer.setData("itemID", item.id);
  };

  // Obtenemos el elemento que soltamos
  const draggingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt, list) => {
    const itemID = evt.dataTransfer.getData("itemID");
    const item = tasks.find((item) => item.id === Number(itemID));
    item.list = list;

    const newState = tasks.map((task) => {
      if (task.id === itemID) return item;
      return task;
    });
    setTasks(newState);
  };

  return (
    <>
      <h1>{`Arrastrar y Soltar `}</h1>

      <div className="drag-and-drop">
        {/* Columna 1 */}
        <div className="column column--1">
          <h3>Por hacer</h3>

          <div
            className="drag-drop-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            //OnDrop es un elemento propio de React
            onDrop={(evt) => onDrop(evt, 1)}
          >
            {getList(1).map((item) => (
              <div
                className="drag-drop-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Columna 2 */}
        <div className="column column--2">
          <h3>En Proceso</h3>
          <div
            className="drag-drop-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            //OnDrop es un elemento propio de React
            onDrop={(evt) => onDrop(evt, 2)}
          >
            {getList(2).map((item) => (
              <div
                className="drag-drop-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Columna 3 */}
        <div className="column column--3">
          <h3>Hecho</h3>

          <div
            className="drag-drop-zone"
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
            //OnDrop es un elemento propio de React
            onDrop={(evt) => onDrop(evt, 3)}
          >
            {getList(3).map((item) => (
              <div
                className="drag-drop-element"
                key={item.id}
                draggable
                onDragStart={(evt) => startDrag(evt, item)}
              >
                <strong className="title">{item.title}</strong>
                <p className="body">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
