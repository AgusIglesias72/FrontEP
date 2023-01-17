import TopbarContainer from '../Components/TopContainer.js'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <TopbarContainer>{children}</TopbarContainer>
      </body>
    </html>
  )
}
