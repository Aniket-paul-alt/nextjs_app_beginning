import "../globals.css";
import Navigation from "@/components/Navigation";

export default function RootLayout({children}){
  return (
    <html>
      <body>
        <p>Hello Layout</p>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 