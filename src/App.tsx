import * as React from "react"
import { cn } from "@/lib/utils"
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { AppContext, useSend } from "./machine";
import machine from './machine';
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";

function App() {
  const navigate = useNavigate();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppContext.Provider
        logic={machine.provide({
          actions: {
            goToHomePage: () => navigate('/home'),
            goToEventsPage: () => navigate('/events')
          }
        })}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <MenuLink href="/home" title="Home">
                Home
              </MenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <MenuLink href="/events" >
                Events
              </MenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Routes>
          <Route path="/home?" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

const MenuLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild><a
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
        {children}
      </p>
    </a>
    </NavigationMenuLink>)
})


export default App
