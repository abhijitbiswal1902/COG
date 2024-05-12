import React, { useState, useEffect } from 'react';

function Profile() {
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-header">
          <img src="profile_image.jpg" alt="Profile Picture" />
          <div className="profile-info">
            <h1>Abhijit B</h1>
            <p>PROGAMER</p>
            <p>abhijitb@gmail.com</p>
          </div>
        </div>
        <div className="profile-content">
          <h2>About</h2>
          <p>progamer.</p>
        </div>
      </div>
    </div>
  );
}

function Games() {
  return (
    <div className="games">
      <h3>GAMES</h3>
      <p>Valorant</p>
      <button onClick={() => window.location.href = "formvalo.html"}>Add/Display GC</button>
      <p>PUBG</p>
      <button onClick={() => window.location.href = "formpubg.html"}>Add/Display GC</button>
      <p>Call of Duty</p>
      <button onClick={() => window.location.href = "formcod.html"}>Add/Display GC</button>
    </div>
  );
}

// function Posts() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     fetchPosts();
//   }, []); // Fetch posts on initial render

//   function fetchPosts() {
//     fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
//       .then(response => response.json())
//       .then(newPosts => {
//         setPosts([...posts, ...newPosts]);
//         setPage(page + 1);
//       });
//   }

  // return (
  //   <div className="posts" onScroll={handleScroll}>
  //     <h3><center>Posts</center></h3>
  //         <img src="https://via.placeholder.com/150" alt="Post Image" />
  //         <p></p>
  //       </div>
  // )

function ProfilePage() {
  return (
    <>
      <Profile />
      <div className="container2">
        <Games />
        {/* <Posts /> */}
      </div>
    </>
  );
}

export default ProfilePage;
