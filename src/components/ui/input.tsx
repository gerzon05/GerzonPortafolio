import { cva, type RecipeVariantProps } from '@/styled-system/css'
import { panda } from '@/styled-system/jsx'

const inputStyle = cva({
  base: {
    padding: '.25rem .5rem',
    width: 'full',
  },
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
      }
    },
    border: {
      none: {
        border: 'none',
      },
      primary: {
        border: '.0625rem solid',
        borderColor: 'gray.100',
        _focusVisible: { outline: 'none', border: "2px solid", borderColor: 'gray.100' },
        _dark: { borderColor: 'gray.950', _focusVisible: { outline: 'none', border: "2px solid", borderColor: 'gray.950' }, }
      },
      secondary: {
        border: '.0625rem solid',
        borderColor: 'green.500',
        _focusVisible: { outline: 'none', border: "2px solid", borderColor: 'green.500' }
      }
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
        fontSize: '1.5rem',
      },
      large: {
        fontSize: '2rem',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'small',
    border: 'primary',
    rounded: 'small',
  },
})

export type InputVariants = RecipeVariantProps<typeof inputStyle>

export const Input = panda('input', inputStyle)