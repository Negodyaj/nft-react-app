import './NavigationLink.scss';
import React from 'react';

interface NavigationLinkProps {
  url: string;
  name: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <a href={props.url} className="nav-link">
      {props.name}
    </a>
  );
};
