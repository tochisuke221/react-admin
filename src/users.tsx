import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, EditButton, Show, SimpleShowLayout } from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";
import MyUrlField from './MyUrlField';

// モバイルとPC
export const UserList = () => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down("sm"));

    return (
        <List>
          {
              isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
              ) : (
                <Datagrid rowClick="show">
                    <TextField source="id" />
                    <TextField source="name" />
                    {/* <TextField source="username" /> */}
                    <EmailField source="email" />
                    {/* <TextField source="address.street" /> */}
                    <TextField source="phone" />
                    <UrlField source="website" />
                    <MyUrlField source="website" />
                    <TextField source="company.name" />
                    <EditButton />
                </Datagrid>
              )
          }
        </List>
    )
}

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <TextField source="company.name" />
        </SimpleShowLayout>
    </Show>
);
