import React from "react";
import estilos from '../App.styles';
import { Typography } from "@material-ui/core";

const MyWork = ({tittle, id}) =>{
    const classStyles = estilos();
    return (
        <div className={classStyles.work}>
            <div className={classStyles.workContent} id={id}>
                <Typography variant="h3">{tittle}</Typography>
            </div>
        </div>
    )
}

export default MyWork;