'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ORANGE = '#FF5733'
const TEAL = '#193e52'
const WHITE = '#ffffff'

// variant='teal'  → on dark teal bg:  white border/text, orange blobs
// variant='white' → on white bg:      teal border/text,  teal blobs
// variant='grey'  → on grey bg:       orange border/text, teal blobs
const STYLES = {
  teal:  { border: WHITE,  text: WHITE,  blob: ORANGE },
  white: { border: TEAL,   text: TEAL,   blob: TEAL   },
  grey:  { border: ORANGE, text: ORANGE, blob: TEAL   },
}

export interface AnimatedButtonProps {
  children: React.ReactNode
  variant?: 'teal' | 'white' | 'grey'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function AnimatedButton({
  children,
  variant = 'white',
  onClick,
  className = '',
  type = 'button',
}: AnimatedButtonProps) {
  const [hovered, setHovered] = useState(false)
  const { border, text, blob } = STYLES[variant]

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="blob-goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in2="goo" in="SourceGraphic" result="mix" />
          </filter>
        </defs>
      </svg>

      <button
        type={type}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '14px 36px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          fontWeight: 700,
          fontSize: '13px',
          color: hovered ? WHITE : text,
          background: 'transparent',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          outline: 'none',
          transition: 'color 0.4s ease',
        }}
      >
        {/* Border ring */}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            border: `2px solid ${border}`,
            borderRadius: '30px',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Text sits above the blobs */}
        <span style={{ position: 'relative', zIndex: 3 }}>{children}</span>

        {/* Clipping container */}
        <span
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '30px',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <span
            style={{
              position: 'relative',
              display: 'block',
              height: '100%',
              filter: "url('#blob-goo')",
            }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: `${i * 25}%`,
                  width: '25%',
                  height: '100%',
                  background: blob,
                  borderRadius: '50%',
                  display: 'block',
                }}
                initial={{ y: '150%', scaleX: 1.4 }}
                animate={{ y: hovered ? '0%' : '150%', scaleX: 1.4 }}
                transition={{
                  duration: 0.45,
                  delay: hovered ? i * 0.12 : (3 - i) * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            ))}
          </span>
        </span>
      </button>
    </span>
  )
}
