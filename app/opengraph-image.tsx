import { ImageResponse } from 'next/og'

export const alt = 'Green Wash — Estética Automotiva em Taubaté'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#10130f',
          color: '#f5f5ef',
          padding: '72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 44,
              fontWeight: 900,
              lineHeight: 0.78,
            }}
          >
            <span>GREEN</span>
            <span style={{ color: '#b9f436' }}>WASH</span>
          </div>
          <div style={{ color: '#9ba196', fontSize: 24 }}>Taubaté · SP</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 980 }}>
          <div style={{ color: '#b9f436', fontSize: 24, marginBottom: 24 }}>
            ESTÉTICA AUTOMOTIVA
          </div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.96,
              letterSpacing: '-4px',
              fontWeight: 760,
            }}
          >
            Seu carro bem cuidado. Orçamento direto no WhatsApp.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#9ba196', fontSize: 22 }}>
          <span>Jardim Ana Rosa</span>
          <span>Seg–Sáb · 08:00–18:00</span>
        </div>
      </div>
    ),
    size
  )
}
