import React from 'react'

const Icon = () => {
  return (
    <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
      <img
        src="/assets/logo-colegio-nuevo.jpeg"
        alt="SMA"
        style={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          objectFit: 'contain',
          background: '#fff',
          padding: 2,
        }}
      />
    </div>
  )
}

export default Icon
