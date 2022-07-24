import React from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { baseURL } from "../App";
import Statistics from "./statistics";

import Adam from "../adam.png";
import Joe from "../joe.png";
import Emily from "../emily.png";
import Overview from "./overview";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ":hover": {
    backgroundColor: "#c7c4e2",
    transition: ".5s ease",
    cursor: "pointer",
  },
}));

const Candidates = () => {
  const [candidate, setCandidate] = React.useState("joe");
  const [joeStats, setJoeStats] = React.useState({});
  const [emilyStats, setEmilyStats] = React.useState({});
  const [adamStats, setAdamStats] = React.useState({});

  const list = [
    {
      key: "joe",
      img: Joe,
      onclick: () => {
        setCandidate("joe");
      },
    },
    {
      key: "emily",
      img: Emily,
      onclick: () => {
        setCandidate("emily");
      },
    },
    {
      key: "adam",
      img: Adam,
      onclick: () => {
        setCandidate("adam");
      },
    },
  ];

  React.useEffect(() => {
    axios.get(`${baseURL}/statistics/emily`).then((response) => {
      setEmilyStats(response.data);
    });

    axios.get(`${baseURL}/statistics/joe`).then((response) => {
      setJoeStats(response.data);
    });

    axios.get(`${baseURL}/statistics/adam`).then((response) => {
      setAdamStats(response.data);
    });
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={4}>
          {list.map((item) => {
            return (
              <Grid item xs={4} key={item.key}>
                <Item onClick={() => item.onclick()}>
                  <img height={300} src={item.img} alt="logo" />
                </Item>
              </Grid>
            );
          })}
        </Grid>
        {candidate === "joe" && <Statistics data={joeStats} candidate="Joe" />}
        {candidate === "adam" && (
          <Statistics data={adamStats} candidate="Adam" />
        )}
        {candidate === "emily" && (
          <Statistics data={emilyStats} candidate="Emily" />
        )}
      </Box>

      <Overview data={{ joe: joeStats, emily: emilyStats, adam: adamStats }} />
    </>
  );
};

export default Candidates;
