import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  bg: {
    width: "100%",
    height: "initial",
  },
  main: {
    padding: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1.25rem 0",
    },
  },
  title: {
    padding: "0 0.75rem 0.5rem 0.5rem",
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    borderBottom: "1px solid black",
    fontSize: "1.375rem",
  },
  eventDate: {
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    borderBottom: "1px solid black",
    fontSize: "1.125rem",
    color: "#6D7278",
    paddingBottom: "4px",
    fontWeight: 400,
    marginTop: "2.5rem",
    marginBottom: "1rem",
  },
  eventLabel: {
    color: "#1EBDD3",
    textTransform: "uppercase",
    lineHeight: "1.25rem",
    fontSize: "1.125rem",
    fontWeight: 700,
    marginRight: "6px",
  },
  content: {
    paddingRight: "8rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "0",
    },
  },
  leftSpacing: {
    paddingLeft: "0.75rem",
  },
}));

export default useStyles;
