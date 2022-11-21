import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Favourites from "../screens/favourites/Favourites";
import SpellList from "../screens/spellListPage";
import Spell from "../screens/spellPage/Spell";

const routes = [
  {
    path: '/favourites',
    component: <Favourites />
  },
  {
    path: '/api/spells',
    component: <SpellList />
  },
  {
    path: '/api/spells/:apiurl',
    component: <Spell />
  },
  {
    path: '*',
    component: <Navigate to="/api/spells" replace />
  }
]
const AppNavigation: React.FC<any> = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Navigate to="/api/spells" />} />
        {routes.map(({ path, component }) => <Route path={path} element={component} />)}
      </Routes>
    </>
  );
};

export default AppNavigation;
