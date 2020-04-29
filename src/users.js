import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const UserFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  );
};

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
