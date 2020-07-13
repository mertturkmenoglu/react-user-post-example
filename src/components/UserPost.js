import React from 'react'
import { useState } from 'react';
import { Avatar, CardActions, Container } from '@material-ui/core';
import { CardMedia, Card, CardContent } from '@material-ui/core';
import { Typography, CardHeader, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentsIcon from '@material-ui/icons/Message';
import { makeStyles } from '@material-ui/core/styles';
import NewCommentDialog from './NewCommentDialog';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 512,
	},
	media: {
		height: 0,
		paddingTop: '100%'
	}
}));

const UserPost = (props) => {
	const { post } = props;
	const classes = useStyles();

	const [liked, setLiked] = useState(post.liked);
	const [favCount, setFavCount] = useState(post.likeCount);
	const [comments, setComments] = useState(post.comments);
	const [commentDialogStatus, setCommentDialogStatus] = useState(false);

	const favClickHandler = e => {
		if (liked) {
			setFavCount(favCount - 1);
		} else {
			setFavCount(favCount + 1);
		}

		setLiked(!liked);
	}

	const commentsClickHandler = e => {
		console.log('Comments clicked');
		setCommentDialogStatus(true);
	}

	const dialogCloseCallback = () => {
		setCommentDialogStatus(false);
	}

	const newCommentCallback = (comment) => {
		setComments([...comments, comment]);
		setCommentDialogStatus(false);
	}

	return (
		<Container component="main" style={{ display: 'flex', justifyContent: 'center' }}>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar aria-label="user" src={post.userImage} />
					}
					action={
						<IconButton aria-label="post-settings">
							<MoreVertIcon />
						</IconButton>
					}
					title={post.username}
					subheader={post.date}
				/>
				<CardMedia
					className={classes.media}
					image={post.imageUrl}
					title="Post"
				/>
				<CardActions>
					<IconButton aria-label="Favorites" onClick={favClickHandler} >
						{
							liked ? <FavoriteIcon style={{ color: "#DD2C00" }} /> : <FavoriteIcon />
						}
						<Typography variant="body2" color="textSecondary" component="p">
							{`${favCount} Favorites`}
						</Typography>
					</IconButton>
					<IconButton aria-label="Comment" onClick={commentsClickHandler}>
						<CommentsIcon />
						<Typography variant="body2" color="textSecondary" component="p">
							{`${comments.length} Comments`}
						</Typography>
					</IconButton>
				</CardActions>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						{post.content}
					</Typography>
				</CardContent>
			</Card >
			<NewCommentDialog
				commentCallback={newCommentCallback}
				closeCallback={dialogCloseCallback}
				openStatus={commentDialogStatus}
			/>
		</Container>
	);
}

export default UserPost
