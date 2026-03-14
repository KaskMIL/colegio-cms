import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="home">
      <div className="content">
        <div className="logos">
          <div className="logoCircle">
            <img src="/assets/jardin-logo-nuevo-2.png" alt="Jardín La Alpina Verde" />
          </div>
          <div className="logoCircle">
            <img src="/assets/colegio-300x300@2x.png" alt="Colegio San Miguel Arcángel" />
          </div>
        </div>
        {!user && (
          <>
            <h1>Bienvenido al panel de gestión</h1>
            <p className="subtitle">Jardín La Alpina Verde · Colegio San Miguel Arcángel</p>
          </>
        )}
        {user && (
          <>
            <h1>¡Hola, {user.email}!</h1>
            <p className="subtitle">Panel de administración del sitio web</p>
          </>
        )}
        <div className="links">
          <a
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Ir al panel de administración
          </a>
          <a
            className="docs"
            href="https://colegiosanmiguelarcangel.edu.ar"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver sitio web
          </a>
        </div>
      </div>
      <div className="footer">
        <p>San José 5396, San Miguel, Buenos Aires · DIEGEP 5303</p>
      </div>
    </div>
  )
}
