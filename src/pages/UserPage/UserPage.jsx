import { Container } from "components/Container";
import UpdateForm from "components/UpdateForm";

function UserPage() {
  return (
    <Container flexDirection="column">
      <h3>Update user details</h3>
      <UpdateForm />
    </Container>
  );
}

export default UserPage;
