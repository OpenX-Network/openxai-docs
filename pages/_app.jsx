// pages/_app.jsx
import React, { useEffect, useState } from 'react'
import { V10SidebarStandalone } from '../components/V10SidebarStandalone'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div style={{ background: '#050505', minHeight: '100vh' }} />
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* V10 Portal Global Identity Strip */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '4px',
        backgroundColor: '#2563eb',
        zIndex: 9999,
        boxShadow: '0 0 20px rgba(37,99,235,0.8)'
      }} />
      
      <V10SidebarStandalone />
      
      <div style={{ paddingLeft: '234px' }} className="v10-main-content">
        <Component {...pageProps} />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        :root {
          --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
        }

        body {
          font-family: var(--font-sans) !important;
          background-color: black !important;
          color: white !important;
        }

        /* Hide Top Navigation in Portal Mode */
        .nextra-nav-container, .nextra-breadcrumb, .nextra-search {
          display: none !important;
        }

        @media (max-width: 1023px) {
          .v10-main-content {
            padding-left: 0 !important;
            padding-top: 64px;
          }
        }
      `}</style>
    </div>
  )
}
