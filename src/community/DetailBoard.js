// src/DetailBoard.js
import React from 'react';
import { useParams } from 'react-router-dom';

const DetailBoard = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>게시글 상세 정보</h1>
      <p>게시글 ID: {id}</p>
    </div>
  );
};

export default DetailBoard;
