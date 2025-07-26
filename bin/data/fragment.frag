#version 410

uniform sampler2D myTexture;

in vec2 fragUV;
out vec4 outColor;

void main() {
    outColor = texture(myTexture, fragUV);
    if(outColor.a < 0.8) discard;
}