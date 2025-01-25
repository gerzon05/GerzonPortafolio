'use client'

import SolarBuildingsLineDuotone from '@/src/icons/building'
import Calendar from '@/src/icons/calendar'
import Down from '@/src/icons/down'
import Location from '@/src/icons/location'
import { css } from '@/styled-system/css'
import { useState } from 'react'

interface JobExperienceCardProps {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  color: string
}

export default function CardExperience({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  color,
}: JobExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={css({
        background: 'transparent',
        borderRadius: 'md',
        shadow: 'md',
        overflow: 'hidden',
        marginBottom: '6px',
        borderLeft: '4px solid',
        borderLeftColor: color,
      })}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={css({
          width: 'full',
          padding: 6,
          textAlign: 'left',
          _focus: { outline: 'none' },
        })}
      >
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <h3
            className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              color: 'neutral',
            })}
          >
            {title}
          </h3>
          <div
            className={css({
              rotate: isOpen ? '180deg' : '0',
              transition: 'rotate 0.3s ease-in-out',
            })}
          >
            <Down className={css({ fontSize: '25px' })} />
          </div>
        </div>
        <div
          className={css({
            marginTop: '2',
            display: 'flex',
            alignItems: 'center',
            fontSize: 'sm',
          })}
        >
          <SolarBuildingsLineDuotone
            className={css({
              fontSize: '2xl',
              marginRight: '3',
              color: 'gray.600',
            })}
          />
          <span className={css({ _dark: { color: 'gray.400' } })}>
            {company}
          </span>
        </div>
      </button>
      <div
        className={css({
          overflow: 'auto',
          scrollbar: 'hidden',
          maxHeight: isOpen ? '250px' : '0',
          transition: 'max-height 0.3s ease-in-out',
        })}
      >
        <div className={css({ padding: '6', paddingTop: '0' })}>
          <div
            className={css({
              marginTop: '2',
              display: 'flex',
              alignItems: 'center',
              fontSize: 'sm',
            })}
          >
            <Calendar
              className={css({
                fontSize: 'xl',
                marginRight: '3',
                color: 'gray.600',
              })}
            />
            <span className={css({ _dark: { color: 'gray.400' } })}>
              {startDate} - {endDate}
            </span>
          </div>
          <div
            className={css({
              marginTop: '2',
              display: 'flex',
              alignItems: 'center',
              fontSize: 'sm',
            })}
          >
            <Location
              className={css({
                fontSize: 'xl',
                marginRight: '3',
                color: 'gray.600',
              })}
            />
            <span className={css({ _dark: { color: 'gray.400' } })}>
              {location}
            </span>
          </div>
          <ul
            className={css({
              listStyleType: 'disc',
              listStylePosition: 'inside',
              _dark: { color: 'gray.400' },
              marginTop: '2',
            })}
          >
            {description.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
