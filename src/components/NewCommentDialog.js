import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core';
import { TextField, DialogActions, Button } from '@material-ui/core';

const NewCommentDialog = (props) => {
	const { commentCallback, closeCallback, openStatus } = props;
	const [comment, setComment] = useState('');

	const commentSubmit = () => {
		const value = comment.trim();

		if (value.length === 0) return;

		commentCallback(value);
		setComment('');
	}

	return (
		<Dialog open={openStatus} onClose={closeCallback} fullWidth={true}>
			<DialogTitle id="form-dialog-title">New Comment</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Please enter your comment:
        </DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="comment"
					label="Comment"
					type="text"
					fullWidth
					required
					value={comment}
					onChange={e => setComment(e.target.value)}
					variant="outlined"
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeCallback} color="primary">
					Cancel
        </Button>
				<Button onClick={commentSubmit} color="primary">
					Add comment
        </Button>
			</DialogActions>
		</Dialog>
	)
}

export default NewCommentDialog
