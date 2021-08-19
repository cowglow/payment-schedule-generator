import Typography from "@material-ui/core/Typography";
import { Link, makeStyles, ThemeOptions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(2, 3),
  },
}));

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        <Link
          href="https://github.com/cowglow/payment-schedule-generator"
          rel="noreferrer"
        >
          GitHub Repo
        </Link>
      </Typography>
    </footer>
  );
};
