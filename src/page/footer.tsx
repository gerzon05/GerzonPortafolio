import { Paragraph } from '@/src/components/recipes/paragraph'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { Box, Container, Flex, panda, Stack } from '@/styled-system/jsx'

export default function Footer() {
  const { name, label, email } = curriculumJSON.basics
  return (
    <Container mt="8">
      <panda.footer>
        <Stack py="8" mx="auto">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            md={ { flexDirection: 'row' } }
          >
            <Box mb="4" md={ { mb: '0' } }>
              <panda.h2 fontSize="xl" fontWeight="semibold">
                { name }
              </panda.h2>
              <panda.p fontSize="xs" textAlign="center" md={ { textAlign: "start" } }>{ label }</panda.p>
            </Box>
            <Paragraph textAlign="center">
              © { new Date().getFullYear() } { name }. All rights reserved.
            </Paragraph>
          </Flex>
        </Stack>
      </panda.footer>
    </Container>
  )
}