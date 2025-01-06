// src/DetailBoard.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './DetailBoard.css';  // 상세 페이지 전용 CSS

const DetailBoard = () => {
  const { id } = useParams();
  const post = {
    id,
    title: `게시글 ${id}`,
    content: `이것은 게시글 ${id}의 상세 내용입니다. 자세한 정보가 표시됩니다.`,
    nickname: `사용자${id}`
  };

  return (
    <div className="detail-container">
      <div className="detail-header">
        <h1>{post.title}</h1>
        <h4>작성자: {post.nickname}</h4>
      </div>
      <p className="detail-content">{post.content}</p>
      <Link to="/Board" className="back-link">게시글 목록으로 돌아가기</Link>
    </div>
  );
};

export default DetailBoard;
