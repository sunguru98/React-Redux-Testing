import React from 'react';
import { Post } from '../redux/types/reducers';
export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  getPosts?: () => Promise<Post[] | undefined>;
  children: string | JSX.Element;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button data-test='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
