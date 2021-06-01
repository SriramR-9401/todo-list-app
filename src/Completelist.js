import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./styles";
import Delete from "./reducers/Delete";
import Adding from "./reducers/Adding";
import RestorePageOutlinedIcon from "@material-ui/icons/RestorePageOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

function Completelist() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const data = useSelector((state) => state.Complete);
	return (
		<React.Fragment>
			<Card className={classes.pad}>
				<h4>Completed List:</h4>
				<ul style={{ listStyleType: "none", paddingLeft: 0 }}>
					{data.items.map((item, id) => (
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
							<RestorePageOutlinedIcon
								color="primary"
								className={classes.cursor}
								onClick={() => {
									dispatch(Adding(item));
									dispatch(Delete(item));
								}}
							></RestorePageOutlinedIcon>
							&nbsp;
							<HighlightOffIcon
								className={classes.red}
								onClick={() => {
									dispatch(Delete(item));
								}}
							></HighlightOffIcon>
						</li>
					))}
				</ul>
			</Card>
		</React.Fragment>
	);
}

export default Completelist;
