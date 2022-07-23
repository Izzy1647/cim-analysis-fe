import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Adam from "../adam.png";
import Joe from "../joe.png";
import Emily from "../emily.png";

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

const list = [
  {
    key: "joe",
    img: Joe,
  },
  {
    key: "emily",
    img: Emily,
  },
  {
    key: "adam",
    img: Adam,
  },
];

const Candidates = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={4}>
        {list.map((item) => {
          return (
            <Grid item xs={4} key={item.key}>
              <Item>
                <img height={400} src={item.img} alt="logo" />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Candidates;
