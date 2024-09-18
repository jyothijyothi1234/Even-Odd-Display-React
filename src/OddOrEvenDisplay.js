import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function EvenOrOddDisplay() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(false);

  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);

  useEffect(()=>{
     if(count%2===0){
        setIsEven(true);
     }else{
        setIsEven(false)
     }
  },[count])

  return (
    <Grid container xs={12}>
      <Grid
        container
        item
        xs={12}
        sx={{ display: "flex", marginTop: "200px", justifyContent: "center" }}
      >
        <Grid item xs={2} sx={{ border: "12px solid black", height: "200px" ,display:isEven ? "none" : "flex"}}>
          <Typography variant="h4" component="h2">
            odd
          </Typography>
        </Grid>

        <Grid
          item
          xs={3}
          sx={{ display: "flex", marginLeft: "1px", justifyContent: "center" }}
        >
          <Button
            variant="contained"
            sx={{ height: "50px", marginTop: "30px" }}
            onClick={decrement}
          >
            -
          </Button>
          <Typography variant="h4" component="h2" sx={{ marginTop: "30px" }}>
            {count}
          </Typography>
          <Button
            variant="contained"
            sx={{ height: "50px", marginTop: "30px" }}
            onClick={increment}
          >
            +
          </Button>
        </Grid>

        <Grid item xs={2} sx={{ border: "12px solid green", height: "200px",display:isEven ? "flex":"none" }}>
          <Typography variant="h4" component="h2">
            Even
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EvenOrOddDisplay;
