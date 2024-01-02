import { PrivateRoute } from "../PrivateRoute/PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute/RestrictedRoute.jsx";
import { lazy } from "react";

export const HOME_ROUTE = "/";
export const FAVORITES_ROUTE = "/favorites";
export const TEACHERS_ROUTE = "/teachers";

const HomePage = lazy(() => import("../../pages/HomePage.jsx"));
const FavoritesPage = lazy(() => import("../../pages/Favorites.jsx"));
const TeachersPage = lazy(() => import("../../pages/Teachers.jsx"));

export const appRouts = [
  { path: HOME_ROUTE, element: <HomePage /> },
  {
    path: TEACHERS_ROUTE,
    element: (
      <RestrictedRoute redirectTo={HOME_ROUTE}>
        <TeachersPage />
      </RestrictedRoute>
    ),
  },
  {
    path: FAVORITES_ROUTE,
    element: (
      <PrivateRoute>
        <FavoritesPage />
      </PrivateRoute>
    ),
  },
];
