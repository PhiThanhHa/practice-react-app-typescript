import { Button, Table } from "antd";
import react from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewTodos } from "./ListingTodosSlice";

function ListingTodos() {
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(addNewTodos({}));
  };

  const handleUpdateButtonClick = () => {
    dispatch(addNewTodos({}));
  };

  const handleDeleteButtonClick = () => {
    dispatch(addNewTodos({}));
  };
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
