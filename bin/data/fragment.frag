#version 410

uniform sampler2D alien;

in vec2 fragUV;
out vec4 outColor;

void main() {
    outColor = texture(alien, fragUV);
    if(outColor.a < 1.0) discard;
}