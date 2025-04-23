import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  // article start
  aTitle: {
    lineHeight: "1.25rem",
    fontStyle: "italic",
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "1.125rem",
    paddingLeft: "0.75rem",
    borderLeft: "2px solid #1EBDD3",
    marginBottom: "1.125rem",
    cursor: "pointer",
  },
  aContent: {
    lineHeight: "1.125rem",
    fontSize: "1rem",
    paddingLeft: "0.75rem",
    marginBottom: "0.5rem",
  },
  // article end

  // event start
  eventWrapper: {
    marginBottom: "16px",
    paddingLeft: "0.75rem",
  },
  eventName: {
    lineHeight: "1.5rem",
    textTransform: "uppercase",
    fontSize: "1.125rem",
    fontWeight: 700,
    fontStyle: "italic",
  },
  eventExtraInfo: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  eventInfo: {
    display: "flex",
    alignItems: "center",
  },
  eventTime: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#CFCFCF",
    marginRight: "0.75rem",
    paddingRight: "0.75rem",
    borderRight: "1px solid #CFCFCF",
  },
  eventVenue: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#CFCFCF",
  },
  eventVenueLink: {
    lineHeight: "1.25rem",
    textTransform: "uppercase",
    fontSize: "0.875rem",
    color: "#CFCFCF",
    cursor: "pointer",
    textDecorationLine: "none",
  },
  eventMoreInfo: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  eventMoreInfoText: {
    lineHeight: "1.25rem",
    fontSize: "0.875rem",
    color: "#ffffff",
    "&:hover": {
      textDecorationLine: "underline",
      color: "#1EBDD3",
    },
  },
  eventRow: {
    marginTop: "6px",
    display: "flex",
    alignItems: "center",
  },
  eventPrice: {
    marginLeft: "16px",
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  eventOptionalIcon: {
    height: "36px",
    width: "36px",
    backgroundColor: "#333",
    borderRadius: "50%",
    display: "inline-block",
    textAlign: "center",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "36px",
    fontWeight: 600,
    position: "absolute",
    top: "2px",
    left: "-18px",
  },
  eventOptional: {
    marginTop: "0.75rem",
    backgroundColor: "#FFFFFF",
    color: "black",
    border: "1px solid #fff",
    borderRadius: "2px",
    padding: "0.5rem 1rem 0.5rem 1.5rem",
    position: "relative",
    minHeight: "26px",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontStyle: "italic",
  },
  // event end

  // gig item start
  giWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
  },
  giTime: {
    position: "sticky",
    top: "1.25rem",
    textTransform: "uppercase",
    paddingRight: "2.125rem",
    paddingLeft: "1.125rem",
    [theme.breakpoints.down("sm")]: {
      paddingRight: "1.125rem",
      paddingLeft: "1.125rem",
    },
  },
  giDay: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    fontWeight: 600,
    color: "#1EBDD3",
  },
  giDate: {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    fontWeight: 600,
    color: "#ffffff",
  },
  // gig item end

  // scroll top button start
  stbWrapper: {
    position: "fixed",
    bottom: "18px",
    right: "25px",
    padding: "0.5rem",
    borderRadius: "12px",
    backgroundColor: "#1EBDD3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  // scroll top button end

  // more info modal start
  mimButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    borderRadius: "6px",
    padding: "8px 0",
    cursor: "pointer",
    color: "#fff",
    fontWeight: 500,
    textDecorationLine: "none",
    backgroundColor: "#339AF0",
  },
  mimFacebook: {
    width: "30px",
    marginRight: "4px",
  },
  // more info modal end
}));

export default useStyles;
