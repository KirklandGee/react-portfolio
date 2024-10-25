'use client';

import { ThemeProvider } from "next-themes";
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('Current theme:', theme);
  }, [theme]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}