import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Technical SEO Consultant & Developer | Kirkland Gee'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#f5f1ed',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px'
          }}
        >
          <div style={{ fontSize: '64px', color: '#0d0106' }}>Kirkland Gee</div>
          <div style={{ fontSize: '32px', color: '#0d0106' }}>Technical SEO Consultant & Developer</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}