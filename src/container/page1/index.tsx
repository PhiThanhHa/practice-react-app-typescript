import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { IApplicationState, createDatas } from "../../store";
import { useSelector } from "react-redux";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const handleClick: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = Form.useForm();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    console.log("[dataValues]", values);
  };

  const onReset = () => {
    form.resetFields();
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const listCreateDatas = useSelector(
    (state: IApplicationState) => state.createDatas
  );

  console.log("[listCreateDatas]", (listCreateDatas.data = onFinish));

  //eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   dispatch(createDatas());
  // }, []);

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item name="ID" label="ID">
        <Input />
      </Form.Item>

      <Form.Item name="Title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="Completed"
        label="Completed"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          // onChange={}
          allowClear
        >
          <Option value="false">false</Option>
          <Option value="true">true</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: 15 }}>
          Save
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default handleClick;
{
  /* <style>
#components-form-demo-control-hooks .ant-btn {
  margin-right: 8px;
}
</style> */
}

//  const [title, setTitle] = useState("");
//   const [id, setID] = useState("");
// const [todoAddress, setTodoAddress] = useState("");

// const handleAddButtonClick = () => {
// dispatch(
//   addNewTodos({
//     id: uuid4(),
//     name: todoName,
//     priority: priority,
//     completed: false,
//   })
// );
// };

// const handleUpdateButtonClick = () => {
// dispatch(updateTodos({}));
// };

// const handleDeleteButtonClick = () => {
// dispatch(deleteTodos({}));
// };

{
  /* <div>
  <Button type="primary" ghost onClick={handleAddButtonClick}>
    Add
  </Button>
  <Button
    type="primary"
    ghost
    onClick={handleUpdateButtonClick}
    style={{ marginLeft: 15, marginRight: 15 }}
  >
    Update
  </Button>
  <Button type="primary" ghost onClick={handleDeleteButtonClick}>
    Delete
  </Button>
</div>; */
}

function Dispatch() {
  throw new Error("Function not implemented.");
}
