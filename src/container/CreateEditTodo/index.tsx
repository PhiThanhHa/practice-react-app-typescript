import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import {
  IApplicationState,
  ICreateDatas,
  IUpdateDatas,
  createDatas,
  updateDatas,
} from "../../store";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function CreateEditTodo() {
  const location = useLocation();
  // const decode = decodeURIComponent(location.search);
  const params = Object.fromEntries(new URLSearchParams(location.search));
  console.log("[params]", params);

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listCreateData = useSelector(
    (state: IApplicationState) => state.createDatas
  );

  useEffect(() => {
    if (listCreateData.isFetching === false && listCreateData.data) {
      toast("add success");
    }
    console.log(listCreateData);
  }, [listCreateData]);

  const onSave = () => {
    // dispatch(updateDatas());

    navigate("/create-edit");
  };

  const onFinish = (datas: ICreateDatas) => {
    console.log("[dataValues]", datas);
    dispatch(createDatas(datas));
  };

  const onReset = () => {
    form.resetFields();
  };

  const listUpdateDatas = useSelector(
    (state: IApplicationState) => state.updateData
  );

  useEffect(() => {
    if (params) {
      form.setFieldsValue(params);
    }
  }, []);

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="userId" label="UserId">
        <Input type="number" />
      </Form.Item>

      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="body" label="body" rules={[{ required: true }]}>
        <Input multiple />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={onSave}
          style={{ marginRight: 15 }}
        >
          Save
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateEditTodo;
