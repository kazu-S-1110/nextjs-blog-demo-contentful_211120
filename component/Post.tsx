import React from 'react';
import Image from 'next/image';

export const Post = ({ date, image, title, body }) => {
  return (
    <div className="post">
      <Image
        src={`http:${image.file.url}`}
        alt="image"
        width="590"
        height="490"
      />
      <div className="text">
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
