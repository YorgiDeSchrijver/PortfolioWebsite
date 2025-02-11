import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:postId",
    element: <BlogPostPage />,
  }
];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: mainRoutes,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
];

export const router = createBrowserRouter(routes);
