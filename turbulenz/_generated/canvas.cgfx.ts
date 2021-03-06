// Generated from assets/shaders/canvas.cgfx
var canvas_cgfx : any =
{
    "version": 1,
    "name": "canvas.cgfx",
    "samplers":
    {
        "texture":
        {
            "MinFilter": 9985,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "pattern":
        {
            "MinFilter": 9728,
            "MagFilter": 9729,
            "WrapS": 10497,
            "WrapT": 10497
        },
        "gradient":
        {
            "MinFilter": 9728,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        },
        "image":
        {
            "MinFilter": 9728,
            "MagFilter": 9729,
            "WrapS": 33071,
            "WrapT": 33071
        }
    },
    "parameters":
    {
        "screen":
        {
            "type": "float",
            "columns": 4
        },
        "uvtransform":
        {
            "type": "float",
            "rows": 2,
            "columns": 3
        },
        "color":
        {
            "type": "float",
            "columns": 4
        },
        "alpha":
        {
            "type": "float"
        },
        "texture":
        {
            "type": "sampler2D"
        },
        "pattern":
        {
            "type": "sampler2D"
        },
        "gradient":
        {
            "type": "sampler2D"
        },
        "image":
        {
            "type": "sampler2D"
        }
    },
    "techniques":
    {
        "flat_source_atop":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,771]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_source_in":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,0]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_source_out":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,0]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_source_over":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_destination_atop":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,770]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_destination_in":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,770]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_destination_out":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,771]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_destination_over":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,1]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_lighter":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,1]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_copy":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "flat_xor":
        [
            {
                "parameters": ["screen","color"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,771]
                },
                "programs": ["vp_flat","fp_flat"]
            }
        ],
        "texture_source_atop":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,771]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_source_in":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,0]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_source_out":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,0]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_source_over":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_destination_atop":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,770]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_destination_in":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,770]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_destination_out":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,771]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_destination_over":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,1]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_lighter":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,1]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_copy":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "texture_xor":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,771]
                },
                "programs": ["vp_texture","fp_texture"]
            }
        ],
        "pattern_source_atop":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,771]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_source_in":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,0]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_source_out":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,0]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_source_over":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_destination_atop":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,770]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_destination_in":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,770]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_destination_out":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,771]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_destination_over":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,1]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_lighter":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,1]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_copy":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "pattern_xor":
        [
            {
                "parameters": ["screen","uvtransform","alpha","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,771]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern"]
            }
        ],
        "gradient_source_atop":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,771]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_source_in":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [772,0]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_source_out":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,0]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_source_over":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_destination_atop":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,770]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_destination_in":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,770]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_destination_out":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [0,771]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_destination_over":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,1]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_lighter":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,1]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_copy":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "gradient_xor":
        [
            {
                "parameters": ["screen","uvtransform","alpha","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [773,771]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient"]
            }
        ],
        "texture_shadow":
        [
            {
                "parameters": ["screen","color","texture"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture","fp_texture_shadow"]
            }
        ],
        "pattern_shadow":
        [
            {
                "parameters": ["screen","uvtransform","color","pattern"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture_uvtransform","fp_pattern_shadow"]
            }
        ],
        "gradient_shadow":
        [
            {
                "parameters": ["screen","uvtransform","color","gradient"],
                "semantics": ["ATTR0"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": true,
                    "BlendFunc": [1,771]
                },
                "programs": ["vp_texture_uvtransform","fp_gradient_shadow"]
            }
        ],
        "image":
        [
            {
                "parameters": ["image"],
                "semantics": ["ATTR0","ATTR8"],
                "states":
                {
                    "DepthTestEnable": false,
                    "DepthMask": false,
                    "CullFaceEnable": false,
                    "BlendEnable": false
                },
                "programs": ["vp_image","fp_image"]
            }
        ]
    },
    "programs":
    {
        "fp_image":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;uniform sampler2D image;void main()\n{_ret_0=texture2D(image,tz_TexCoord[0].xy);gl_FragColor=_ret_0;}"
        },
        "vp_image":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];attribute vec4 ATTR0;attribute vec4 ATTR8;\nvec4 _OutPosition1;vec2 _OutUV1;void main()\n{_OutPosition1=vec4(ATTR0.x,ATTR0.y,0.0,1.0);_OutUV1=ATTR8.xy;tz_TexCoord[0].xy=ATTR8.xy;gl_Position=_OutPosition1;}"
        },
        "fp_gradient_shadow":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec4 _TMP0;uniform vec4 color;uniform sampler2D gradient;void main()\n{_TMP0=texture2D(gradient,tz_TexCoord[0].xy);_ret_0=color*_TMP0.w;gl_FragColor=_ret_0;}"
        },
        "vp_texture_uvtransform":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];attribute vec4 ATTR0;\nvec4 _OutPosition1;vec2 _OutUV1;uniform vec4 screen;uniform vec3 uvtransform[2];void main()\n{vec3 _position;vec2 _TMP9;_TMP9=ATTR0.xy*screen.xy+screen.zw;_OutPosition1=vec4(_TMP9.x,_TMP9.y,0.0,1.0);_position=vec3(ATTR0.x,ATTR0.y,1.0);_OutUV1.x=dot(_position,uvtransform[0]);_OutUV1.y=dot(_position,uvtransform[1]);tz_TexCoord[0].xy=_OutUV1;gl_Position=_OutPosition1;}"
        },
        "fp_pattern_shadow":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec4 _TMP0;uniform vec4 color;uniform sampler2D pattern;void main()\n{_TMP0=texture2D(pattern,tz_TexCoord[0].xy);_ret_0=color*_TMP0.w;gl_FragColor=_ret_0;}"
        },
        "fp_texture_shadow":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _ret_0;vec4 _TMP0;uniform vec4 color;uniform sampler2D texture;void main()\n{_TMP0=texture2D(texture,tz_TexCoord[0].xy);_ret_0=color*_TMP0.w;gl_FragColor=_ret_0;}"
        },
        "vp_texture":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];attribute vec4 ATTR0;attribute vec4 ATTR8;\nvec4 _OutPosition1;vec2 _OutUV1;uniform vec4 screen;void main()\n{vec2 _TMP8;_TMP8=ATTR0.xy*screen.xy+screen.zw;_OutPosition1=vec4(_TMP8.x,_TMP8.y,0.0,1.0);_OutUV1=ATTR8.xy;tz_TexCoord[0].xy=ATTR8.xy;gl_Position=_OutPosition1;}"
        },
        "fp_gradient":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nuniform float alpha;uniform sampler2D gradient;void main()\n{vec4 _fg;_fg=texture2D(gradient,tz_TexCoord[0].xy);_fg.w=_fg.w*alpha;_fg.xyz=_fg.xyz*_fg.w;gl_FragColor=_fg;}"
        },
        "fp_pattern":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nuniform float alpha;uniform sampler2D pattern;void main()\n{vec4 _fg;_fg=texture2D(pattern,tz_TexCoord[0].xy);_fg.w=_fg.w*alpha;_fg.xyz=_fg.xyz*_fg.w;gl_FragColor=_fg;}"
        },
        "fp_texture":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nvarying vec4 tz_TexCoord[1];\nvec4 _TMP0;uniform vec4 color;uniform sampler2D texture;void main()\n{vec4 _fg;_TMP0=texture2D(texture,tz_TexCoord[0].xy);_fg=_TMP0*color;_fg.xyz=_fg.xyz*_fg.w;gl_FragColor=_fg;}"
        },
        "fp_flat":
        {
            "type": "fragment",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nuniform vec4 color;void main()\n{gl_FragColor=color;}"
        },
        "vp_flat":
        {
            "type": "vertex",
            "code": "#ifdef GL_ES\n#define TZ_LOWP lowp\nprecision highp float;\nprecision highp int;\n#else\n#define TZ_LOWP\n#endif\nattribute vec4 ATTR0;\nvec4 _ret_0;uniform vec4 screen;void main()\n{vec2 _TMP8;_TMP8=ATTR0.xy*screen.xy+screen.zw;_ret_0=vec4(_TMP8.x,_TMP8.y,0.0,1.0);gl_Position=_ret_0;}"
        }
    }
}

