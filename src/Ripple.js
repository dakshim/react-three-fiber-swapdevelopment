import React, { useMemo, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Effects } from './Effects'
import { ResizeObserver } from '@juggle/resize-observer'
import * as THREE from 'three'

// NON-INTERACTIVE VERSION

// Equation from https://dsp.stackexchange.com/a/56529
// Visualized here https://www.desmos.com/calculator/uakymahh4u
const roundedSquareWave = (t, delta, a, f) => {
  return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots() {

  return (
    <mesh>
      <circleBufferGeometry />
      <meshBasicMaterial />
    </mesh>
  )
}

export default function Ripple() {
  return (
    <Canvas>
          <color attach="background" args={['black']} />
          <Dots />
    </Canvas>
  )
}
