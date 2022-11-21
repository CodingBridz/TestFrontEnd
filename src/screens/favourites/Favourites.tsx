import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  favouriteSelector,
  removeFromFavourites,
} from "../../redux/favourite/favouriteSlice";
import { HeartIcon } from "@heroicons/react/24/solid";
import classes from "./Favourites.module.css";

const Favourites = () => {
  const { favourites } = useSelector(favouriteSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const redirectHandler = (path: string) => {
    navigate(path);
  };
  const favouriteClickHandler = (spell: object) => {
    dispatch(removeFromFavourites(spell));
  };


  if (!favourites.length)
    return (
      <div className={classes.container}>
        <h1>You don't have any favourites</h1>
      </div>
    );

  return (
    <div className={classes.gridContainer}>
      {favourites?.map((favourite: any) => (
        <div className={classes.smallCards} key={favourite.index}>
          <p onClick={() => redirectHandler(favourite.url)}>{favourite.name}</p>
          <div
            className={classes.icon}
            onClick={() => favouriteClickHandler(favourite)}
          >
            <HeartIcon />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
