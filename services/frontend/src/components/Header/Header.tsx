import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Payment Schedule Generator</Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};
