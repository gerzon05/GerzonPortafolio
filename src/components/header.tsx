'use client'

import { Flex } from '@/styled-system/jsx'
import { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'
import Github from '../icons/github'
import ThemeSwitch from './theme-switch'

const headerStyles = css({
  maxWidth: '2xl',
  margin: '.8rem auto',
  position: 'sticky',
  padding: '.5rem 1rem',
  rounded: 'full',
  background: 'gray.100',
  height: '3rem',
  top: '3',
  _dark: { background: 'gray.950' },
})

const navBar = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#project', label: 'Project' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [hash, setHash] = useState('')

  useEffect(() => {
    setHash(window.location.hash)

    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <Flex justify="space-between" align="center" className={headerStyles}>
      <a href="https://github.com/gerzon05" target="_blank">
        <Github className={css({ fontSize: '2xl' })} />
      </a>
      <nav className={css({ display: 'flex', alignItems: 'center', gap: 3 })}>
        {navBar.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={css({
              position: 'relative',
              padding: '0.25rem 0.2rem',
              fontSize: 'sm',
              fontWeight: 'medium',
              transition: 'colors 0.3s',
              overflow: 'hidden',
              width: 'fit-content',
              color: hash === href ? '' : 'gray.500',
              '&::after': {
                content: '" "',
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '2px',
                background: 'gray.500',
                transform: 'translateX(-100%)',
                transition: 'transform 0.3s ease-out',
              },
              '&:hover::after': {
                transform: 'translateX(0)',
              },
            })}
          >
            {label}
          </a>
        ))}
      </nav>
      <ThemeSwitch />
    </Flex>
  )
}
