import { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUser, fetchUsers } from "../store";
import Button from "./Button";
import { useThunk } from "../hooks/useThunk";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;
  if (isLoadingUsers) {
    content = <div>Loading...</div>;
  } else if (loadingUsersError) {
    content = <div>Error loading data</div>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div>{user.name}</div>
        </div>
      );
    });
  }

  return (
    <div>
      <Button loading={isCreatingUser} onClick={handleUserAdd}>
        + Add User
      </Button>
      {creatingUserError && "Error creating user..."}
      <div>{content}</div>
    </div>
  );
}

export default UsersList;
