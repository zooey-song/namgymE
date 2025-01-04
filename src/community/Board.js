// src/Board.js
import React, { useState, useEffect } from 'react';
import './Board.css';

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = () => {
      const newPosts = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        title: `게시글 ${index + 1}`,
        content: `이것은 게시글 ${index + 1}의 내용입니다.`
      }));
      setPosts(newPosts);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="board-container">
      <div className="header">게시판</div>
      {currentPosts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
            <a onClick={() => paginate(number)} href="#!" className='page-link'>
                {number}
            </a>
        ))}
      </ul>
    </nav>
  );
};

export default Board;
