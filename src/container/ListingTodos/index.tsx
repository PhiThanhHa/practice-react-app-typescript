import { Button, Table } from "antd";
import react from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewTodos } from "./ListingTodosSlice";
import { v4 as uuid4 } from "uuid";

function ListingTodos() {
  const [todoName, setTodoName] = useState("");
  const [todoAge, setTodoAge] = useState("");
  const [todoAddress, setTodoAddress] = useState("");
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      addNewTodos({
        id: uuid4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
  };

  // const handleUpdateButtonClick = () => {
  //   dispatch(updateTodos({}));
  // };

  // const handleDeleteButtonClick = () => {
  // dispatch(deleteTodos({}));
  // };
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <Button type="primary" ghost onClick={handleAddButtonClick}>
            Add
          </Button>
          <Button type="primary" ghost onClick={handleUpdateButtonClick}>
            Update
          </Button>
          <Button type="primary" ghost onClick={handleDeleteButtonClick}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
}

export default ListingTodos;
function uuid4() {
  throw new Error("Function not implemented.");
}
