import Location from '@/src/icons/location'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { css } from '@/styled-system/css'
import { Box, Flex, panda } from '@/styled-system/jsx'
import { Badge } from '../components/recipes/badge'
import { Paragraph } from '../components/recipes/paragraph'

export default function Presentation() {
  const { name, label, summary, online, country, city } = curriculumJSON.basics
  return (
    <Flex
      id="home"
      flexDirection="column"
      lg={{ flexDirection: 'row' }}
      gap="20"
      py="10"
    >
      <Box
        display="flex"
        lg={{ width: 'fit-content' }}
        justifyContent="center"
        alignItems="center"
      >
        <picture>
          <source srcSet="/gerzonfoto.webp" type="image/webp" />
          <source srcSet="/gerzonfoto.avif" type="image/jpeg" />
          <img
            src="/gerzonfoto.jpg"
            alt="placeholder"
            className={css({
              borderRadius: '20px',
              width: '300px',
              md: { width: '400px' },
            })}
            width={400}
            height={400}
          />
        </picture>
      </Box>
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Box width="full">
          <Badge bordered="green" animation="pulse" radius="md">
            {online}
          </Badge>
          <panda.h2
            fontSize="4xl"
            md={{ fontSize: '5xl' }}
            fontWeight="bold"
            textWrap="balance"
            letterSpacing="4"
            margin="0"
          >
            {name}
          </panda.h2>
          <Paragraph weight="md" size="lg" fontStyle="italic" letterSpacing="2">
            {label}
          </Paragraph>
          <Badge
            animation="pulse"
            display="flex"
            gap="3"
            alignItems="center"
            marginTop="4"
            marginBottom="4"
            radius="md"
          >
            <Location
              className={css({ fontSize: '25px', color: 'blue.100' })}
            />{' '}
            {country} - {city}
          </Badge>
          <Paragraph color="neutral.500">{summary}</Paragraph>
        </Box>
      </Box>
    </Flex>
  )
}
