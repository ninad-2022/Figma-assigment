import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes/admin/AdminRoutes";

const SidebarRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Array.isArray(routes) &&
            routes.map(({ path, component }, i) => (
              <Route key={path + "-" + i} path={path} element={component} />
            ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default SidebarRoutes;
