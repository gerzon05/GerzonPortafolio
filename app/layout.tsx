import NexThemes from '@/src/components/next-theme'
import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import localFont from 'next/font/local'
import { Toaster } from 'sonner'
import '../styles/globals.css'

const onest = localFont({
  src: [
    {
      path: './fonts/noto-sans-300.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/noto-sans-600.woff2',
      weight: '600',
      style: 'medium',
    },
    {
      path: './fonts/noto-sans-800.woff2',
      weight: '800',
      style: 'bold',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Portafolio Gerzon Rangel',
  description: 'Portafolio de Gerzon Rangel donde muestro mis habilidades y proyectos',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ViewTransitions>
      <html lang="es" suppressHydrationWarning>
        <body className={ `${onest.className} }` }>
          <NexThemes attribute="class" defaultTheme="system" enableSystem>
            <Toaster position="top-center" />
            { children }
          </NexThemes>
        </body>
      </html>
    </ViewTransitions>
  )
}
