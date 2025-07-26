import Link from 'next/link'
import React from 'react'

const Button = ({ text, classNameModifier, action, href }: { text: string, classNameModifier?: string, action?: () => void, href?: string }) => {
  const buttonClass = `Button ${classNameModifier ? `Button--${classNameModifier}` : ''}`

  if (href) {
    return (
      <Link
        href={href}
        onClick={action}
        className={buttonClass}>
        {text}
      </Link>
    )
  }
  return (
    <button className={buttonClass} onClick={action}>{text}</button>
  )
}

export default Button