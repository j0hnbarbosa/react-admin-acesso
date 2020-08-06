import React from 'react';
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import CustomRoutes from './routes';
import Teste from './teste';
import Login from './pages/login';

const App = () => (
  <Admin
    loginPage={Login}
    customRoutes={CustomRoutes}
    dashboard={Teste}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} edit={EditGuesser} />
  </Admin>
);

export default App;
