import { cva } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

export const badge = cva({
  base: {
    display: 'inline-flex',
    padding: '6px 12px',
    fontSize: 'xs',
    fontWeight: 'semibold',
    textTransform: 'uppercase',
    alignItems: 'center',
  },

  variants: {
    animation: {
      pulse: {
        animationName: 'pulse',
      },
    },
    background: {
      none: {
        bg: 'transparent',
      },
      green: {
        bg: 'green.700',
      },
      neutral: {
        bg: 'neutral.200',
        _dark: {
          bg: 'neutral.950',
        },
      },
      gray: {
        bg: 'gray.100',
        _dark: {
          bg: 'gray.950',
        },
      },
    },
    bordered: {
      none: {
        border: 'none',
      },
      green: {
        color: 'green.100',
        border: 'solid',
        borderWidth: '1px',
        borderColor: '#7ED321',
        _dark: {
          color: 'green.500',
          borderColor: 'green.500',
        },
      },
    },
    radius: {
      none: {
        rounded: 'none',
      },
      sm: {
        rounded: 'sm',
      },
      md: {
        rounded: 'md',
      },
      lg: {
        rounded: 'lg',
      },
      full: {
        rounded: 'full',
      }
    },
  },

  defaultVariants: {
    background: 'none',
    radius: 'sm',
    bordered: 'none',
  },
})

export const Badge = panda('div', badge)
