import React from "react";
import estilos from '../App.styles';
import { Card, CardContent,  CardMedia, Typography } from "@material-ui/core";
import java from '../images/java.png';
import html from '../images/html.png';
import css from '../images/css.png';
import javascript from '../images/javascript.png';
import nodeJs from '../images/node.png';
import php from '../images/php.png';
import spring from '../images/Spring.png';
import synfony from '../images/symfony.png';
import python from '../images/python.png';
import angular from '../images/Angular.png';
import bootstrap from '../images/Bootstrap.png';
import sql from '../images/Sql.png';
import react from '../images/react.png';
import { Grid, Rating } from "@mui/material";

const skills = [
    {
        nombre:"Html 5",
        habilidad: 4,
        imagen: html
    },
    {
        nombre:"Css 3",
        habilidad: 4,
        imagen: css
    },
    {
        nombre:"Java",
        habilidad:3,
        imagen: java
    },
    {
        nombre:"JavaScript",
        habilidad: 4,
        imagen: javascript
    },
    {
        nombre:"Node Js",
        habilidad: 3,
        imagen: nodeJs
    },
    {
        nombre:"Php",
        habilidad: 4,
        imagen: php
    },
    {
        nombre:"Spring MVC",
        habilidad:2,
        imagen: spring
    },
    {
        nombre:"Symfony",
        habilidad:3.5,
        imagen: synfony
    },
    {
        nombre:"Python",
        habilidad: 2.5,
        imagen: python
    },
    {
        nombre:"Angular",
        habilidad: 3.5,
        imagen: angular
    },
    {
        nombre:"Bootstrap",
        habilidad: 2.5,
        imagen: bootstrap
    },
    {
        nombre:"SQL",
        habilidad:3.5,
        imagen: sql
    },
    {
        nombre:"React",
        habilidad:2.5,
        imagen: react
    }
];

const Skills = ({tittle, id}) =>{
    const classStyles = estilos();
    return (
        <div className={classStyles.skills}>
            <div className={classStyles.skillsContent} id={id}>
                <Typography variant="h3">{tittle}</Typography>
                <Grid container className={classStyles.listaSkills} >
                    {
                        skills.map(({ nombre, habilidad, imagen }, index) => (
                            <Grid item key={index} xs={6} sm={4} md={3}>
                                <Card key={index} className={classStyles.cardSkills} >
                                    <CardContent>
                                        <Typography component="div" variant="h5">
                                            {nombre}
                                        </Typography>
                                    </CardContent>
                                    <CardMedia component="img" image={imagen} tittle="picture" object-fit="true"/>
                                    <div >
                                        <Rating name="read-only" value={habilidad} precision={0.5} readOnly />
                                    </div>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}

export default Skills;