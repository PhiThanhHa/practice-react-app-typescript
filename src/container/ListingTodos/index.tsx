import React, { useEffect } from "react";
import { Alert, Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IApplicationState, deleteDatas, getPosts } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ListingTodos() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const listDeleteData = useSelector(
    (state: IApplicationState) => state.deleteData
  );

  const handleDelete = (data: any) => {
    console.log(data);
    dispatch(deleteDatas(data.id));
  };

  useEffect(() => {
    if (listDeleteData.isFetching === false && listDeleteData.data) {
      toast("Delete success");
    }
    console.log(listDeleteData);
  }, [listDeleteData]);

  const onAdd = () => {
    navigate("/create-edit");
  };

  const handleUpdate = (data: any) => {
    const url =
      "/create-edit?userId=" +
      data.userId +
      "&id=" +
      data.id +
      "&body=" +
      encodeURIComponent(data.body) +
      "&title=" +
      encodeURIComponent(data.title);
    navigate(url);
    console.log(url);
    console.log(data);
  };

  //  id: 1,
  // title: 'foo',
  // body: 'bar',
  // userId: 1,
  const listPostData = useSelector(
    (state: IApplicationState) => state.postList
  );

  const dataSource = listPostData.data?.map((value: any, index: number) => ({
    userId: value.userId,
    key: value.id,
    id: value.id,
    title: value.title,
    body: value.body,
  }));

  // const buttonAdd: {
  //     title: "Action",
  //     key: "action",
  //     render: () => (
  //         // <Button type="primary" ghost onClick={onAdd}>
  //         //   Add
  //         // </Button>
  //     ),
  //   }[]

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "body",
      dataIndex: "body",
      key: "body",
    },

    {
      title: "Action",
      key: "action",
      render: (e: any, data: any) => (
        <div>
          <Button type="primary" ghost onClick={onAdd}>
            Add
          </Button>

          <Button
            type="primary"
            ghost
            style={{ marginLeft: 15, marginRight: 15 }}
            onClick={() => handleUpdate(data)}
          >
            Update
          </Button>

          <Button type="primary" ghost onClick={() => handleDelete(data)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return <Table dataSource={dataSource} columns={columns} />;
}

export default ListingTodos;
