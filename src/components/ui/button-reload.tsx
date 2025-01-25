'use client'
import { ArrowUp } from '@/src/icons/arrow-up'
import { css } from '@/styled-system/css'
import { Button } from './button'

export default function ButtonReload() {
  const handleReload = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <Button
      dimension="icon"
      rounded="full"
      className={css({
        position: 'fixed',
        bottom: '5',
        right: '5',
        zIndex: '50',
      })}
      onClick={handleReload}
    >
      <ArrowUp
        className={css({ width: '6', height: '6', animation: 'pulse' })}
      />
    </Button>
  )
}
