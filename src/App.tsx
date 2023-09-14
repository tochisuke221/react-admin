// import {
//   Admin,
//   Resource,
//   // ListGuesser,
//   // EditGuesser,
//   // ShowGuesser,
// } from "react-admin";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { UserList, UserShow } from "./users"
import { PostList, PostEdit, PostCreate } from "./posts"

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {/* <Resource name="users" list={UserList} recordRepresentation="name" /> */}
    <Resource name="users" list={UserList} show={UserShow} recordRepresentation="name" />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    {/* <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    /> */}
  </Admin>
);
