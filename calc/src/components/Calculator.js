// import { useState } from "react";
import { Button, Grid } from "@mui/material";

const Calculator = () => {
  return (
    <div id="calculator">
        <Grid
            container
            spacing={2}
            sx={{ mx: "auto", px: "3rem", maxWidth: "700px" }}
        >
            <Grid item key="display" xs={12}>
                Display
            </Grid>
            <Grid item key="AC" xs={6}>
                <Button id="clear">AC</Button>
            </Grid>
            <Grid item key="/" xs={3}>
                <Button id="divide">/</Button>
            </Grid>
            <Grid item key="x" xs={3}>
                <Button id="multiply">x</Button>
            </Grid>
            <Grid item key="7" xs={3}>
                <Button id="seven">7</Button>
            </Grid>
            <Grid item key="8" xs={3}>
                <Button id="eight">8</Button>
            </Grid>
            <Grid item key="9" xs={3}>
                <Button id="nine">9</Button>
            </Grid>
            <Grid item key="-" xs={3}>
                <Button id="subtract">-</Button>
            </Grid>
            <Grid item key="4" xs={3}>
                <Button id="four">4</Button>
            </Grid>
            <Grid item key="5" xs={3}>
                <Button id="five">5</Button>
            </Grid>
            <Grid item key="6" xs={3}>
                <Button id="six">6</Button>
            </Grid>
            <Grid item key="+" xs={3}>
                <Button id="add">+</Button>
            </Grid>
            <Grid item key="1" xs={3}>
                <Button id="one">1</Button>
            </Grid>
            <Grid item key="2" xs={3}>
                <Button id="two">2</Button>
            </Grid>
            <Grid item key="3" xs={3}>
                <Button id="three">3</Button>
            </Grid>
            <Grid item key="." xs={3}>
                <Button id="decimal">.</Button>
            </Grid>
            <Grid item key="0" xs={6}>
                <Button id="zero">0</Button>
            </Grid>
            <Grid item key="=" xs={6}>
                <Button id="equals">=</Button>
            </Grid>
        </Grid>
    </div>
  );
};

export default Calculator;
