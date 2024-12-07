import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const buttonStyle = cva({
  base: {
    padding: '.25rem .5rem',
  },
  variants: {
    variant: {
      transparent: {
        bg: 'transparent',
      },
      primary: {
        bg: 'gray.100',
        color: 'black',
        _dark: { bg: 'gray.950', color: 'white' }
      },
      secondary: {
        bg: 'green.500'
      }
    },
    border: {
      none: {
        border: 'none'
      },
      primary: {
        border: '.0625rem solid',
        borderColor: 'gray.100',
        _dark: { borderColor: 'gray.950' }
      },
      secondary: {
        border: '.0625rem solid',
        borderColor: 'green.500',
      },
    },
    rounded: {
      none: {
        borderRadius: '0'
      },
      small: {
        borderRadius: '.25rem'
      },
      medium: {
        borderRadius: '.5rem'
      },
      large: {
        borderRadius: '.7rem'
      },
      full: {
        borderRadius: '9999rem'
      }
    },
    size: {
      small: {
        fontSize: '1rem',
      },
      medium: {
        fontSize: '1.5rem'
      },
      large: {
        fontSize: '2rem'
      }
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
    border: 'none',
    rounded: 'none'
  }
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>

export const Button = styled('button', buttonStyle)