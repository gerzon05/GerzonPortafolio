import { Flex } from '@/styled-system/jsx';
import { css } from '../../styled-system/css';
import ThemeSwitch from './theme-switch';

const headerStyles = css({ maxWidth: "2xl", margin: ".8rem auto", position: "sticky", padding: ".5rem 1rem", rounded: "full", background: "gray.100", height: "3rem", _dark: { background: "gray.950" } });

export default function Header() {
  return (
    <Flex justify="space-between" align="center" className={ headerStyles }>
      <h1>My App</h1>
      <ThemeSwitch />
    </Flex>
  )
}