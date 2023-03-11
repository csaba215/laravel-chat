import './bootstrap';
import '../css/app.css';
import { createRoot } from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoggedIn from './LoggedIn';
import { Sanctum } from "react-sanctum";
import Chat from './Chat';
import {sanctumConfig} from './config/sanctum';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoggedIn><Chat/></LoggedIn>,
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Sanctum config={sanctumConfig}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </Sanctum>,
);