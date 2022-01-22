import { Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import estilos from '../App.styles';
import TipeWriterEffect from 'react-typewriter-effect';
import { CardActions } from "@mui/material";
import pdf from '../images/Curriculum_vitae-DAW.pdf';


const About = ({tittle, id}) =>{
    const classStyles = estilos();
    return (
        <div className={classStyles.about}>
            <div className={classStyles.aboutContent} id={id}>
                <Typography variant="h3">{tittle}</Typography>
                <Card className={classStyles.cardAbout}>
                    <CardMedia image={require('../images/foto_cv.jpg')} className={classStyles.imagenAbout} tittle="picture"/>
                    <CardContent className={classStyles.cardContentAbout}>
                        <TipeWriterEffect 
                        text="Hola, mi nombre es Javier Fernández. ¡Encantado!"
                        textStyle={{fontSize:"2rem", fontWeight:"800px", color:"#8A6C3F"}}
                        startDelay={100}
                        typeSpeed={100}
                        cursorColor="black"
                        />
                        <br/>
                        <TipeWriterEffect
                        text="Soy titulado en Desarrollo de Aplicaciones Web y aquí podrás conocer un poco más sobre mi. No te olvides de pulsar el botón ;-)"
                        textStyle={{fontSize:"1.2rem", fontWeight:"500px", color:"black"}}
                        startDelay={5500}
                        typeSpeed={50}
                        cursorColor="black"
                        />
                    </CardContent>
                    <CardActions>
                        <Button className={classStyles.button}>
                            <a href={pdf} download>
                            Descarga el CV</a>
                            </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default About;