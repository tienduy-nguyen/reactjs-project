import React from 'react';
export const Pagination = (props: {
  postsPerPage: number;
  totalPosts: number;
  paginate: (num: number) => void;
}) => {
  const pageNumbers = [] as number[];
  const { postsPerPage, totalPosts, paginate } = props;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    number,
  ) => {
    e.preventDefault();
    paginate(number);
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              onClick={e => onClick(e, number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
