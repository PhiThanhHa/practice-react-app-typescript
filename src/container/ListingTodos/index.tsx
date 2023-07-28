import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IApplicationState, deleteDatas, getPosts } from "../../store";

function ListingTodos() {
  const dispatch = useDispatch();

  const listPostData = useSelector(
    (state: IApplicationState) => state.postList
  );

  const handleDelete = (id: any) => {
    console.log("-------");
    id = listPostData.data?.find((id: number) => ({ id }));
    console.log("[ID]", id);
  };

  // const handleDelete = (id: any) => {
  //   console.log("-------");
  //   id = listDeleteData.data?.find((id: number) => ({ id }));
  //   console.log("[ID]", id);
  // };

  // console.log(listDeleteData.data?.length);
  // console.log(listDeleteData.data);

  // const listDeleteData = useSelector(
  //   (state: IApplicationState) => state.deleteData
  // );

  console.log(listPostData.data);

  const dataSource = listPostData.data?.map((value: any, index: number) => ({
    key: value.id,
    id: value.id,
    title: value.title,
    completed: value.completed.toString(),
  }));

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
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
    },

    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <a href="page1">
            <Button type="primary" ghost>
              Add
            </Button>

            <Button
              type="primary"
              ghost
              style={{ marginLeft: 15, marginRight: 15 }}
            >
              Update
            </Button>
          </a>

          <Button type="primary" ghost onClick={handleDelete}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    dispatch(deleteDatas((handleDelete: any) => handleDelete(handleDelete.id)));
  }, []);

  return <Table dataSource={dataSource} columns={columns} />;
}

export default ListingTodos;
