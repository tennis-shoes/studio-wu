import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  card: {
    margin: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [content, setContent] = useState('Home');

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['About', 'CV'].map((text, index) => (
          <ListItem button key={text} onClick={() => setContent(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const aboutContent = (
    <div>
      <h1>About Sandy Wu</h1>
      <p>Sandy Wu is a seasoned market research professional with over 10 years of experience in the field. She has a proven track record of delivering insightful and actionable market research for a wide range of industries. Sandy is known for her meticulous attention to detail, her ability to understand complex market dynamics, and her knack for presenting data in a clear and compelling way.</p>
    </div>
  );

  const cvContent = (
    <div>
      <h1>CV</h1>
      {['Project 1', 'Project 2'].map((project, index) => (
        <Card className={classes.card} key={index}>
          <CardHeader title={project} />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Detailed description of {project}...
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Sandy Wu
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
      <div>
        {content === 'About' && aboutContent}
        {content === 'CV' && cvContent}
      </div>
    </div>
  );
}

export default App;

