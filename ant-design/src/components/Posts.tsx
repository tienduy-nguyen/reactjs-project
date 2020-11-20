import React, { ReactElement } from 'react';

interface IPosts {
  posts: PostType[];
}
type PostType = {
  id: string;
  title: string;
};

const _Posts = (props: IPosts): ReactElement => {
  return (
    <ul className="list-group mb-4">
      {props.posts.map(post => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

const Posts = React.memo(_Posts);
export { Posts };
