export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="style.css" />
        </head>
      <body>{children}</body>
    </html>
  )
}