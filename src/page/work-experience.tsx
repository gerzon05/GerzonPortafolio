'use cliente'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' };
import { css } from '@/styled-system/css';
import { Grid, panda } from '@/styled-system/jsx';
import CardExperience from '../components/ui/card-experience';

export default function WorkExperience() {
  const experiences = curriculumJSON.work
  return (
    <section id='experience' className={ css({ padding: "6" }) }>
      <div>
        <panda.h2 fontSize="xl"
          md={ { fontSize: '2xl' } }
          fontWeight='bold'
          textWrap="balance"
          margin="0"
        >
          Experiencia Laboral
        </panda.h2>
        <Grid columns={ { base: 1, md: 2 } } gap="6" mt="7">
          { experiences.map((exp, index) => (
            <div key={ index } className={ css({ animationTimingFunction: "in-out", animationDelay: `${index * 150}ms` }) }>
              <CardExperience { ...exp } />
            </div>
          )) }
        </Grid>
      </div>
    </section>
  )
}