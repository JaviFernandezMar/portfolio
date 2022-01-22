import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import estilos from '../App.styles';

const Contact = ({tittle, id}) =>{
    const classStyles = estilos();
    return (
        <div className={classStyles.contact}>
            <div className={classStyles.contactContent} id={id}>
                <Typography variant="h3">{tittle}</Typography>
                <Paper className={classStyles.hojaContact}>
                    <Typography variant="h5">Contact me</Typography>
                    <form className={classStyles.formContact}>
                        <TextField label="Your name"/>
                        <TextField label="Your e-mail"/>
                        <TextField label="Matter"/>
                        <TextField label="Write a message" multiline rows={4}/>
                    </form>
                    <Button variant="contained" className={classStyles.botonContact} >Submit</Button>
                </Paper>
            </div>
        </div>
    )
}

export default Contact;