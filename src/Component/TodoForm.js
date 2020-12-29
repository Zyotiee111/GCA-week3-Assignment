import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Alert from '@material-ui/lab/Alert';

export default function Todo(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap",
            alignItems:"center",
            justifyContent:"center",
            marginTop:"20px",
            marginBottom:"20px"
          },
          text: {
              marginLeft: theme.spacing(16),
              width: 220
          },
          alert: {
            width: '30%',
            alignItems:"center",
            justifyContent:"center",
            margin:"auto",
            marginTop:theme.spacing(1)
          },
          btn:{
            marginLeft: theme.spacing(3)

          }
    
      }));
    const classes = useStyles();
    const[value, setValue] = useState(props.edit ? props.edit.value :'');
    const[date,setDate] = useState("")
    const[error, setError] = useState(false)

   

    const handleSubmit = (mouseCLick) =>{
        mouseCLick.preventDefault();
        if (value==="" && date===""){
            setError(true)
        }else{
        props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text:value,
            date: date
        })
        setError(false)
    }
       setValue('');
       setDate('');
      
    }


    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
                <TextField 
                className ={classes.text} 
                id="task" 
                label="What's your plan?" 
                value = {value} 
                onChange={(e) => setValue(e.target.value)}
               />

                <TextField 
                className ={classes.text} 
                id="task" 
                type ="date"
                value = {date} 
                onChange={(e) => setDate(e.target.value)}/>

                <Button 
                className ={classes.btn}
                variant="contained" 
                color="primary" 
                startIcon={<AddCircleIcon/>}
                type = "submit">
                Add todo</Button>
            </form>
            {error && 
            <Alert className={classes.alert} severity="error">Items can't be empty</Alert>}
        </div>
    )
}
