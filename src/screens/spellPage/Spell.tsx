import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Spell.module.css";
import httpService from "../../services/httpService"
interface PayloadInterface {
  isLoading: Boolean;
  spellData: {
    name: string;
    desc: string;
    level: string;
    casting_time: string;
    components: string[];
    duration: string;
    classes?: {
      index: React.Key;
      name: string;
      chip: string
    }[];
    school?: {
      name: string;
    };

  } | any
}
const Spell = ():JSX.Element => {
  const [payload, setPayload] = useState<PayloadInterface>({ isLoading: false, spellData: {} });
  const { apiurl } = useParams();
  const { isLoading, spellData } = payload;

  const __setter = (key: string, value: Boolean | PayloadInterface["spellData"][]) => setPayload((prev: any) => {
    return {
      ...prev,
      [key]: value
    }
  }
  );
  useEffect(() => {
    (async () => {
      if (typeof apiurl  === "string") {
        __setter('isLoading', true)
        httpService.get(`/spells/${apiurl}`).then((res) => __setter('spellData', res.data))
          .finally(() =>  __setter('isLoading', false))
      }
    })()
  }, [apiurl]);

  if (Boolean(isLoading))
    return (
      <div className={classes.loader}>
        <h1>Loading ... </h1>
      </div>
    );
  return (
    <div className={classes.container}>
      <h1>{spellData?.name}</h1>
      <span className={classes.desc}>
        <p>{spellData?.desc}</p>
      </span>

      <div className={classes.flexWrapContainer}>
        <span className={classes.flexCol}>
          <h5>Level</h5>
          <p>{spellData?.level}</p>
        </span>

        <span className={classes.flexCol}>
          <h5>CASTING TIME</h5>
          <p>{spellData?.casting_time}</p>
        </span>

        <span className={classes.flexCol}>
          <h5>RANGE/AREA</h5>
          <p>{spellData?.casting_time}</p>
        </span>

        <span className={classes.flexCol}>
          <h5>Components</h5>
          <section className={classes.flexBox}>
            {spellData?.components?.map((comp: string) => (
              <p key={comp}>{comp}</p>
            ))}
          </section>
        </span>

        <span className={classes.flexCol}>
          <h5>Duration</h5>
          <p>{spellData?.duration}</p>
        </span>

        <span className={classes.flexCol}>
          <h5>SCHOOL</h5>
          <p>{spellData?.school?.name}</p>
        </span>
      </div>

      <span className={classes.flexCol}>
        <h5>Classes</h5>
        <section className={classes.flexWrap}>
          {spellData?.classes?.map((clas: any) => (
            <p key={clas.index} className={classes.chip}>{clas.name}</p>
          ))}
        </section>
      </span>
    </div>
  );
};

export default Spell;
