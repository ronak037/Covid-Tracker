import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames"; //used to give multiple classNames to one component

import styles from "./Card.module.css";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => {

  

  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cx(styles.card, className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5">
          {/* This is for the animation of countup */}
          <CountUp start={0} end={value} duration={0.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{cardSubtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
