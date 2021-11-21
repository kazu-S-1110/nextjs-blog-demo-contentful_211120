import React from 'react';
import Image from 'next/image';

export const Post = ({ date, image, title, body }) => {
  const { file, description } = image;
  return (
    <div className="post">
      {/* <Image src={`http:${file.url}`} alt={description} /> */}
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
