import * as THREE from 'three';
import { useRef } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import ShaderMaterialExample from './ShaderMaterialExample';

extend({ ShaderMaterialExample });

const SphereExample = () => {
	const materialref = useRef<THREE.ShaderMaterial>(null);

	const { frequency, speed, bloom } = useControls({
		frequency: { value: 3, min: 2, max: 100.0 },
		speed: { value: 2.5, min: 0, max: 15 },
		bloom: { value: 4, min: 0, max: 8 },
	});

	useFrame(({ clock }) => {
		if (materialref.current) {
			const time = clock.getElapsedTime();
			materialref.current.uniforms.uTime.value = time;
		}
	});

	return (
		<>
			<mesh rotation={[Math.PI * 0.5, 0, 0]}>
				<icosahedronGeometry args={[1, 20]} />
				<shaderMaterialExample
					key={ShaderMaterialExample.key}
					ref={materialref}
					uFrequency={frequency}
					uSpeed={speed}
				/>
			</mesh>
			<EffectComposer>
				<Bloom
					mipmapBlur
					intensity={bloom}
					luminanceThreshold={0.23}
					luminanceSmoothing={0.01}
					opacity={0.7}
				/>
				<ToneMapping adaptive={true} />
			</EffectComposer>
		</>
	);
};

export default SphereExample;
