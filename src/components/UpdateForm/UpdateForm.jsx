import { useSelector } from "react-redux";
import { Form, Label, Input, Button } from "./UpdateForm.styled";
import { usersApi } from "redux/usersApi";

function UpdateForm() {
  const [updateUser] = usersApi.useUpdateMutation();
  const userId = useSelector((state) => state.users.user._id);

  const submitHandler = (e) => {
    e.preventDefault();

    const body = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((v, k) => {
      if (v) {
        body[k] = v;
      }
    });

    updateUser({ userId, body });
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

      <Button>Update details</Button>
    </Form>
  );
}

export default UpdateForm;
