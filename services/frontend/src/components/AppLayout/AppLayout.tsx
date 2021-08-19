import { Header } from "../Header/Header";
import { makeStyles } from "@material-ui/core";
import { Footer } from "../Footer/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    minHeight: "calc(84vh)",
  },
  content: {},
}));
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <div className={classes.content}>{children}</div>
      </main>
      <Footer />
    </>
  );
};
