// import {
//   Admin,
//   Resource,
//   // ListGuesser,
//   // EditGuesser,
//   // ShowGuesser,
// } from "react-admin";
import { Admin, Resource, ListGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList } from "./users"
import { PostList } from "./posts"

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="users" list={UserList} />
    <Resource
      name="posts"
      list={PostList}

    />
    {/* <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
  </Admin>
);
