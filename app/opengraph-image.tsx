import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Max Mustermann - Professioneller Musikunterricht'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          🎵 Max Mustermann
        </div>
        <div style={{ fontSize: 36, textAlign: 'center', maxWidth: '80%' }}>
          Professioneller Musikunterricht
        </div>
        <div style={{ fontSize: 24, marginTop: 20, opacity: 0.9 }}>
          Klavier • Gitarre • Gesang • Theorie
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}