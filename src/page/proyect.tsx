import { css } from '@/styled-system/css';
import { Flex, Grid, GridItem, panda } from '@/styled-system/jsx';
import { Badge } from '../components/recipes/badge';
import { Paragraph } from '../components/recipes/paragraph';
import Github from '../icons/github';
import Nextjs from '../icons/next';
import React from '../icons/react';
import Tailwindcss from '../icons/tailwind';
import Typescript from '../icons/typescript';
import curriculumJSON from '../static/curriculum.json' with { type: 'json' };

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Tailwindcss,
  React,
  Typescript,
  Nextjs
};

export default function Proyect() {
  const projects = curriculumJSON.projects
  return (
    <section id='project' className={ css({ padding: "5" }) }>
      <div>
        <panda.h2 fontSize="xl"
          md={ { fontSize: '2xl' } }
          fontWeight='bold'
          textWrap="balance"
          margin="0"
        >
          Proyectos
        </panda.h2>
        <Grid columns={ { base: 1, md: 8 } } gap="6" mt="7">
          {
            projects.map((project, index) => (
              <GridItem key={ index } colSpan={ { md: project.colSpan ? 5 : 3 } } className={ css({ border: "1px solid", borderColor: "gray/20", padding: "4", borderRadius: "lg" }) }>
                <Flex justifyContent="space-between" alignItems="center">
                  <panda.h3 fontSize="2xl" fontWeight="bold" margin="0" >{ project.name }</panda.h3>
                  <a href={ project.url } target='bank'><Github className={ css({ fontSize: "3xl" }) } /></a>
                </Flex>
                <Paragraph className={ css({ color: "gray.500" }) }>
                  { project.description }
                </Paragraph>
                <Flex gap="2" mt="4" wrap="wrap">
                  {
                    project.techs.map((value, index) => {
                      const Icon = iconMap[value.icon as keyof typeof iconMap];
                      return (
                        <Badge key={ index } className={ css({ color: "gray.900", _dark: { color: "gray.300" } }) } background="gray" radius='md'>
                          { Icon && <Icon className={ css({ marginRight: 2, color: Icon == React ? "black" : "", _dark: { color: Icon == React ? "#61DAFB" : "" } }) } /> } { value.tech }
                        </Badge>
                      )
                    })
                  }
                </Flex>
              </GridItem>
            ))
          }
        </Grid>
      </div >
    </section >
  )
}