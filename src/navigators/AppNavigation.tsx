import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Favourites from "../screens/favourites/Favourites";
import SpellList from "../screens/spellListPage";
import Spell from "../screens/spellPage/Spell";

const routes = [
  {
    path: '/',
    component: <Navigate to="/api/spells" />,
    index: true
  },
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
        {routes.map(({ index = false, path, component }, idx: React.Key) => <Route index={index} key={idx} path={path} element={component} />)}
      </Routes>
    </>
  );
};

export default AppNavigation;
