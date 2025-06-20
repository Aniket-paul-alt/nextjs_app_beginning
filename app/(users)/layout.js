import "../globals.css";
import Navigation from "@/components/Navigation";

export default function RootLayout({children}){
  return (
      <>
        <p>Hello Layout</p>
        <Navigation />
        {children}
      </>
  )
} 