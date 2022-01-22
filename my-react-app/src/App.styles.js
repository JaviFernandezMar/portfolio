import {makeStyles, createTheme} from '@material-ui/core';


//Constante theme: me ayudará a la hora de personalizar los aspectos de diseño
const theme = createTheme();

export default makeStyles({
    navbar:{
        backgroundColor: '#ffffff',
        width:'auto',
        height:'40px',
        
    },
    menu:{
        [theme.breakpoints.down("sm")]:{
                display:"none",
        },
        "& a":{
            color:"#8A6C3F",
            fontSize:"1.4rem",
            fontWeight: "bold",
            marginLeft: theme.spacing(4),
        },
        "& a:hover":{
            cursor:"pointer",
            color:"#D6AC6D",
            borderTop:"3px solid #D6AC6D"
        }
    },
    menuLateral:{
        width:"40vw",
        flexDirection:"column",
        [theme.breakpoints.down("sm")]:{
            width:"60vw",
    },
        "& h5":{
            color:"#8A6C3F",
            fontSize:"1.4rem",
            fontWeight: "bold",
            marginTop: theme.spacing(4),
        },
        "& h5:focus":{
            cursor:"pointer",
            color:"#D6AC6D",
            borderLeft:"5px solid #D6AC6D",
        }
    },
    burgerMenu:{
        display:"none",
        [theme.breakpoints.down("sm")]:{
            display:"block",
            color:"#8A6C3F",
            position:"absolute",
            right:10
        }, 
    },
    imgNab:{
        height:'2rem',
        objectFit:'contain',
        "&:hover":{
            cursor:"pointer"
        },
    },
    about:{
        backgroundColor:"#383F8A",
        height:"100vh",
        width:"auto",
        color:"#ffffff"
    },
    aboutContent:{
        maxWidth:"80%",
        margin:"auto",
    },
    cardAbout:{
        [theme.breakpoints.down("xs")]:{
            maxWidth:"95%",
            height:"80vh"
        },
        position:"relative",
        marginTop: theme.spacing(4),
        display:"flex",
        maxWidth:"80%",
        margin:"auto",
        backgroundColor:"#fff",
        height:"60vh"
    },
    imagenAbout:{
        [theme.breakpoints.down("xs")]:{
            maxWidth:"95%",
            height:"78vh"
        },
        borderRadius:"5px",
        margin: theme.spacing(),
        height:"58vh",
        minWidth:"20vw",
        maxWidth:"20vw",
    },
    button:{
        position:"absolute",
        bottom:"2rem",
        right:"2rem",
        backgroundColor:"Tomato",
    
        "&:hover":{
            "& a":{
                color:"Tomato",
                fontSize:"bold",
            }
        },
        "& a":{
            textDecoration:"none",
            fontSize:"bold",
            color:"#ffffff"
        },
        "& a:hover":{
            textDecoration:"none",
            fontSize:"bold",
            color:"Tomato"
        },
    },
    skills:{
        [theme.breakpoints.down("sm")]:{
            margin:"auto",
            maxWidth:"95%",
            boxSizing:"border-box",
        },
        height:"100vh",
        width:"auto",
    },
    skillsContent:{
        [theme.breakpoints.down("sm")]:{
            maxWidth:"90%",
            boxSizing:"border-box",
        },
        maxWidth:"80%",
        margin:"auto",
    },
    listaSkills:{
        [theme.breakpoints.down("sm")]:{
            top:"20px",
        },
        marginTop:"30px",
        maxWidth:"100%",
        margin:"auto",

    },
    cardSkills:{
        [theme.breakpoints.down("sm")]:{
            boxSizing:"border-box",
            width:"160px",
            height:"90px",
            margin: theme.spacing(),
            "& div":{
                textAlign:"center",
                fontSize:"1rem"
            },
        },
        boxSizing:"border-box",
        position:"relative",
        margin: theme.spacing(),
        padding:theme.spacing(),
        width:"280px",
        height: "110px",
        border:"1px solid #8A8732",
        "& img":{
            [theme.breakpoints.down("sm")]:{
                display:"none",
            },
            position:"absolute",
            top:"1rem",
            right:"2rem",
            width:"80px",
            height:"80px"
        }
    },
    work:{
        backgroundColor:"#383F8A",
        height:"100vh",
        width:"auto",
        color:"#ffffff"
    },
    workContent:{
        maxWidth:"80%",
        margin:"auto",
    },
    contact:{
        height:"100vh",
        width:"auto"
    },
    contactContent:{
        maxWidth:"80%",
        margin:"auto",
        alignItems:"center"
    },
    hojaContact:{
        [theme.breakpoints.down("sm")]:{
            maxWidth:"80%", 
        },
        position:"relative",
        maxWidth:"50%",
        height:"50vh",
        margin:"auto",
        marginTop:"30px",
        padding: "20px",
        backgroundColor:"#D6AC6D",
        "& h5":{
            color:"#ffffff",
            fontWeight:"bold"
        }
    },
    
    formContact:{
        marginTop:theme.spacing(),
        padding:"10px",
        display:"flex",
        flexDirection:"column",
        "& label":{
            color:"#ffffff"
        }
    },
    botonContact:{
        [theme.breakpoints.down("sm")]:{
            maxWidth:"87%", 
        },
        backgroundColor:"#ffffff",
        color: "#8A6C3F",
        position:"absolute",
        bottom: theme.spacing(3),
        fontWeight: 900,
        fontSize: "1.2rem",
        width:"93%",
        "&:hover":{
            backgroundColor:"#ffffff",
            color:"#383F8A"
        }
    }
})

/*
Paleta de colores
azul: #383F8A
marron clarito: #D6AC6D
marron: #8A6C3F
verde/amarillo: #EDE713 
verde oliva: #8A8732
*/