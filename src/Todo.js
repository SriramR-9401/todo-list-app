import React from "react";
import Typograph from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextFields from "@material-ui/core/TextField";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Adding from "./reducers/Adding";
import Import from "./reducers/import";
import Completelist from "./Completelist";
import { useStyles, theme } from "./styles";
import remove from "./reducers/remove";
import Grid from "@material-ui/core/Grid";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function Todo() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.Todo);
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<Container className={classes.margin} fixed max-width="sm">
					<Appbar className={classes.typograph}>
						<Toolbar>
							<Typograph variant="h6">ToDo List Application</Typograph>
						</Toolbar>
					</Appbar>
					<TextFields
						label="Todo-list"
						variant="outlined"
						className={classes.text}
						type="text"
						placeholder="Enter Todolist Item"
						id="input"
					/>
					<br />
					<Button
						variant="contained"
						color="secondary"
						className={classes.toppad}
						onClick={() => {
							dispatch(Adding(document.getElementById("input").value));
							document.getElementById("input").value = "";
						}}
					>
						Add
					</Button>
					<Grid container spacing={7} className={classes.card} justify="center">
						<Grid item>
							<Card className={classes.pad}>
								<h4>Todo-List Items:</h4>
								<ul style={{ listStyleType: "none", paddingLeft: 0 }}>
									{data.todoItem.map((item, id) => (
										<li
											key={id}
											style={{
												display: "flex",
												flexDirection: "row",
												alignItems: "center",
												paddingLeft: "3px",
												paddingBottom: "7px",
											}}
										>
											{item}
											&nbsp;
											<CheckCircleOutlineOutlinedIcon
												onClick={() => {
													dispatch(Import(item));
													dispatch(remove(item));
												}}
												className={classes.cursor}
												color="secondary"
												variant="outlined"
											></CheckCircleOutlineOutlinedIcon>
										</li>
									))}
								</ul>
							</Card>
						</Grid>
						<Grid item>
							<Completelist />
						</Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default Todo;
