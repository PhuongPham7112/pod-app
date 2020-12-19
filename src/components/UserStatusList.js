import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const GenerateListItem = (props) =>{
    return(
        <div>
            <ListItem alignItems="flex-start">
            <Grid container display="flex" spacing={3} alignItems="center" style={{width: "100%"}}>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Avatar> {props.initials} </Avatar>
                </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <ListItemText> <Typography variant="h6" ><b style={{color:"#ffba9d"}}>{props.userName} </b></Typography></ListItemText>
                    <ListItemText> In <i>{props.communityName}</i> -- {props.status} </ListItemText>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button style={{backgroundColor: "#ffba9d"}}> Talk </Button>
                </Grid>
            </Grid>
            </ListItem>
            <Divider />
        </div>
    )
}

const UserStatus = () => {
    const data = [
      { initials: "AA", communityName: "Animals", userName: "AlexArmani", status: "I would love to talk about unicorns" },
      { initials: "BB", communityName: "Boy Bands", userName: "BradBates", status: "Big Time Rush is the GOAT"},
      { initials: "CC", communityName: "Comics", userName: "ChristianChang", status: "Iron Man is actually a villain in the comics!"},
      { initials: "DD", communityName: "Dungeons and Dragons", userName: "DanielleDaniels", status: "I won against @AlexArmani!"}
    ];
  
    return (
      <div className="users">
        {data.map((user) => (
          <GenerateListItem initials = {user.initials}
          userName={user.userName}
          communityName={user.communityName}
          status={user.status} />
        ))}
      </div>
    );
  };


function UserStatusList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12} md={6} lg={12}>
          <div>
            <List>
              <UserStatus />
            </List>
          </div>
        </Grid>
    </div>
  );
}

export default UserStatusList;