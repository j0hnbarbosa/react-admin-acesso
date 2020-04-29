// in src/App.js
import React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
// import jsonServerProvider from 'ra-data-json-server';
import { UserList } from "./users";
import authProvider from "./authProvider";
import dataProvider from "./dataProvider";
import Teste from "./teste";

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    dashboard={Teste}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} edit={EditGuesser} />
  </Admin>
);

export default App;
