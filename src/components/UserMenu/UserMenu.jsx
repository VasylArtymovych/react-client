import { useSelector } from "react-redux";
import { usersApi } from "redux/usersApi";
import { Container, Button } from "./UserMenu.styled";

function UserMenu() {
  const [logoutUser] = usersApi.useLogOutMutation();

  const { first_name } = useSelector((state) => state.users.user);
  return (
    <Container>
      {/* <ImgWrap>
        <img src={""} alt="avatar" />
      </ImgWrap> */}
      <span>Welcome, {first_name}</span>
      <Button
        type="button"
        onClick={() => {
          logoutUser();
        }}
      >
        {/* <LogoutIcon sx={{ color: "white" }} /> */}
        Log out
      </Button>
    </Container>
  );
}

export default UserMenu;
