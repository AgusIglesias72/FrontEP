export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <h1>Next.js</h1>
        {children}
      </body>
    </html>
  )
}
