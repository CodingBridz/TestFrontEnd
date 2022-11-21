import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpells } from "../../redux/spell/middleware";
import { spellSelector } from "../../redux/spell/spellSlice";
import { useNavigate } from "react-router-dom";
import {
  addToFavourites,
  favouriteSelector,
  removeFromFavourites,
} from "../../redux/favourite/favouriteSlice";
import classes from "./style.module.css";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";
import { SpellInfo } from "../../redux/spell/types";

const SpellList = () => {
  let navigate = useNavigate();
  const { spellList, loading } = useSelector(spellSelector);
  const { favourites } = useSelector(favouriteSelector);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getSpells({}));
  }, [dispatch]);

  const redirectHandler = (path: string) => {
    navigate(path);
  };

  const favouriteClickHandler = (e: React.MouseEvent<HTMLElement>, spell: object) => {
    e.stopPropagation();
    dispatch(addToFavourites(spell));
  };

  const removeFavouriteClickHandler = (e: React.MouseEvent<HTMLElement>, spell: object) => {
    e.stopPropagation();
    dispatch(removeFromFavourites(spell));
  };

  if (loading)
    return (
      <div className={classes.container}>
        <h1>Loading ... </h1>
      </div>
    );

  return (
    <div className={classes.gridContainer}>
      {spellList?.map((spell:any) => (
        <div
          className={classes.smallCards}
          key={spell.index}
          onClick={() => {
            redirectHandler(spell.url);
          }}
        >
          <p>{spell.name}</p>
          {favourites.some((fav: SpellInfo) => fav.index === spell.index) ? (
            <div
              className={classes.favIcon}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                removeFavouriteClickHandler(e, spell);
              }}
            >
              <SolidHeartIcon />
            </div>
          ) : (
            <div
              className={classes.icon}
              onClick={(e: React.MouseEvent<HTMLElement>) => {
                favouriteClickHandler(e, spell);
              }}
            >
              <HeartIcon />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SpellList;
