varying vec2 vUv;
varying float vElevation;

void main(){
  vec3 cyanColor = vec3(0.0, 1.0, 1.0);
  vec3 pinkColor = vec3(1.0, 0.0, 1.0);
  vec3 finalColor = mix(cyanColor, pinkColor, vElevation);

  gl_FragColor = vec4(finalColor, 1.0);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}