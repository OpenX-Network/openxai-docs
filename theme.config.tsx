// theme.config.tsx
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const config: DocsThemeConfig = {
  logo: <span>OpenX Network Docs</span>,
  docsRepositoryBase:
    "https://github.com/OpenxAI-Network/openxai-docs/tree/main",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="OpenX Network Docs" />
      <meta property="og:description" content="OpenX Network Documentation" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </>
  ),
  sidebar: {
    //defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  navbar: {
    extraContent: (
      <>
        <a
          href="https://x.com/OpenxAINetwork"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginRight: "16px",
            verticalAlign: "middle",
          }}
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://t.me/OpenxAINetwork"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginRight: "16px",
            verticalAlign: "middle",
          }}
        >
          <FaTelegramPlane size={24} />
        </a>
      </>
    ),
  },
  footer: {
    content: "OpenX Network Docs",
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "light",
    storageKey: "theme",
  },
  navigation: false,
};

export default config;
