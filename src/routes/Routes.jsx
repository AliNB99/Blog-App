import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogsPage from "../pages/BlogsPage";
import BlogPage from "../pages/BlogPage";
import AuthorPage from "../pages/AuthorPage";
import AuthorsPage from "../pages/AuthorsPage";

function RoutesInfo() {
  return (
    <Routes>
      <Route index element={<BlogsPage />} />
      <Route path="/*" element={<Navigate to="/blogs" replace={true} />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:slug" element={<BlogPage />} />
      <Route path="/authors" element={<AuthorsPage />} />
      <Route path="/authors/:slug" element={<AuthorPage />} />
    </Routes>
  );
}

export default RoutesInfo;
