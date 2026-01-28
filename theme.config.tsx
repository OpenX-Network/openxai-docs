// theme.config.tsx
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const config: DocsThemeConfig = {
  logo: <span>OpenxAI Docs</span>,
  docsRepositoryBase:
    "https://github.com/OpenxAI-Network/openxai-docs/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OpenxAI Docs" />
      <meta property="og:description" content="OpenxAI Documentation" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
    </>
  ),
  sidebar: {
    //defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {
    component: () => null,
  },
  footer: {
    content: "OpenxAI Docs",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "dark",
    storageKey: "theme",
    forcedTheme: "dark",
  },
  navigation: false,
};

export default config;
