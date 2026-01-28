"use client"

import React from "react"
import { 
  Search, 
  Cpu, 
  Box, 
  Terminal, 
  Database, 
  AppWindow, 
  LayoutDashboard,
  FileText, 
  UserCircle,
  Wand2,
  GraduationCap,
  Layout,
  Globe,
  Coins,
  Ticket,
  DollarSign,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Settings,
  User
} from "lucide-react"

// Simple cn helper for standalone use
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const MENU_GROUPS = [
  {
    label: "LEARN",
    items: [
      { name: "Documentation", href: "/docs", icon: <FileText size={16} /> },
      { name: "Courses", href: "/courses", icon: <GraduationCap size={16} /> },
      { name: "Build & Grow", href: "/build-grow", icon: <Wand2 size={16} /> },
      { name: "Contributors", href: "/contributors", icon: <UserCircle size={16} /> },
      { name: "Forums", href: "/forums", icon: <Terminal size={16} /> },
      { name: "Activity", href: "/activity", icon: <Globe size={16} /> },
      { name: "Roadmap", href: "/roadmap", icon: <FileText size={16} /> },
    ],
  },
  {
    label: "BUILD",
    items: [
      { name: "Discover", href: "/discover", icon: <Search size={16} /> },
      { name: "AI Models", href: "/models", icon: <Cpu size={16} /> },
      { name: "tGPUs", href: "/tgpu", icon: <Box size={16} /> },
      { name: "Agents", href: "/agents", icon: <Terminal size={16} /> },
      { name: "Compute", href: "/compute", icon: <LayoutDashboard size={16} /> },
      { name: "Data", href: "/data", icon: <Database size={16} /> },
      { name: "Apps", href: "/apps", icon: <AppWindow size={16} /> },
      { name: "Network", href: "/network", icon: <Globe size={16} /> },
      { name: "Compare", href: "/compare", icon: <Layout size={16} /> },
      { name: "App Builder", href: "/builder", icon: <Wand2 size={16} /> },
    ],
  },
  {
    label: "EARN",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: <Layout size={16} /> },
      { name: "Ecosystem", href: "/ecosystem", icon: <Globe size={16} /> },
      { name: "Token", href: "/token", icon: <Coins size={16} /> },
      { name: "Claims", href: "/claims", icon: <Ticket size={16} /> },
      { name: "Earn", href: "/earn", icon: <DollarSign size={16} /> },
    ],
  },
]

export function V10SidebarStandalone() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [collapsedGroups, setCollapsedGroups] = React.useState<string[]>([])
  const [isConnected, setIsConnected] = React.useState(false) // Mock

  const toggleGroup = (label: string) => {
    setCollapsedGroups(prev => 
      prev.includes(label) 
        ? prev.filter(l => l !== label) 
        : [...prev, label]
    )
  }

  const SidebarContent = () => (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      position: 'relative'
    }}>
      {/* V10 Portal Indicator Strip - Matched to Portal Shell */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '4px',
        backgroundColor: '#2563eb',
        boxShadow: '0 0 15px rgba(37,99,235,0.8)'
      }} />
      
      {/* Logo Section */}
      <div style={{ marginBottom: '24px', marginTop: '16px', padding: '0 8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(37,99,235,0.2)',
          overflow: 'hidden'
        }}>
          <img src="/icon.png" alt="V10 Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.05em', color: 'white' }}>
          V10 <span style={{ color: '#60a5fa' }}>PORTAL</span>
        </div>
      </div>

      {/* Wallet Connect Card */}
      <div style={{
        position: 'relative',
        marginBottom: '32px',
        width: '100%',
        borderRadius: '8px',
        backgroundColor: '#1F2021',
        padding: '16px',
        border: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Profile Avatar & Settings Widget */}
        <div style={{
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          paddingBottom: '16px',
          opacity: isConnected ? 1 : 0.4,
          filter: isConnected ? 'none' : 'grayscale(100%)',
          pointerEvents: isConnected ? 'auto' : 'none'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #2563eb, #4338ca)',
              border: '2px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}>
              {isConnected ? (
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=v10-studio" 
                  alt="Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <User size={20} color="rgba(255,255,255,0.4)" />
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'white', letterSpacing: '-0.02em' }}>
                {isConnected ? "0x12...abcd" : "Unauthorized"}
              </span>
              <span style={{ fontSize: '9px', fontWeight: 500, color: '#60a5fa', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {isConnected ? "Pilot" : "Guest Access"}
              </span>
            </div>
          </div>
          <button style={{
            padding: '6px',
            borderRadius: '6px',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer'
          }}>
            <Settings size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '40px', fontWeight: 300, color: 'white', lineHeight: 1 }}>0</span>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>OPENX</span>
        </div>
        <button 
          onClick={() => setIsConnected(!isConnected)}
          style={{
            marginTop: '16px',
            width: '100%',
            borderRadius: '12px',
            backgroundColor: '#2563eb',
            padding: '10px 0',
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
          {isConnected ? "Connected" : "Connect Wallet"}
        </button>
      </div>

      {/* Navigation Groups */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
        {MENU_GROUPS.map((group) => {
          const isCollapsed = collapsedGroups.includes(group.label)
          return (
            <div key={group.label} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button 
                onClick={() => toggleGroup(group.label)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '4px 8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <h3 style={{
                  fontSize: '10px',
                  fontWeight: 'bold',
                  letterSpacing: '0.2em',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase'
                }}>
                  {group.label}
                </h3>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>
                  {isCollapsed ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                </span>
              </button>
              
              {!isCollapsed && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {group.items.map((item) => {
                    const isDoc = item.name === 'Documentation'
                    
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          borderRadius: '8px',
                          padding: '8px 12px',
                          fontSize: '14px',
                          fontWeight: 500,
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          color: isDoc ? 'white' : 'rgba(255,255,255,0.7)',
                          backgroundColor: isDoc ? '#2563eb' : 'transparent',
                          boxShadow: isDoc ? '0 4px 12px rgba(37,99,235,0.3)' : 'none'
                        }}
                      >
                        <span style={{ color: isDoc ? 'white' : 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center' }}>
                          {item.icon}
                        </span>
                        <span style={{ color: 'white', fontWeight: 500 }}>{item.name}</span>
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Footer Branding - Unified with Portal */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '16px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        opacity: 0.4
      }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
        <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'white', letterSpacing: '0', textTransform: 'uppercase' }}>
          Studio v10 by <a href="https://openxai.org" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'underline', textDecorationColor: 'rgba(96,165,250,0.3)', textUnderlineOffset: '2px' }}>OpenxAI</a>
        </span>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 100,
          padding: '8px',
          backgroundColor: '#1F2021',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className="lg-hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 80
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '234px',
        display: 'flex',
        flexDirection: 'column',
        background: 'radial-gradient(at center, #4C4C4C 0%, #1C1C1C 100%)',
        zIndex: 90,
        transition: 'transform 0.3s',
        transform: isOpen ? 'translateX(0)' : undefined
      }} className={cn(!isOpen && "mobile-hidden-sidebar")}>
        <SidebarContent />
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .mobile-hidden-sidebar {
            transform: translateX(-100%);
          }
        }
        @media (min-width: 1024px) {
          .lg-hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
