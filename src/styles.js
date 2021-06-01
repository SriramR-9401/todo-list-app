import { green } from "@material-ui/core/colors";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
const useStyles = makeStyles({
	margin: {
		marginTop: "70px",
		background: "lightblue",
		textAlign: "center",
		padding: "20px",
	},
	card: {
		width: "500px",
		padding: "30px",
	},
	typograph: {
		alignItems: "center",
	},
	pad: {
		paddingLeft: "15px",
		paddingRight: "15px",
	},
	red: {
		color: "red",
		cursor: "pointer",
	},
	toppad: {
		marginTop: "10px",
	},
	cursor: {
		cursor: "pointer",
	},
});
const theme = createMuiTheme({
	palette: {
		secondary: {
			main: green[400],
		},
	},
});
export { useStyles, theme };
