import Link from 'next/link';
import React from 'react';

const Button = ({
  text,
  classNameModifier,
  action,
  href,
  icon,
}: {
  text: string;
  classNameModifier?: string;
  action?: () => void;
  href?: string;
  icon?: React.JSX.Element;
}) => {
  const buttonClass = `Button ${
    classNameModifier ? `Button--${classNameModifier}` : ''
  }`;

  if (href) {
    return (
      <Link href={href} onClick={action} className={buttonClass}>
        {text}
        {icon}
      </Link>
    );
  }
  return (
    <button className={buttonClass} onClick={action}>
      {text} {icon}
    </button>
  );
};

export default Button;
