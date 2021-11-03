import { useState } from "react";
import { Button, Grid } from "@mui/material";
import { evaluate } from 'mathjs';

const Calculator = () => {

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState(0);
    const [displayLast, setDisplayLast] = useState('');

    const handleNumberInput = (event) => {
        const newOperand = event.target.value;
        if ((calc.startsWith('0') && calc.length === 1) || calc.endsWith('+0') || calc.endsWith('-0') || calc.endsWith('*0') || calc.endsWith('/0')) return; 
        setCalc(calc.concat(newOperand));
    }

    const handleOperatorInput = (event) => {
        const newOperator = event.target.value;
        
        if (result !== 0) {
            setDisplayLast(result);
            setCalc(result.toString().concat(newOperator));
            setResult(0);
            return;
        }

        setCalc(calc.concat(newOperator));
    }

    const handleDecimal = () => {
        const splitRegex = /\+|-|\/|\*/g;
        const splitCalc = calc.split(splitRegex);
        if (splitCalc[splitCalc.length-1].indexOf('.') < 0 && !calc.endsWith('.')) setCalc(calc.concat('.'));        
    }

    const handleEquals = () => {
        const operatorRegex = /(\+|-|\*|\/)(\+|-|\*|\/)(\+|\*|\/)/g;          // All Operators including "-" (--> can't stand for a negative Number at the end of another Number)
        console.log(calc.replace(operatorRegex, "$3"));

        setResult(evaluate(calc.replace(operatorRegex, "$3")));
        setDisplayLast(calc)
        setCalc('');
    }

    const handleClear = () => {
        setCalc('');
        setResult(0);
    }

    return (
    <div id="calculator">
        <Grid
            container
            spacing={2}
            sx={{ mx: "auto", px: "3rem", maxWidth: "700px" }}
        >
            <Grid item key="calc-display" xs={12} id="calc-display">
                {(displayLast) ? displayLast : ''}
            </Grid>
            <Grid item key="display" xs={12} id="display">
                {(calc === '') ? result : calc}
            </Grid>
            <Grid item key="AC" xs={6}>
                <Button id="clear" onClick={handleClear}>AC</Button>
            </Grid>
            <Grid item key="/" xs={3}>
                <Button id="divide"  value="/" onClick={handleOperatorInput}>/</Button>
            </Grid>
            <Grid item key="x" xs={3}>
                <Button id="multiply" value="*" onClick={handleOperatorInput}>x</Button>
            </Grid>
            <Grid item key="7" xs={3}>
                <Button id="seven" value="7" onClick={handleNumberInput}>7</Button>
            </Grid>
            <Grid item key="8" xs={3}>
                <Button id="eight" value="8" onClick={handleNumberInput}>8</Button>
            </Grid>
            <Grid item key="9" xs={3}>
                <Button id="nine" value="9" onClick={handleNumberInput}>9</Button>
            </Grid>
            <Grid item key="-" xs={3}>
                <Button id="subtract" value="-" onClick={handleOperatorInput}>-</Button>
            </Grid>
            <Grid item key="4" xs={3}>
                <Button id="four" value="4" onClick={handleNumberInput}>4</Button>
            </Grid>
            <Grid item key="5" xs={3}>
                <Button id="five" value="5" onClick={handleNumberInput}>5</Button>
            </Grid>
            <Grid item key="6" xs={3}>
                <Button id="six" value="6" onClick={handleNumberInput}>6</Button>
            </Grid>
            <Grid item key="+" xs={3}>
                <Button id="add" value="+" onClick={handleOperatorInput}>+</Button>
            </Grid>
            <Grid item key="1" xs={3}>
                <Button id="one" value="1" onClick={handleNumberInput}>1</Button>
            </Grid>
            <Grid item key="2" xs={3}>
                <Button id="two" value="2" onClick={handleNumberInput}>2</Button>
            </Grid>
            <Grid item key="3" xs={3}>
                <Button id="three" value="3" onClick={handleNumberInput}>3</Button>
            </Grid>
            <Grid item key="." xs={3}>
                <Button id="decimal" onClick={handleDecimal}>.</Button>
            </Grid>
            <Grid item key="0" xs={6}>
                <Button id="zero" value="0" onClick={handleNumberInput}>0</Button>
            </Grid>
            <Grid item key="=" xs={6}>
                <Button id="equals" onClick={handleEquals}>=</Button>
            </Grid>
        </Grid>
    </div>
  );
};

export default Calculator;
