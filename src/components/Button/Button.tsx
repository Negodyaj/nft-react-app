import React from 'react';

interface ButtonProps {
  label?: string;
  showLabel: boolean;
}

export const Button = (props: ButtonProps) => {
  return props.showLabel && !props.label ? <></> : <button>{props.label}</button>;
};
