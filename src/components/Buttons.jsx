import React from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import "../index.css";





export default function Buttons({ onNumberClick, onOperationClick, onCleanScreen, onResultClick }) {

        return (
            <Grid.Column className="grid-css"  >
          {[1, 2, 3].map((number => <Button className="number-blue" onClick={onNumberClick} content={number}  style={{marginTop:"5px"}} color="facebook"/>))}
          {[4, 5, 6].map((number => <Button className="number-blue" onClick={onNumberClick} content={number} style={{marginTop:"5px"}} color="facebook" />))}
          {[7, 8, 9].map((number => <Button className="number-blue" onClick={onNumberClick} content={number} style={{marginTop:"5px"}} color="facebook" />))}
          {["-"].map((number => <Button className="number-blue" onClick={onOperationClick} content={number} style={{marginTop:"5px"}} color= "yellow"/>))}
          {[0].map((number => <Button className="number-blue" onClick={onNumberClick} content={number} style={{marginTop:"5px"}} color="facebook" />))}
          {["+"].map((number => <Button className="number-blue" onClick={onOperationClick} content={number}  style={{marginTop:"5px"}} color="green" />))}
          {["/"].map((number => <Button className="number-blue" onClick={onOperationClick} content={number} style={{marginTop:"5px"}} color="green" />))}
          {["*"].map((number => <Button className="number-blue" onClick={onOperationClick} content={number}  style={{marginTop:"5px"}} color="green" />))}  
          {["="].map((number => <Button className="number-blue" onClick={onResultClick} content={number}  style={{marginTop:"5px"}} color="violet" />))}
          {["Borrar"].map((number => <Button className="item-clean" onClick={onCleanScreen} content={number}  style={{marginTop:"5px"}} color="red" />))}
          </Grid.Column>
          
      
         

        );
}

