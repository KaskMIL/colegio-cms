import React from 'react'

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
        padding: 20,
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            boxSizing: 'border-box' as const,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="/assets/jardin-logo-nuevo-2.png"
            alt="Jardín La Alpina Verde"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <div
          style={{
            width: 128,
            height: 128,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 8,
            boxSizing: 'border-box' as const,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img
            src="/assets/colegio-300x300.png"
            alt="Colegio San Miguel Arcángel"
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--theme-text)' }}>
          La Alpina Verde · San Miguel Arcángel
        </div>
        <div style={{ fontSize: 13, color: 'var(--theme-elevation-500)', marginTop: 4 }}>
          Panel de Administración
        </div>
      </div>
    </div>
  )
}

export default Logo
