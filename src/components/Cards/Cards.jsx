import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid conatainer spacing={3} justify="center">
        <div className={styles.grid}>
          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.infected)}
            xs={12}
            // md={3}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={confirmed.value} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of active cases covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.recovered)}
            xs={12}
            // md={3}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={recovered.value} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of recoverd cases covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            className={cx(styles.card, styles.deaths)}
            xs={12}
            // md={3}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                <CountUp start={0} end={deaths.value} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">
                Number of deaths caused covid-19
              </Typography>
            </CardContent>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};
export default Cards;
