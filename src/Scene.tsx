import Plane from "./Components/Plane";
import Player from "./Components/Player";
import CameraRig from "./Components/CameraRig"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"


const Scene = () => {
	return (
		<>
			<Player/>
			<Plane/>
			<CameraRig/>
		</>
	);
};

export default Scene;
