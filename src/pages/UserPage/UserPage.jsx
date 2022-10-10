import { Container } from "components/Container";
import UpdateForm from "components/UpdateForm";

function UserPage({ socket }) {
  return (
    <Container flexDirection="column">
      <h3>Update user details</h3>
      <UpdateForm socket={socket} />
    </Container>
  );
}

export default UserPage;
