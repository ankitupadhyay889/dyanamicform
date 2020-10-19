import React,{useState} from "react";
import "./styles/App.css";
import { Container, Paper, Box, Grid, TextField, IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  in: {
    marginBottom: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  const userTemplate = {name:"" , mail:"" , phone:"" , location:""};
  const [users , setUsers] = useState([userTemplate]);

  const addUser = () => {
    setUsers([...users,userTemplate])
  };

  const onChange = (e,index) => {
    const upadateUser = users.map((user,i) => index === i ? Object.assign(user , {[e.target.name] : e.target.value}): user)
    setUsers(upadateUser);
  };

  const removeUser = (index) => {
    const filteredUsers = [...users];
    filteredUsers.splice(index,1);
    setUsers(filteredUsers);
  };

  return (
    <Container className={classes.root}>
      <Paper component={Box} p={4}>
        {
          users.map((user, index) => (
            <Grid container spacing={3} key={index} className={classes.in}>
            <Grid item md={3}>
              <TextField label="Name" placeholder="Enter Your Name" name="name" value={user.name} variant="outlined" onChange={e => onChange(e,index)} fullWidth />
            </Grid>
  
            <Grid item md={3}>
              <TextField label="Mail" placeholder="Enter Your Mail" name="mail" value={user.mail} variant="outlined" onChange={e => onChange(e,index)} fullWidth />
            </Grid>
  
            <Grid item md={2}>
              <TextField label="Phone" placeholder="Enter Your Phone" name="phone" value={user.phone} variant="outlined" onChange={e => onChange(e,index)} fullWidth />
            </Grid>
  
            <Grid item md={3}>
              <TextField label="Location" placeholder="Enter Your Location" name="location" value={user.location} variant="outlined" onChange={e => onChange(e,index)} fullWidth />
            </Grid>
  
            <Grid item md={1}>
              <IconButton color="secondary" onClick={() => removeUser(index)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Grid>
          </Grid>
          ))
        }
        <Button variant="contained" color="primary" onClick={addUser}>Add More</Button>
      </Paper>
    </Container>
  );
}

export default App;
