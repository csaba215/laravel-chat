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

const sanctumConfig = {
  // Your application URL
  apiUrl: "http://laravel-chat.test",
  // The following settings are URLS that need to be created in your Laravel application
  // The URL sanctum uses for the csrf cookie
  csrfCookieRoute: "sanctum/csrf-cookie",
  // {email: string, password: string, remember: true | null} get POSTed to here
  signInRoute: "api/login",
  // A POST request is sent to this route to sign the user out
  signOutRoute: "api/logout",
  // Used (GET) for checking if the user is signed in (so this should be protected)
  // The returned object will be avaiable as `user` in the React components.
  userObjectRoute: "api/user",
  // The URL where the OTAP token or recovery code will be sent to (optional).
  // Only needed if you want to use two factor authentication.
  //twoFactorChallengeRoute: "two-factor-challenge",
  // An axios instance to be used by react-sanctum (optional). Useful if you for example need to add custom interceptors.
  axiosInstance: window.axios,
  // Optional key used for the username POSTed to Laravel, defaults to "email". 
  usernameKey: "email"
};

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