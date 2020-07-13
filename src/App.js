import React from 'react';
import UserPost from './components/UserPost';

const App = () => {
  const post = {
    comments: [],
    username: 'mertturkmenoglu',
    userImage: 'https://github.com/mertturkmenoglu.png',
    date: new Date().toLocaleDateString(),
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Skyline-New-York-City.jpg',
    content: 'Post Description: Empire State Building. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in eleifend lectus, quis commodo nibh. Nunc id condimentum dolor. Praesent tempor rutrum elit pulvinar lobortis. Cras elementum ac nibh ut.',
    likeCount: 5,
    liked: true
  };

  return (
    <div >
      <UserPost post={post} />
    </div>
  );
}

export default App;
