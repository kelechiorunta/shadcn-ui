import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/sidebar";
import { Nav } from "@/components/ui/nav";
import Sidenav from "@/components/Sidenav";


// Define custom Poppins font with specific weight and subset
const customPoppins = Poppins({
  subsets: ['latin'],
  weight: "400",
  variable: '--custom_poppins',
});

// Define Geist Sans local font
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Define Geist Mono local font
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// RootLayout component that wraps the app content with fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          customPoppins.variable, // Corrected usage of cn
          geistSans.variable,
          geistMono.variable,
          "font-sans",
          "antialiased" // This should be a normal string argument
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            <main className='flex'> 
              {/* <div className='w-[20%] border-2'><Sidebar/></div> */}
             <Sidenav/>
              <div className='w-[90%] border-2 flex items-start'>{children}</div>
            </main>
            <Toaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
