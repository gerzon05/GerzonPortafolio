import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

const buttonStyle = cva({
  variants: {
    variant: {
      transparent: {
        bg: 'transparent',
      },
      primary: {
        bg: 'gray.100',
        color: 'black',
        _dark: { bg: 'gray.950', color: 'white' },
      },
      secondary: {
        bg: 'green.500',
      },
    },
    border: {
      none: {
        border: 'none',
      },
      primary: {
        border: '.1rem solid',
        borderColor: 'gray.100',
        _dark: { borderColor: 'gray.950' },
      },
      secondary: {
        border: '.1rem solid',
        borderColor: 'green.500',
      },
      neutro: {
        border: '.1rem solid',
        borderColor: 'gray.100',
        _dark: { borderColor: 'gray.600' },
      },
    },
    rounded: {
      none: {
        borderRadius: '0',
      },
      small: {
        borderRadius: '.25rem',
      },
      medium: {
        borderRadius: '.5rem',
      },
      large: {
        borderRadius: '.7rem',
      },
      full: {
        borderRadius: '9999rem',
      },
    },
    size: {
      small: {
        fontSize: '1rem',
      },
      medium: {
        fontSize: '1.2rem',
      },
      large: {
        fontSize: '1.7rem',
      },
    },
    dimension: {
      small: {
        padding: '.25rem .5rem',
      },
      medium: {
        padding: '.5rem 1rem',
      },
      large: {
        padding: '1rem 2rem',
      },
      icon: {
        padding: '.5rem',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
    border: 'none',
    rounded: 'none',
    dimension: 'small',
  },
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>

export const Button = panda('button', buttonStyle)
