import { Form, Label, Input, Button } from "./RegisterForm.styled";
import { usersApi } from "redux/usersApi";

function RegisterForm() {
  const [userRegister] = usersApi.useRegisterMutation();

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((v, k) => {
      if (v) {
        body[k] = v;
      }
    });

    userRegister(body);
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={submitHandler} autoComplete="off">
      <Label>First Name</Label>
      <Input
        type="text"
        name="first_name"
        pattern="^[a-zA-Zа-яА-Я]+$"
        title="First name may contain only letter."
        required
        placeholder="First name"
      />

      <Label>Last Name</Label>
      <Input
        type="text"
        name="last_name"
        pattern="^[a-zA-Zа-яА-Я]+$"
        title="Last name may contain only letters."
        placeholder="Last name"
      />

      <Label>Email</Label>
      <Input
        type="email"
        name="email"
        title="Must be a valid email"
        required
        placeholder="Email"
      />

      <Label>Phone</Label>
      <Input
        type="tel"
        name="phone"
        pattern="^\d{10}$"
        title="Phone number must be 10 digits length"
        placeholder="tellephone number xxx-xx-xx"
      />

      <Label>Password</Label>
      <Input type="password" name="password" required placeholder="Password" />

      <Button>Add User</Button>
    </Form>
  );
}

export default RegisterForm;
