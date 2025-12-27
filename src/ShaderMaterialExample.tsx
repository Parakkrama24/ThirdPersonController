import { JSX } from 'react';
import { shaderMaterial } from '@react-three/drei';

import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

declare module '@react-three/fiber' {
	interface ThreeElements {
		shaderMaterialExample: JSX.IntrinsicElements['shaderMaterial'] & {
			uFrequency?: number;
			uTime?: number;
			uSpeed?: number;
		};
	}
}

const ShaderMaterialExample = shaderMaterial(
	{
		uTime: { value: 0 },
		uFrequency: { value: 2 },
		uSpeed: { value: 1.5 },
	},
	vertexShader,
	fragmentShader
);

export default ShaderMaterialExample;
