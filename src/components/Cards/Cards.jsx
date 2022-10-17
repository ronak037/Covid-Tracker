import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CardComponent from "./Card/Card.jsx";
import styles from "./Cards.module.css";

const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  country,
}) => {
  //this is to remove error "Cannot read property 'value' of undefined" bcz confirmed doesn't exists when there is not data
  // so that will give error in "confirmed.value" used below
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Typography gutterBottom variant="h4" component="h2">
        {country ? country : "Global"}
      </Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases of Covid-19"
        />

        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recovered cases of Covid-19"
        />

        <CardComponent
          className={styles.deaths}
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths from Covid-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
