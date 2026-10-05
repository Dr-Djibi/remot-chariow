import React from 'react';
import { ThreeCanvas } from '@remotion/three';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const OrbitalNetwork: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rotation = (frame / fps) * 0.24;

  return (
    <group rotation={[0.18, rotation, -0.08]}>
      <mesh>
        <icosahedronGeometry args={[1.12, 2]} />
        <meshBasicMaterial color="#BFF66B" wireframe transparent opacity={0.34} />
      </mesh>
      <mesh rotation={[1.1, 0.35, 0.2]}>
        <torusGeometry args={[1.48, 0.009, 8, 160]} />
        <meshBasicMaterial color="#56D6C9" transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[0.4, -0.7, 1.16]}>
        <torusGeometry args={[1.7, 0.006, 8, 160]} />
        <meshBasicMaterial color="#E89A5A" transparent opacity={0.62} />
      </mesh>
      <mesh position={[0.8, 0.2, 0.7]}>
        <sphereGeometry args={[0.065, 16, 16]} />
        <meshBasicMaterial color="#F3F5EE" />
      </mesh>
      <mesh position={[-0.92, 0.42, 0.35]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshBasicMaterial color="#E89A5A" />
      </mesh>
      <mesh position={[0.05, -1.12, 0.48]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshBasicMaterial color="#56D6C9" />
      </mesh>
    </group>
  );
};

interface ThreatGlobeProps {
  size?: number;
}

export const ThreatGlobe: React.FC<ThreatGlobeProps> = ({ size = 520 }) => (
  <ThreeCanvas
    width={size}
    height={size}
    camera={{ position: [0, 0, 4.8], fov: 42 }}
    gl={{ alpha: true, antialias: true }}
    dpr={1}
    style={{ background: 'transparent' }}
  >
    <ambientLight intensity={0.8} />
    <pointLight position={[3, 2, 4]} color="#BFF66B" intensity={12} />
    <OrbitalNetwork />
  </ThreeCanvas>
);