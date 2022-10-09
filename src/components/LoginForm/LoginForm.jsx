import { Form, Label, Input, Button } from "./LoginForm.styled";
import { usersApi } from "redux/usersApi";

function LoginForm() {
  const [userLogin] = usersApi.useLoginMutation();

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((v, k) => {
      if (v) {
        body[k] = v;
      }
    });

    userLogin(body);
    e.currentTarget.reset();
  };
  const inputChangeHandler = () => {};

  return (
    <Form onSubmit={submitHandler} autoComplete="off">
      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        title="Must be a valid email"
        required
        onChange={inputChangeHandler}
        placeholder="Email"
      />

      <Label>Password</Label>
      <Input
        type="password"
        name="password"
        required
        onChange={inputChangeHandler}
        placeholder="Password"
      />

      <Button>Add User</Button>
    </Form>
  );
}

export default LoginForm;
