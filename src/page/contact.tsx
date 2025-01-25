'use client'
import curriculumJSON from '@/src/static/curriculum.json' with { type: 'json' }
import { css } from '@/styled-system/css'
import { Box, Flex, panda } from '@/styled-system/jsx'
import emailjs from '@emailjs/browser'
import { FormEvent, useRef } from 'react'
import { toast } from 'sonner'
import { Paragraph } from '../components/recipes/paragraph'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import FileText from '../icons/file'
import Github from '../icons/github'
import Linkedin from '../icons/linkedin'
import Whatsapp from '../icons/whatsapp'

const iconMap: {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>
} = {
  Github,
  Whatsapp,
  Linkedin,
  FileText,
}

export default function Contact() {
  const contacts = curriculumJSON.contacts
  const services = curriculumJSON.services

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE!,
          process.env.NEXT_PUBLIC_TEMPLATE!,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_KEY!,
          },
        )
        .then(
          (result) => {
            if (result.text === 'OK') {
              toast.success('Mensaje enviado con éxito')
            } else {
              toast.error(
                'Ocurrió un error al enviar el mensaje, intenta de nuevo',
              )
            }
            form.current?.reset()
          },
          () => {
            toast.error(
              'Ocurrió un error al enviar el mensaje, intenta de nuevo',
            )
          },
        )
    }
  }

  return (
    <section id="contact" className={css({ padding: '5' })}>
      <panda.h2
        fontSize="xl"
        md={{ fontSize: '2xl' }}
        fontWeight="bold"
        textWrap="balance"
        margin="0"
      >
        Contáctame
      </panda.h2>
      <Flex
        flexDirection="column"
        md={{ flexDirection: 'row' }}
        justifyContent="space-between"
        alignItems="start"
        gap="5"
        className={css({ marginTop: '10' })}
      >
        <Box width="full" md={{ width: '50%' }} gap="10" padding="5">
          <panda.h3 fontSize="2xl" fontWeight="bold" margin="0">
            Email
          </panda.h3>
          <Paragraph className={css({ color: 'gray.500' })}>
            Llena el formulario y me pondré en contacto contigo pronto.
          </Paragraph>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={css({ spaceY: '5', marginTop: '5' })}
          >
            <div>
              <Input
                name="from_name"
                placeholder="Tu nombre"
                aria-label="Tu nombre"
                required
                variant="transparent"
              />
            </div>
            <div>
              <Input
                type="email"
                name="from_email"
                placeholder="Tu email"
                aria-label="Tu email"
                required
                variant="transparent"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                aria-label="Tu mensaje"
                required
                className={css({
                  padding: '.25rem .5rem',
                  width: 'full',
                  height: '36',
                  background: 'transparent',
                  border: '1px solid',
                  borderColor: 'gray.100',
                  _focusVisible: {
                    outline: 'none',
                    border: '2px solid',
                    borderColor: 'gray.100',
                  },
                  _dark: {
                    bg: 'transparent',
                    color: 'white',
                    border: '1px solid',
                    borderColor: 'gray.950',
                    _focusVisible: {
                      outline: 'none',
                      border: '2px solid',
                      borderColor: 'gray.950',
                    },
                  },
                  rounded: 'md',
                })}
              />
            </div>
            <Button
              border="neutro"
              size="medium"
              rounded="medium"
              className={css({ _hover: { transform: 'scale(1.1)' } })}
              type="submit"
            >
              Enviar mensaje
            </Button>
          </form>
        </Box>
        <Box width="full" md={{ width: '50%' }} padding="5">
          <panda.h3 fontSize="2xl" fontWeight="bold" margin="0">
            Servicios
          </panda.h3>
          <ul
            className={css({
              listStyle: 'circle',
              marginLeft: '5',
              paddingTop: '3',
            })}
          >
            {services.map((service, index) => (
              <li key={index} className={css({ color: 'gray.500' })}>
                {service}
              </li>
            ))}
          </ul>
          <Box className={css({ spaceY: '3', marginTop: '5' })}>
            {contacts.map((contact, index) => {
              const Icon = iconMap[contact.icon as keyof typeof iconMap]
              return (
                <a
                  download={contact.download}
                  href={contact.url}
                  target="_blank"
                  className={css({
                    width: 'full',
                    display: 'flex',
                    alignItems: 'center',
                    border: '2 solid',
                    borderColor: 'gray.100',
                    _dark: {
                      borderColor: 'gray.950',
                      _hover: { background: 'gray.950' },
                    },
                    padding: '2 6',
                    borderRadius: 'sm',
                    _hover: { background: 'gray.100' },
                  })}
                  key={index}
                >
                  {Icon && (
                    <Icon className={css({ marginRight: 2, fontSize: 'lg' })} />
                  )}
                  {contact.name}
                </a>
              )
            })}
          </Box>
        </Box>
      </Flex>
    </section>
  )
}
