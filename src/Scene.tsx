import { OrbitControls } from '@react-three/drei';
import MeshExample from './MeshExample';

const Scene = () => {
	return (
		<>
			<MeshExample />
			<OrbitControls />
		</>
	);
};

export default Scene;
