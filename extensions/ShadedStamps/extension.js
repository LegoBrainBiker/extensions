// Name: Pen Plus 3D Addon
// ID: penP3D
// Description: 3d Rendering for pen+
// By: ObviousAlexC <https://scratch.mit.edu/users/pinksheep2917/>
// License: MIT

(function (Scratch) {
  "use strict";

  const modalAPI={_handlePMvsEM(e){switch(e){case"--menu-bar-background":return Scratch.extensions.isElectraMod?"var(--menu-bar-background, hsla(244, 23%, 48%, 1))":"var(--menu-bar-background, #009CCC)";case"--ui-modal-overlay":return Scratch.extensions.isElectraMod?"var(--ui-modal-overlay, hsla(244, 23%, 48%, 0.9))":"var(--ui-modal-overlay, hsla(194, 100%, 65%, 0.9))"}},_setupTheme(){if("undefined"!=typeof scaffolding){modalAPI._menuBarBackground="#0FBD8C",modalAPI._defaultBackgroundColor="white",modalAPI._textColor="black",modalAPI._buttonShadow="hsla(0, 0%, 0%, 0.15)",modalAPI.fade="#0FBD8CDD",modalAPI._shadowBorder="hsla(0, 100%, 100%, 0.25)";return}modalAPI._menuBarBackground=Scratch.extensions.isPenguinMod?modalAPI._handlePMvsEM("--menu-bar-background"):"var(--menu-bar-background)",modalAPI._defaultBackgroundColor=Scratch.extensions.isPenguinMod?"dark"==document.body.getAttribute("theme")?"var(--ui-primary)":"white":"var(--ui-modal-background)",modalAPI._textColor=Scratch.extensions.isPenguinMod?"dark"==document.body.getAttribute("theme")?"white":"black":"var(--ui-modal-foreground)",modalAPI._buttonShadow=Scratch.extensions.isPenguinMod?"hsla(0, 0%, 0%, 0.15)":"var(--ui-black-transparent)",modalAPI.fade=modalAPI._handlePMvsEM("--ui-modal-overlay"),modalAPI._shadowBorder=Scratch.extensions.isPenguinMod?"hsla(0, 100%, 100%, 0.25)":"var(--ui-white-transparent)"},openModal(e){modalAPI._setupTheme();let t=document.createElement("div");t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.left="0px",t.style.top="0px",t.style.backgroundColor=modalAPI.fade,t.style.zIndex="10001",document.body.appendChild(t);let l=document.createElement("div");l.style.backgroundColor=modalAPI._menuBarBackground,l.style.width="50%",l.style.height="50%",l.style.position="relative",l.style.top="50%",l.style.left="50%",l.style.borderRadius="8px",l.style.borderColor=modalAPI._shadowBorder,l.style.borderWidth="4px",l.style.borderStyle="solid",l.style.aspectRatio="5/3",l.style.transform="translate(-50%,25%)",l.style.zIndex="10002",//!DONT FORGET THIS IS HERE
l.style.textAlign="center",l.style.color="#ffffff",document.body.appendChild(l);let a=document.createElement("div");a.style.width="100%",a.style.height="48px",a.style.top="0px",a.style.left="0px",a.style.position="absolute",a.style.transform="translate(0%,12px)",a.style.fontSize="24px",a.textContent=e||"modal",l.appendChild(a);let o=document.createElement("div");o.style.backgroundColor=modalAPI._defaultBackgroundColor,o.style.width="100%",o.style.height="calc(100% - 48px)",o.style.position="absolute",o.style.top="48px",o.style.left="0%",o.style.borderBottomLeftRadius="4px",o.style.borderBottomRightRadius="4px",l.appendChild(o);let s=document.createElement("div");s.style.width="1.75rem",s.style.height="1.75rem",s.style.backgroundColor=modalAPI._buttonShadow,s.style.position="absolute",s.style.left="calc(100% - 2rem)",s.style.top="0.25rem",s.style.borderRadius="50%",s.style.alignItems="center",s.style.justifyContent="center",s.style.display="flex",s.style.cursor="pointer",s.style.transition="all 0.15s ease-out",s.style.transform="translate(-50%,25%)",s.onmouseenter=()=>{s.style.transform="translate(-50%,25%) scale(1.1,1.1)"},s.onmouseleave=()=>{s.style.transform="translate(-50%,25%) scale(1,1)"},s.onclick=()=>{document.body.removeChild(t),document.body.removeChild(l)},l.appendChild(s);let r=document.createElement("img");return r.src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==",r.style.width="0.75rem",r.style.height="0.75rem",r.style.margin="0.25rem",r.style.transform="rotate(45deg)",s.appendChild(r),{shaderPanel:o,closeFunc(){document.body.removeChild(t),document.body.removeChild(l)},resizeFunc(e,t){l.style.aspectRatio=e+"/"+t,l.style.width=e>t?"auto":e+"%",l.style.height=t>=e?"auto":t+"%"},nameFunc(e){a.textContent=e}}}};

  if (!Scratch.extensions.unsandboxed) {
    //for those who use the version from pen-group's site
    alert("Shaded Stamps must be ran unsandboxed!");
    throw new Error("Shaded Stamps must run unsandboxed");
  }

  const defaultShaders = {
    "VHS Shader" : {"projectData":{"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_vertex","id":"?PVz0-*+bo_6k4L{)ZoM","x":32,"y":103}]}},"dynamicDat":{"dynamic_variables":[],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x + sin(look.y*10. + u_timer)/50.*onOff(4.,4.,.3)*(1.+cos(u_timer*80.))*window;\n\thighp float vShift = 0.4*onOff(2.,3.,.9)*(sin(u_timer)*sin(u_timer*20.) + \n\t\t\t\t\t\t\t\t\t\t (0.5 + 0.1*sin(u_timer*200.)*cos(u_timer)));\n\tlook.y = mod(look.y + vShift, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\nvoid fragment()\n{\n\thighp vec2 uv = gl_FragCoord.xy / u_res.xy;\n\tuv = screenDistort(uv);\n\thighp vec3 video = getVideo(uv);\n\thighp float vigAmt = 3.+.3*sin(u_timer + 5.*cos(u_timer*5.));\n\thighp float vignette = (1.-vigAmt*(uv.y-.5)*(uv.y-.5))*(1.-vigAmt*(uv.x-.5)*(uv.x-.5));\n\t\n\tvideo += stripes(uv);\n\tvideo *= vignette;\n\tvideo *= (12.+mod(uv.y*30.+u_timer,1.))/13.;\n\t\n\tgl_FragColor = vec4(video,1.0);\n}//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * u_transform[0][1],0.001,1);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":true,"savedVarState":{}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x + sin(look.y*10. + u_timer)/50.*onOff(4.,4.,.3)*(1.+cos(u_timer*80.))*window;\n\thighp float vShift = 0.4*onOff(2.,3.,.9)*(sin(u_timer)*sin(u_timer*20.) + \n\t\t\t\t\t\t\t\t\t\t (0.5 + 0.1*sin(u_timer*200.)*cos(u_timer)));\n\tlook.y = mod(look.y + vShift, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\n//Vertex Shader\nvoid main()\n{\n\thighp vec2 uv = gl_FragCoord.xy / u_res.xy;\n\tuv = screenDistort(uv);\n\thighp vec3 video = getVideo(uv);\n\thighp float vigAmt = 3.+.3*sin(u_timer + 5.*cos(u_timer*5.));\n\thighp float vignette = (1.-vigAmt*(uv.y-.5)*(uv.y-.5))*(1.-vigAmt*(uv.x-.5)*(uv.x-.5));\n\t\n\tvideo += stripes(uv);\n\tvideo *= vignette;\n\tvideo *= (12.+mod(uv.y*30.+u_timer,1.))/13.;\n\t\n\tgl_FragColor = vec4(video,1.0);\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x + sin(look.y*10. + u_timer)/50.*onOff(4.,4.,.3)*(1.+cos(u_timer*80.))*window;\n\thighp float vShift = 0.4*onOff(2.,3.,.9)*(sin(u_timer)*sin(u_timer*20.) + \n\t\t\t\t\t\t\t\t\t\t (0.5 + 0.1*sin(u_timer*200.)*cos(u_timer)));\n\tlook.y = mod(look.y + vShift, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * u_transform[0][1],0.001,1);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},"modifyDate":1715985653487},
    "Chromatic Abberation" : {"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_pixel","id":"qFL#_7Lh0;Ep18cW[2gg","x":27,"y":168,"next":{"block":{"type":"looks_setPixColor","id":"ooXL_(0AIAj1GwK6KFd_","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"u0TR1$f#Zo/rt8rnhjm9","fields":{"COLOUR":"#0000ff"}},"block":{"type":"vector_vec4","id":"hi!OC7DVc~5?.OXDU|ko","inputs":{"x":{"shadow":{"type":"number_reporter","id":"9O-P7kIKoU.LixBT/l[e","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"e7|L-ERJzRy|eACO0S4i","fields":{"coordinate":"x"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"CKgqVzMp(o)n0nsPMZ5c","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"},"block":{"type":"operators_sub","id":"Y%[pf*;Sv0a_/^xW~V|9","inputs":{"A":{"shadow":{"type":"number_reporter","id":"o~jgaaC,ki]W9FlKt+p,","fields":{"NUMBER":0}},"block":{"type":"looks_pixUV","id":",A,*3$};|[sZ-5/gUXM3"}},"B":{"shadow":{"type":"number_reporter","id":"=?j^@zE7t-%T2R@W|N+Z","fields":{"NUMBER":0}},"block":{"type":"vector_vec2","id":"TQ!/Yt]sgV)1T*R6@5,x","inputs":{"x":{"shadow":{"type":"number_reporter","id":"]P~_,:8xJw$JK$?6{;]c","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"^:EHm;n#Pr-:^7SiK*c{","extraState":{"variableData":{"type":"float","mainText":"uniform seperation"}}}},"y":{"shadow":{"type":"number_reporter","id":"tPm8xX^*otW|U%75(tLq","fields":{"NUMBER":0}}}}}}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"|iv-+;S$F^0X8:Ul}{Zo","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"y":{"shadow":{"type":"number_reporter","id":"IpHiBR$n,=_]EGXv1k2O","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"b!1?6%ZVC#Q!o@~h22G,","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"osDSfdS|=DU{FIDpO*Rj","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"663mi,Z7e~B{jyT8fR./"}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"F,G2{EjQ9_CTFCYsVYG!","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"z":{"shadow":{"type":"number_reporter","id":":S^T#n5S7RaTy;SmYSic","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"Oa])=7Q}n{q!/LTsUvOy","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"fgzi|m^+kL@m8u2Jr9C*","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"},"block":{"type":"operators_add","id":"AkT@`DQwcX[%{AK)}x_7","inputs":{"A":{"shadow":{"type":"number_reporter","id":"b{!Vr[_:f+58+(Z9Ta}c","fields":{"NUMBER":0}},"block":{"type":"looks_pixUV","id":"6I{F[QI$188frlCMgtCw"}},"B":{"shadow":{"type":"number_reporter","id":"K=a3h_@RQnk}XXbpe##t","fields":{"NUMBER":0}},"block":{"type":"vector_vec2","id":";;M}s_cp.tIC3VLX@d|.","inputs":{"x":{"shadow":{"type":"number_reporter","id":"]P~_,:8xJw$JK$?6{;]c","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"EwEHzt}Ar8kx];qOur/K","extraState":{"variableData":{"type":"float","mainText":"uniform seperation"}}}},"y":{"shadow":{"type":"number_reporter","id":";d(Yx0UP$ks`U(ccnjG2","fields":{"NUMBER":0}}}}}}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"ib@1beMe7,|ii`]:|4c/","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"w":{"shadow":{"type":"number_reporter","id":"#F@]@S|$aN,{m2.oe9SZ","fields":{"NUMBER":1}}}}}}}}}}]},"variables":[{"name":"uniform u_skin","id":"uniform_u_skin","type":"texture"},{"name":"uniform seperation","id":"uniform_seperation","type":"float"}]},"dynamicDat":{"dynamic_variables":[{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"uniform seperation"}}},{"type":"duplicate","of":"variable_set"},{"type":"duplicate","of":"variable_change"},{"type":"duplicate","of":"variable_multiply"},{"type":"duplicate","of":"variable_divide"}],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\nvoid fragment() {\ngl_FragColor = v_color;\n\n\ngl_FragColor = vec4(texture2D(u_skin,(v_texCoord - vec2(seperation,float(0)))).x,texture2D(u_skin,v_texCoord).y,texture2D(u_skin,(v_texCoord + vec2(seperation,float(0)))).z,float(1));\n}//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":false,"savedVarState":{"seperation":"0.01"}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_FragColor = v_color;\n\n\ngl_FragColor = vec4(texture2D(u_skin,(v_texCoord - vec2(seperation,float(0)))).x,texture2D(u_skin,v_texCoord).y,texture2D(u_skin,(v_texCoord + vec2(seperation,float(0)))).z,float(1));\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},
    "Posterization" : {"projectData":{"projectData":{"blockDat":{},"dynamicDat":{"dynamic_variables":[],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float Colors;\n\nhighp vec3 rgb2hsv(highp vec3 c)\n{\n    highp vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    highp vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    highp vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    highp float d = q.x - min(q.w, q.y);\n    highp float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n//Fragment Shader\nvoid fragment() {\ngl_FragColor = v_color;\n\ngl_FragColor = texture2D(u_skin,v_texCoord);\nhighp vec3 awesome = rgb2hsv(gl_FragColor.xyz * 1.0);\nhighp float blend = 100.0 / Colors;\ngl_FragColor = HSVToRGB(\n  awesome.x * 360.0,\n  ceil(awesome.y * Colors) * blend,\n  ceil(awesome.z * Colors) * blend,\n  1.0);\n}\n//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":true,"savedVarState":{"u_skin":"Pepper","Colors":"2"}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float Colors;\n\nhighp vec3 rgb2hsv(highp vec3 c)\n{\n    highp vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    highp vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    highp vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    highp float d = q.x - min(q.w, q.y);\n    highp float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n//Fragment Shader\n\n//Vertex Shader\nvoid main() {\ngl_FragColor = v_color;\n\ngl_FragColor = texture2D(u_skin,v_texCoord);\nhighp vec3 awesome = rgb2hsv(gl_FragColor.xyz * 1.0);\nhighp float blend = 100.0 / Colors;\ngl_FragColor = HSVToRGB(\n  awesome.x * 360.0,\n  ceil(awesome.y * Colors) * blend,\n  ceil(awesome.z * Colors) * blend,\n  1.0);\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float Colors;\n\nhighp vec3 rgb2hsv(highp vec3 c)\n{\n    highp vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n    highp vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n    highp vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n    highp float d = q.x - min(q.w, q.y);\n    highp float e = 1.0e-10;\n    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n}\n\n//Fragment Shader\n\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},"modifyDate":1715990700089},
    "Glitchy" : {"projectData":{"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_pixel","id":"qFL#_7Lh0;Ep18cW[2gg","x":27,"y":168,"next":{"block":{"type":"variables_variable_set","id":"tQlC1zj{{pT-LolK:3Ze","fields":{"VAR":{"id":"hat_direction"}},"inputs":{"VALUE":{"shadow":{"type":"vec2_reporter","id":"sCe`eQqors.-u%~g]w$I","fields":{"x":0,"y":0}},"block":{"type":"operators_mul","id":"!88-`hd4O2%V*T]OZs)i","inputs":{"A":{"shadow":{"type":"number_reporter","id":"u8z;e_tm75b$_YA_IA8P","fields":{"NUMBER":0.015}}},"B":{"shadow":{"type":"number_reporter","id":"HJ,uSjn-0WyAVUKVJy,a","fields":{"NUMBER":0}},"block":{"type":"vector_vec2","id":"JX0UE-fZTm!y+`F!^Z]B","inputs":{"x":{"shadow":{"type":"number_reporter","id":"+Ng6up1f@$V)`bEW`_re","fields":{"NUMBER":0}},"block":{"type":"operators_arith","id":"VY,hk~Xv6VG2o;tb;NvY","fields":{"arithmatic":"sin"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"UV,|Wdn5KMfIk!VHT4u%","fields":{"NUMBER":0}},"block":{"type":"operators_add","id":"`WU4ZDC]9=I{PAOyD4y@","inputs":{"A":{"shadow":{"type":"number_reporter","id":"lve[6gWV?oLq,k!8gI74","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"Hw48Xy4HaGPh@/HJ:o|i","inputs":{"A":{"shadow":{"type":"number_reporter","id":"2sX;3k0IXr%`Kdu1#(~P","fields":{"NUMBER":10}}},"B":{"shadow":{"type":"number_reporter","id":"lwL1s9@b!6*1Pr2$d[57","fields":{"NUMBER":0}},"block":{"type":"sensing_timer","id":":k$Tr.#@L97ISEYO[_yd"}}}}},"B":{"shadow":{"type":"number_reporter","id":"LR8!|.H/C4cCCYRHz7Q,","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"XIztbE/VUO.V*1t#t}~v","inputs":{"A":{"shadow":{"type":"number_reporter","id":"v03A?d@(l@hi8eB?:g{W","fields":{"NUMBER":20}}},"B":{"shadow":{"type":"number_reporter","id":"_A6;rjImV]vrw}I)BStr","fields":{"NUMBER":0}},"block":{"type":"operators_mod","id":"|%rtSzGkQ)e[Ohx0:wp_","inputs":{"A":{"shadow":{"type":"number_reporter","id":".RXSs;+w.OcIUn[!DWA;","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"8QLRI#eZC%oJ|AmBD6eW","inputs":{"A":{"shadow":{"type":"number_reporter","id":"5=?$:sOx)/Q|gn9T+7`[","fields":{"NUMBER":0.05}},"block":{"type":"sensing_screenU","id":"u!HLZ=$F|(8sH=KN4f65"}},"B":{"shadow":{"type":"number_reporter","id":"y_ga)1WxUI_Z^/OO4;P$","fields":{"NUMBER":500}}}}}},"B":{"shadow":{"type":"number_reporter","id":"ZINv8_B[DZV#g=`zy1-[","fields":{"NUMBER":1}}}}}}}}}}}}}}},"y":{"shadow":{"type":"number_reporter","id":"(SI_`w~K5;gbkJjxZ;6g","fields":{"NUMBER":0}},"block":{"type":"operators_arith","id":"Ps[)[eNjp{$+b2pc|t+1","fields":{"arithmatic":"cos"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"a}35ZWrRFV`aLu^]r_Y,","fields":{"NUMBER":0}},"block":{"type":"operators_add","id":";zLCf2oQKVM-_z(81!j`","inputs":{"A":{"shadow":{"type":"number_reporter","id":"6Vg1[!Zw%!].`EXq{;*5","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"HFBLF.fcO:vaVxd3_rvu","inputs":{"A":{"shadow":{"type":"number_reporter","id":"?}3G^-cht5!V~4kJsOqo","fields":{"NUMBER":10}}},"B":{"shadow":{"type":"number_reporter","id":"05v:lv*0R+[;e~8~!3(#","fields":{"NUMBER":0}},"block":{"type":"sensing_timer","id":"iQU:E6NDj$v3D#^g7[ly"}}}}},"B":{"shadow":{"type":"number_reporter","id":"LR8!|.H/C4cCCYRHz7Q,","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"#O%S,7^}CO97VrMqysLq","inputs":{"A":{"shadow":{"type":"number_reporter","id":"aon,B7(-xh:xOpFnx*k2","fields":{"NUMBER":20}}},"B":{"shadow":{"type":"number_reporter","id":"CL)eY*pRx{F:Z2321MK@","fields":{"NUMBER":0}},"block":{"type":"operators_mod","id":",d8[L[YzCY+;rA,2Wq8e","inputs":{"A":{"shadow":{"type":"number_reporter","id":".RXSs;+w.OcIUn[!DWA;","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"NKfLef+)a.y+wc#A41Av","inputs":{"A":{"shadow":{"type":"number_reporter","id":"5=?$:sOx)/Q|gn9T+7`[","fields":{"NUMBER":0.05}},"block":{"type":"sensing_screenV","id":"p$L89Q3@c9a.PR1KtrMI"}},"B":{"shadow":{"type":"number_reporter","id":"HJ,uSjn-0WyAVUKVJy,a","fields":{"NUMBER":500}}}}}},"B":{"shadow":{"type":"number_reporter","id":"o:_kI0K6gpd=BM~S]#^)","fields":{"NUMBER":1}}}}}}}}}}}}}}}}}}}}}},"next":{"block":{"type":"variables_variable_set","id":"fdawqjJfxX#mR[W{p}kW","fields":{"VAR":{"id":"hat_UV"}},"inputs":{"VALUE":{"shadow":{"type":"vec2_reporter","id":"X+tq(+ki*A1LQQ*brc*{","fields":{"x":0,"y":0}},"block":{"type":"looks_pixUV","id":",A,*3$};|[sZ-5/gUXM3"}}},"next":{"block":{"type":"variables_variable_set","id":"o}$.fg}{~O!9vvM(i4nO","fields":{"VAR":{"id":"hat_UV"}},"inputs":{"VALUE":{"shadow":{"type":"vec2_reporter","id":"hZ0m4S+;uuyHyGxpuOhx","fields":{"x":0,"y":0}},"block":{"type":"operators_add","id":"`vgoK!,Jy}8wM/+Hf+yh","inputs":{"A":{"shadow":{"type":"number_reporter","id":"6Vg1[!Zw%!].`EXq{;*5","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"9lwZ0+}S*3@[ChJFp-du","extraState":{"variableData":{"type":"vec2","mainText":"hat UV"}}}},"B":{"shadow":{"type":"number_reporter","id":"LR8!|.H/C4cCCYRHz7Q,","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"nM(k@EcCiGBCD3_-8?(4","inputs":{"A":{"shadow":{"type":"number_reporter","id":"ta@ELnQ:a`%Ke8tS5Vs8","fields":{"NUMBER":0.005}}},"B":{"shadow":{"type":"number_reporter","id":"$f$w!k(}sJmnx_).NwRN","fields":{"NUMBER":0}},"block":{"type":"vector_vec2","id":"z`NqUGJ=G9c=h-*6[xzB","inputs":{"x":{"shadow":{"type":"number_reporter","id":"+Ng6up1f@$V)`bEW`_re","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"PVE6]6zQY:yuC;6mKS0q","inputs":{"A":{"shadow":{"type":"number_reporter","id":"v:~5=+J9IJ#7di7jMZEy","fields":{"NUMBER":0.05}},"block":{"type":"operators_arith","id":"G_|y$gpP/XJG+DK:(O{R","fields":{"arithmatic":"cos"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"UV,|Wdn5KMfIk!VHT4u%","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"O*u?D62ZE@d}f/z?J4l}","inputs":{"A":{"shadow":{"type":"number_reporter","id":"#J0!9/QE%YA%*nTICVrS","fields":{"NUMBER":0.05}},"block":{"type":"operators_add","id":"UYQ?M@xRu(JvfGth3DE|","inputs":{"A":{"shadow":{"type":"number_reporter","id":"6Vg1[!Zw%!].`EXq{;*5","fields":{"NUMBER":0}},"block":{"type":"sensing_screenV","id":"p`EAU!tW_V(`{n_Zp@;h"}},"B":{"shadow":{"type":"number_reporter","id":"WANY{KJmp:VSM5|-Mp-v","fields":{"NUMBER":0}},"block":{"type":"sensing_timer","id":"5QZuFEgb(}3/xMD{T)-h"}}}}},"B":{"shadow":{"type":"number_reporter","id":"I){p}_JwX|/3S~Dsl-{5","fields":{"NUMBER":200}}}}}}}}},"B":{"shadow":{"type":"number_reporter","id":":Ua3aT@X5q,2iUkx=tQf","fields":{"NUMBER":1}}}}}},"y":{"shadow":{"type":"number_reporter","id":"(SI_`w~K5;gbkJjxZ;6g","fields":{"NUMBER":0}},"block":{"type":"operators_arith","id":"}0/`U6]V]lWyuc?A16N?","fields":{"arithmatic":"cos"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"UV,|Wdn5KMfIk!VHT4u%","fields":{"NUMBER":0}},"block":{"type":"operators_add","id":"qj5)J$+Ls%@Tonc5jS)E","inputs":{"A":{"shadow":{"type":"number_reporter","id":"6Vg1[!Zw%!].`EXq{;*5","fields":{"NUMBER":0}},"block":{"type":"operators_pow","id":"39CE]5y}S6-](sIpa)Qv","inputs":{"A":{"shadow":{"type":"number_reporter","id":"O[B2Pt6Ul$zcMv:[AfFl","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"[H.k)15k=|lE4,G|G(ub","inputs":{"A":{"shadow":{"type":"number_reporter","id":"RB~mimLu61?Qlm8?UvUg","fields":{"NUMBER":0.05}},"block":{"type":"sensing_screenV","id":":Fbmn|m]`w!08+5ps*Uk"}},"B":{"shadow":{"type":"number_reporter","id":"7#?uLhQ1!44VR9k!bxZ/","fields":{"NUMBER":20}}}}}},"B":{"shadow":{"type":"number_reporter","id":"$=/2vq@z:1+u?nsZ5EB:","fields":{"NUMBER":2}}}}}},"B":{"shadow":{"type":"number_reporter","id":"/5O7am:Qe`RbYiUMPh5|","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"79{5H2^rzTbYDRTxGU5v","inputs":{"A":{"shadow":{"type":"number_reporter","id":"kRz[%%)0E-KUQ?KBhd-Z","fields":{"NUMBER":0.05}},"block":{"type":"sensing_timer","id":"Hr%UoY1;]@HEJaQTP;Vj"}},"B":{"shadow":{"type":"number_reporter","id":"?{5]o^G/R=zh3]#6+Jrn","fields":{"NUMBER":10}}}}}}}}}}}}}}}}}}}}}},"next":{"block":{"type":"looks_setPixColor","id":"ooXL_(0AIAj1GwK6KFd_","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"u0TR1$f#Zo/rt8rnhjm9","fields":{"COLOUR":"#0000ff"}},"block":{"type":"vector_vec4","id":"hi!OC7DVc~5?.OXDU|ko","inputs":{"x":{"shadow":{"type":"number_reporter","id":"9O-P7kIKoU.LixBT/l[e","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"e7|L-ERJzRy|eACO0S4i","fields":{"coordinate":"x"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"CKgqVzMp(o)n0nsPMZ5c","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"},"block":{"type":"operators_sub","id":"Y%[pf*;Sv0a_/^xW~V|9","inputs":{"A":{"shadow":{"type":"number_reporter","id":"o~jgaaC,ki]W9FlKt+p,","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"vJ8dXXHvZ?Yk8^tgH)|O","extraState":{"variableData":{"type":"vec2","mainText":"hat UV"}}}},"B":{"shadow":{"type":"number_reporter","id":"=?j^@zE7t-%T2R@W|N+Z","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"if1CVxRv-?Y,Jg+Wi_0C","extraState":{"variableData":{"type":"vec2","mainText":"hat direction"}}}}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"|iv-+;S$F^0X8:Ul}{Zo","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"y":{"shadow":{"type":"number_reporter","id":"IpHiBR$n,=_]EGXv1k2O","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"b!1?6%ZVC#Q!o@~h22G,","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"osDSfdS|=DU{FIDpO*Rj","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"663mi,Z7e~B{jyT8fR./"},"block":{"type":"variables_variable_reporter","id":"gEntMaPSeKs|7XZjMRB2","extraState":{"variableData":{"type":"vec2","mainText":"hat UV"}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"F,G2{EjQ9_CTFCYsVYG!","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"z":{"shadow":{"type":"number_reporter","id":":S^T#n5S7RaTy;SmYSic","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"Oa])=7Q}n{q!/LTsUvOy","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"Oz|z|k60MFo`_!9=V~SZ","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_sample_texture","id":"fgzi|m^+kL@m8u2Jr9C*","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"},"block":{"type":"operators_add","id":"AkT@`DQwcX[%{AK)}x_7","inputs":{"A":{"shadow":{"type":"number_reporter","id":"b{!Vr[_:f+58+(Z9Ta}c","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":".LaV9tT.0!zG,BB`0zyR","extraState":{"variableData":{"type":"vec2","mainText":"hat UV"}}}},"B":{"shadow":{"type":"number_reporter","id":"K=a3h_@RQnk}XXbpe##t","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"kVoN|2-^f|Dio2riEu^C","extraState":{"variableData":{"type":"vec2","mainText":"hat direction"}}}}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"ib@1beMe7,|ii`]:|4c/","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}},"w":{"shadow":{"type":"number_reporter","id":"#F@]@S|$aN,{m2.oe9SZ","fields":{"NUMBER":1}}}}}}}}}}}}}}}}]},"variables":[{"name":"uniform u_skin","id":"uniform_u_skin","type":"texture"},{"name":"hat direction","id":"hat_direction","type":"vec2"},{"name":"hat UV","id":"hat_UV","type":"vec2"}]},"dynamicDat":{"dynamic_variables":[{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"vec2","mainText":"hat direction"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"vec2","mainText":"hat UV"}}},{"type":"duplicate","of":"variable_set"},{"type":"duplicate","of":"variable_change"},{"type":"duplicate","of":"variable_multiply"},{"type":"duplicate","of":"variable_divide"}],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\n//Fragment Shader\nvoid fragment() {\ngl_FragColor = v_color;\nhighp vec2 direction = vec2(1);\nhighp vec2 UV = vec2(1);\n\n\ndirection = vec2((float(0.015) * vec2(sin(((float(10) * u_timer) + (float(20) * mod(((gl_FragCoord.x / u_res.x) * float(500)),float(1))))),cos(((float(10) * u_timer) + (float(20) * mod(((gl_FragCoord.y / u_res.y) * float(500)),float(1))))))));\n\nUV = vec2(v_texCoord);\n\nUV = vec2((UV + (float(0.005) * vec2((cos((((gl_FragCoord.y / u_res.y) + u_timer) * float(200))) * float(1)),cos((pow(((gl_FragCoord.y / u_res.y) * float(20)), float(2)) + (u_timer * float(10))))))));\n\ngl_FragColor = vec4(texture2D(u_skin,(UV - direction)).x,texture2D(u_skin,UV).y,texture2D(u_skin,(UV + direction)).z,float(1));\n}//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":false,"savedVarState":{"seperation":"0.01"}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_FragColor = v_color;\nhighp vec2 direction = vec2(1);\nhighp vec2 UV = vec2(1);\n\n\ndirection = vec2((float(0.015) * vec2(sin(((float(10) * u_timer) + (float(20) * mod(((gl_FragCoord.x / u_res.x) * float(500)),float(1))))),cos(((float(10) * u_timer) + (float(20) * mod(((gl_FragCoord.y / u_res.y) * float(500)),float(1))))))));\n\nUV = vec2(v_texCoord);\n\nUV = vec2((UV + (float(0.005) * vec2((cos((((gl_FragCoord.y / u_res.y) + u_timer) * float(200))) * float(1)),cos((pow(((gl_FragCoord.y / u_res.y) * float(20)), float(2)) + (u_timer * float(10))))))));\n\ngl_FragColor = vec4(texture2D(u_skin,(UV - direction)).x,texture2D(u_skin,UV).y,texture2D(u_skin,(UV + direction)).z,float(1));\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},"modifyDate":1715987464227},
    "Sepia" : {"projectData":{"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_pixel","id":"qFL#_7Lh0;Ep18cW[2gg","x":27,"y":168,"next":{"block":{"type":"looks_setPixColor","id":"ooXL_(0AIAj1GwK6KFd_","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"u0TR1$f#Zo/rt8rnhjm9","fields":{"COLOUR":"#0000ff"}},"block":{"type":"looks_sample_texture","id":"CKgqVzMp(o)n0nsPMZ5c","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"|iv-+;S$F^0X8:Ul}{Zo","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}},"next":{"block":{"type":"looks_setPixColor","id":".AKrH#pguMztk,f0xt*W","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"?EW;cY%h3+3n=y+pp)3g","fields":{"COLOUR":"#0000ff"}},"block":{"type":"vector_vec4","id":"i$OB!~KxzeFgT{W;-]PO","inputs":{"x":{"shadow":{"type":"number_reporter","id":"]*~un9L+`lQyScM*/c6o","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"ad)3u)QrYQvRih_.kM#3","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"y":{"shadow":{"type":"number_reporter","id":"sfCfUMVJO/$;1:Vv])ID","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"u?!cJ2+w.`EYj:OLnq,O","inputs":{"A":{"shadow":{"type":"number_reporter","id":"`xi$mgrv@4xC*A29`v}V","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"wQsPQ{ej#T+Yws%bE9#+","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"B":{"shadow":{"type":"number_reporter","id":"$7]JJoF@xiIS[jO~@1;@","fields":{"NUMBER":0.75}}}}}},"z":{"shadow":{"type":"number_reporter","id":"H~L{AUY*o8ngRV*?-+bg","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"5X_)pEBK9oHjd6e.0h7H","inputs":{"A":{"shadow":{"type":"number_reporter","id":"`xi$mgrv@4xC*A29`v}V","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"H@OuXYj{vVS59uwIcV2#","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"B":{"shadow":{"type":"number_reporter","id":"vd=9)oc4o]0R`z[{E-G#","fields":{"NUMBER":0.5}}}}}},"w":{"shadow":{"type":"number_reporter","id":"[,e*O0MRLe7[q5pDfBP;","fields":{"NUMBER":1}}}}}}}}}}}},{"type":"myblocks_customBlockDef","id":"+Wmf.?SKR9UDo`F9gD;j","x":95,"y":606,"fields":{"type":"highp float"},"inputs":{"name":{"shadow":{"type":"string_reporter","id":"dr!jNu)IZaSsyZ[s^;a{","fields":{"STRING":"get brightest color"}}},"code":{"block":{"type":"variables_variable_set","id":"5#fkaq/ZbfuS@7tuI:!P","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"aAmz96#~G]K@oOi.c8^E","fields":{"coordinate":"x"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"em-33P;b=Tew)fpa%-wn"}}}}}},"next":{"block":{"type":"controls_if","id":"M6WK~@?(b:G[yhb?y4z1","inputs":{"condition":{"block":{"type":"operators_equalLess","id":"sQ@|KZCahz}7UNxt5k%5","inputs":{"A":{"shadow":{"type":"number_reporter","id":"E1dDTM.GmahDQx9n/NMZ","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"$kSM_Y~Sf3ncp9tEtOr*","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}},"B":{"shadow":{"type":"number_reporter","id":"^.@k3O~9Mgi5fCH:d2pX","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"ggU6szrv[I.@.m49o(74","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"Qm|CY:GQ!Ko0VA,ZqVCU"}}}}}}}},"true":{"block":{"type":"variables_variable_set","id":"4Tfqiqcor0/ZiqGia.-%","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"eQ(V:LHYZ+;tgsD5wEH0","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":",qp$wCq%WfZwPd,{]F~W"}}}}}}}}},"next":{"block":{"type":"controls_if","id":"3EY$/B`}gN1slke!@H{*","inputs":{"condition":{"block":{"type":"operators_equalLess","id":"gyW41b~}yNlu+!ygYqbA","inputs":{"A":{"shadow":{"type":"number_reporter","id":"E1dDTM.GmahDQx9n/NMZ","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"/tBiqNI8bKEjj^i~4O9n","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}},"B":{"shadow":{"type":"number_reporter","id":"^.@k3O~9Mgi5fCH:d2pX","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"1y~517{f~7wsIKFag.F8","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"BwE?u_arM(L~4Qs-),[2"}}}}}}}},"true":{"block":{"type":"variables_variable_set","id":"@%Ow_9Bm:+LE7(~1{PnN","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"ahRg{VY/x_dg4ff#{R|#","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"CMyCGvzws-ja(tCXP?_["}}}}}}}}},"next":{"block":{"type":"myblocks_customBlockReturn","id":"Va4cwV6:dDf,A.$5V,2N","inputs":{"return":{"shadow":{"type":"number_reporter","id":"R-N3qkSPJ-d?,)}:GMPX","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"5[(,/2rHiOMyxHS!K1sj","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}}}}}}}}}}}}}]},"variables":[{"name":"uniform u_skin","id":"uniform_u_skin","type":"texture"},{"name":"uniform seperation","id":"uniform_seperation","type":"float"},{"name":"hat brightest","id":"hat_brightest","type":"float"}]},"dynamicDat":{"dynamic_variables":[{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"uniform seperation"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"hat brightest"}}},{"type":"duplicate","of":"variable_set"},{"type":"duplicate","of":"variable_change"},{"type":"duplicate","of":"variable_multiply"},{"type":"duplicate","of":"variable_divide"}],"dynamic_myblocks":[{"type":"duplicate","of":"customBlockExecute_Reporter","tooltip":"Your custom block!","extraData":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\nvoid fragment() {\ngl_FragColor = v_color;\nhighp float brightest = float(1);\n\n\ngl_FragColor = texture2D(u_skin,v_texCoord);\ngl_FragColor = vec4(get_brightest_color(),(get_brightest_color() * float(0.75)),(get_brightest_color() * float(0.5)),float(1));\n}\nhighp float get_brightest_color() {\nhighp float brightest = float(1);\n\n  brightest = float(gl_FragColor.x);\n\n  if (brightest <= gl_FragColor.y) {\n    brightest = float(gl_FragColor.y);\n\n  }\n  if (brightest <= gl_FragColor.z) {\n    brightest = float(gl_FragColor.z);\n\n  }\n  return float(brightest);\n\n}\n//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":false,"savedVarState":{"seperation":"0.01"}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\n\nhighp float get_brightest_color() {\nhighp float brightest = float(1);\n\n  brightest = float(gl_FragColor.x);\n\n  if (brightest <= gl_FragColor.y) {\n    brightest = float(gl_FragColor.y);\n\n  }\n  if (brightest <= gl_FragColor.z) {\n    brightest = float(gl_FragColor.z);\n\n  }\n  return float(brightest);\n\n}\n//Vertex Shader\nvoid main() {\ngl_FragColor = v_color;\nhighp float brightest = float(1);\n\n\ngl_FragColor = texture2D(u_skin,v_texCoord);\ngl_FragColor = vec4(get_brightest_color(),(get_brightest_color() * float(0.75)),(get_brightest_color() * float(0.5)),float(1));\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float seperation;\n\n//Fragment Shader\n\nhighp float get_brightest_color() {\nhighp float brightest = float(1);\n\n  brightest = float(vec4(1).x);\n\n  if (brightest <= vec4(1).y) {\n    brightest = float(vec4(1).y);\n\n  }\n  if (brightest <= vec4(1).z) {\n    brightest = float(vec4(1).z);\n\n  }\n  return float(brightest);\n\n}\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},"modifyDate":1715993563442},
    "Stable VHS Shader" : {"projectData":{"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_pixel","id":"qFL#_7Lh0;Ep18cW[2gg","x":27,"y":168,"next":{"block":{"type":"looks_setPixColor","id":"ooXL_(0AIAj1GwK6KFd_","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"u0TR1$f#Zo/rt8rnhjm9","fields":{"COLOUR":"#0000ff"}},"block":{"type":"looks_sample_texture","id":"CKgqVzMp(o)n0nsPMZ5c","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"|iv-+;S$F^0X8:Ul}{Zo","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}},"next":{"block":{"type":"looks_setPixColor","id":".AKrH#pguMztk,f0xt*W","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"?EW;cY%h3+3n=y+pp)3g","fields":{"COLOUR":"#0000ff"}},"block":{"type":"vector_vec4","id":"i$OB!~KxzeFgT{W;-]PO","inputs":{"x":{"shadow":{"type":"number_reporter","id":"]*~un9L+`lQyScM*/c6o","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"ad)3u)QrYQvRih_.kM#3","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"y":{"shadow":{"type":"number_reporter","id":"sfCfUMVJO/$;1:Vv])ID","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"u?!cJ2+w.`EYj:OLnq,O","inputs":{"A":{"shadow":{"type":"number_reporter","id":"`xi$mgrv@4xC*A29`v}V","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"wQsPQ{ej#T+Yws%bE9#+","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"B":{"shadow":{"type":"number_reporter","id":"$7]JJoF@xiIS[jO~@1;@","fields":{"NUMBER":0.75}}}}}},"z":{"shadow":{"type":"number_reporter","id":"H~L{AUY*o8ngRV*?-+bg","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"5X_)pEBK9oHjd6e.0h7H","inputs":{"A":{"shadow":{"type":"number_reporter","id":"`xi$mgrv@4xC*A29`v}V","fields":{"NUMBER":0}},"block":{"type":"myblocks_customBlockExecute_Reporter","id":"H@OuXYj{vVS59uwIcV2#","extraState":{"customBlockData":{"type":"highp float","mainText":"get brightest color","scriptTarget":"get_brightest_color","arguments":[]}}}},"B":{"shadow":{"type":"number_reporter","id":"vd=9)oc4o]0R`z[{E-G#","fields":{"NUMBER":0.5}}}}}},"w":{"shadow":{"type":"number_reporter","id":"[,e*O0MRLe7[q5pDfBP;","fields":{"NUMBER":1}}}}}}}}}}}},{"type":"myblocks_customBlockDef","id":"+Wmf.?SKR9UDo`F9gD;j","x":95,"y":606,"fields":{"type":"highp float"},"inputs":{"name":{"shadow":{"type":"string_reporter","id":"dr!jNu)IZaSsyZ[s^;a{","fields":{"STRING":"get brightest color"}}},"code":{"block":{"type":"variables_variable_set","id":"5#fkaq/ZbfuS@7tuI:!P","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"aAmz96#~G]K@oOi.c8^E","fields":{"coordinate":"x"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"em-33P;b=Tew)fpa%-wn"}}}}}},"next":{"block":{"type":"controls_if","id":"M6WK~@?(b:G[yhb?y4z1","inputs":{"condition":{"block":{"type":"operators_equalLess","id":"sQ@|KZCahz}7UNxt5k%5","inputs":{"A":{"shadow":{"type":"number_reporter","id":"E1dDTM.GmahDQx9n/NMZ","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"$kSM_Y~Sf3ncp9tEtOr*","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}},"B":{"shadow":{"type":"number_reporter","id":"^.@k3O~9Mgi5fCH:d2pX","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"ggU6szrv[I.@.m49o(74","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"Qm|CY:GQ!Ko0VA,ZqVCU"}}}}}}}},"true":{"block":{"type":"variables_variable_set","id":"4Tfqiqcor0/ZiqGia.-%","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"eQ(V:LHYZ+;tgsD5wEH0","fields":{"coordinate":"y"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":",qp$wCq%WfZwPd,{]F~W"}}}}}}}}},"next":{"block":{"type":"controls_if","id":"3EY$/B`}gN1slke!@H{*","inputs":{"condition":{"block":{"type":"operators_equalLess","id":"gyW41b~}yNlu+!ygYqbA","inputs":{"A":{"shadow":{"type":"number_reporter","id":"E1dDTM.GmahDQx9n/NMZ","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"/tBiqNI8bKEjj^i~4O9n","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}},"B":{"shadow":{"type":"number_reporter","id":"^.@k3O~9Mgi5fCH:d2pX","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"1y~517{f~7wsIKFag.F8","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"BwE?u_arM(L~4Qs-),[2"}}}}}}}},"true":{"block":{"type":"variables_variable_set","id":"@%Ow_9Bm:+LE7(~1{PnN","fields":{"VAR":{"id":"hat_brightest"}},"inputs":{"VALUE":{"shadow":{"type":"number_reporter","id":"Tlz3lBvu;m~o|8$uITZF","fields":{"NUMBER":0}},"block":{"type":"vector_getitem","id":"ahRg{VY/x_dg4ff#{R|#","fields":{"coordinate":"z"},"inputs":{"vector":{"shadow":{"type":"vec4_reporter","id":"dd5]$`kIk8ZE*BNbJLZh","fields":{"x":0,"y":0,"z":0,"w":0}},"block":{"type":"looks_getPixColor","id":"CMyCGvzws-ja(tCXP?_["}}}}}}}}},"next":{"block":{"type":"myblocks_customBlockReturn","id":"Va4cwV6:dDf,A.$5V,2N","inputs":{"return":{"shadow":{"type":"number_reporter","id":"R-N3qkSPJ-d?,)}:GMPX","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"5[(,/2rHiOMyxHS!K1sj","extraState":{"variableData":{"type":"float","mainText":"hat brightest"}}}}}}}}}}}}}}}]},"variables":[{"name":"uniform u_skin","id":"uniform_u_skin","type":"texture"},{"name":"uniform seperation","id":"uniform_seperation","type":"float"},{"name":"hat brightest","id":"hat_brightest","type":"float"}]},"dynamicDat":{"dynamic_variables":[{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"uniform seperation"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"hat brightest"}}},{"type":"duplicate","of":"variable_set"},{"type":"duplicate","of":"variable_change"},{"type":"duplicate","of":"variable_multiply"},{"type":"duplicate","of":"variable_divide"}],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x;\n\tlook.y = mod(look.y, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\nvoid fragment()\n{\n\thighp vec2 uv = gl_FragCoord.xy / u_res.xy;\n\tuv = screenDistort(uv);\n\thighp vec3 video = getVideo(uv);\n\thighp float vigAmt = 3.+.3*sin(u_timer + 5.*cos(u_timer*5.));\n\thighp float vignette = (1.-vigAmt*(uv.y-.5)*(uv.y-.5))*(1.-vigAmt*(uv.x-.5)*(uv.x-.5));\n\t\n\tvideo += stripes(uv);\n\tvideo *= vignette;\n\tvideo *= (12.+mod(uv.y*30.+u_timer,1.))/13.;\n\t\n\tgl_FragColor = vec4(video,1.0);\n}//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * u_transform[0][1],0.001,1);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":true,"savedVarState":{}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x;\n\tlook.y = mod(look.y, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\n//Vertex Shader\nvoid main()\n{\n\thighp vec2 uv = gl_FragCoord.xy / u_res.xy;\n\tuv = screenDistort(uv);\n\thighp vec3 video = getVideo(uv);\n\thighp float vigAmt = 3.+.3*sin(u_timer + 5.*cos(u_timer*5.));\n\thighp float vignette = (1.-vigAmt*(uv.y-.5)*(uv.y-.5))*(1.-vigAmt*(uv.x-.5)*(uv.x-.5));\n\t\n\tvideo += stripes(uv);\n\tvideo *= vignette;\n\tvideo *= (12.+mod(uv.y*30.+u_timer,1.))/13.;\n\t\n\tgl_FragColor = vec4(video,1.0);\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\nuniform sampler2D u_skin;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n/* License CC BY-NC-SA 4.0 Deed */\n/* https://creativecommons.org/licenses/by-nc-sa/4.0/ */\n\nhighp float onOff(highp float a, highp float b, highp float c)\n{\n\treturn step(c, sin(u_timer + a*cos(u_timer*b)));\n}\n\nhighp float ramp(highp float y, highp float start, highp float end)\n{\n\thighp float inside = step(start,y) - step(end,y);\n\thighp float fact = (y-start)/(end-start)*inside;\n\treturn (1.-fact) * inside;\n\t\n}\n\nhighp float stripes(highp vec2 uv)\n{\n\treturn ramp(mod(uv.y*4. + u_timer/2.+sin(u_timer + sin(u_timer*0.63)),1.),0.5,0.6);\n}\n\nhighp vec3 getVideo(highp vec2 uv)\n{\n\thighp vec2 look = uv;\n\thighp float window = 1./(1.+20.*(look.y-mod(u_timer/4.,1.))*(look.y-mod(u_timer/4.,1.)));\n\tlook.x = look.x;\n\tlook.y = mod(look.y, 1.);\n\thighp vec3 video = vec3(texture2D(u_skin,look));\n\treturn video;\n}\n\nhighp vec2 screenDistort(highp vec2 uv)\n{\n\tuv -= vec2(.5,.5);\n\tuv = uv*1.2*(1./1.2+2.*uv.x*uv.x*uv.y*uv.y);\n\tuv += vec2(.5,.5);\n\treturn uv;\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * u_transform[0][1],0.001,1);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},"modifyDate":1715994467400},
    "Pixelated" : {"projectData":{"blockDat":{"blocks":{"languageVersion":0,"blocks":[{"type":"events_pixel","id":"qFL#_7Lh0;Ep18cW[2gg","x":27,"y":168,"next":{"block":{"type":"looks_setPixColor","id":"ooXL_(0AIAj1GwK6KFd_","inputs":{"COLOR":{"shadow":{"type":"color_reporter","id":"u0TR1$f#Zo/rt8rnhjm9","fields":{"COLOUR":"#0000ff"}},"block":{"type":"looks_sample_texture","id":"fgzi|m^+kL@m8u2Jr9C*","inputs":{"UV":{"shadow":{"type":"looks_pixUV","id":"h,[jj?{oGGKF?+c2=vn2"},"block":{"type":"vector_vec2","id":"[`-ejo^R3qQOr{:mVx%Z","inputs":{"x":{"shadow":{"type":"number_reporter","id":"rmuH^Y}~_3H;coCkzEJK","fields":{"NUMBER":0}},"block":{"type":"operators_div","id":"81rJUF.{~wM.iQfjOJ*)","inputs":{"A":{"shadow":{"type":"number_reporter","id":";x6^-WLYoLZ}omJU-iOc","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"syecG2DiohkkKAv9f$t*","inputs":{"A":{"shadow":{"type":"number_reporter","id":"k?BZ|_Rk_=bW*WLnV-uD","fields":{"NUMBER":0}},"block":{"type":"operators_arith","id":"F]rt9fCIX*g)G7[7-#7Y","fields":{"arithmatic":"floor"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"tUV,o$lc8]EBBV4G5.84","fields":{"NUMBER":0}},"block":{"type":"operators_div","id":"TOn{:VO`;I6yG@;Q=D@W","inputs":{"A":{"shadow":{"type":"number_reporter","id":".!?]KL$xIoYZScTRiIKH","fields":{"NUMBER":0}},"block":{"type":"sensing_pixX","id":"-gb|o?rcdK2*mk*xZ;#b"}},"B":{"shadow":{"type":"number_reporter","id":"JW`~2bN3l4E9KYq7)TC?","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"d.LF#LD4#N41`7!tpeT5","extraState":{"variableData":{"type":"float","mainText":"uniform pixelAmount"}}}}}}}}}},"B":{"shadow":{"type":"number_reporter","id":"}9qb|bfX@BvqS}d|(vEN","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"C7pO$m%`oR!uss-BdXQi","extraState":{"variableData":{"type":"float","mainText":"uniform pixelAmount"}}}}}}},"B":{"shadow":{"type":"number_reporter","id":"JW`~2bN3l4E9KYq7)TC?","fields":{"NUMBER":0}},"block":{"type":"sensing_resX","id":"Xy@!)k]LTuc6X~*K_K1s"}}}}},"y":{"shadow":{"type":"number_reporter","id":"EX+^axD702aa=tj/w]1R","fields":{"NUMBER":0}},"block":{"type":"operators_div","id":"soI+/5a`,8i6nvTpD68j","inputs":{"A":{"shadow":{"type":"number_reporter","id":")T.GeJ=*{#:i`1]1.g;2","fields":{"NUMBER":0}},"block":{"type":"operators_mul","id":"}?WPhxG3+*]:U}~qtT4g","inputs":{"A":{"shadow":{"type":"number_reporter","id":"k?BZ|_Rk_=bW*WLnV-uD","fields":{"NUMBER":0}},"block":{"type":"operators_arith","id":"2sFM3,(s%oDJ;-wSJQIl","fields":{"arithmatic":"floor"},"inputs":{"A":{"shadow":{"type":"number_reporter","id":"tUV,o$lc8]EBBV4G5.84","fields":{"NUMBER":0}},"block":{"type":"operators_div","id":"hKSWp[jOBDwOZ+Sh53q^","inputs":{"A":{"shadow":{"type":"number_reporter","id":"heY3:EO0*:81itzYhCY}","fields":{"NUMBER":0}},"block":{"type":"sensing_pixY","id":"Zk`FRK}A0=-Pws[fr3Xl"}},"B":{"shadow":{"type":"number_reporter","id":"JW`~2bN3l4E9KYq7)TC?","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"LTM_I!cZMtodXGYywZ}D","extraState":{"variableData":{"type":"float","mainText":"uniform pixelAmount"}}}}}}}}}},"B":{"shadow":{"type":"number_reporter","id":"}9qb|bfX@BvqS}d|(vEN","fields":{"NUMBER":0}},"block":{"type":"variables_variable_reporter","id":"qjyShZ|enxA{XRQ0O-Ew","extraState":{"variableData":{"type":"float","mainText":"uniform pixelAmount"}}}}}}},"B":{"shadow":{"type":"number_reporter","id":"JW`~2bN3l4E9KYq7)TC?","fields":{"NUMBER":0}},"block":{"type":"sensing_resY","id":"b+-#omzCz5wZ;VN*nl_S"}}}}}}}},"TEXTURE":{"block":{"type":"variables_variable_reporter","id":"ib@1beMe7,|ii`]:|4c/","extraState":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}}}}}}}}}}]},"variables":[{"name":"uniform u_skin","id":"uniform_u_skin","type":"texture"},{"name":"uniform pixelAmount","id":"uniform_pixelAmount","type":"float"}]},"dynamicDat":{"dynamic_variables":[{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"texture","mainText":"uniform u_skin"}}},{"type":"duplicate","of":"variable_reporter","extraData":{"variableData":{"type":"float","mainText":"uniform pixelAmount"}}},{"type":"duplicate","of":"variable_set"},{"type":"duplicate","of":"variable_change"},{"type":"duplicate","of":"variable_multiply"},{"type":"duplicate","of":"variable_divide"}],"dynamic_myblocks":[]},"glsl":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float pixelAmount;\n\n//Fragment Shader\nvoid fragment() {\ngl_FragColor = v_color;\n\n\ngl_FragColor = texture2D(u_skin,vec2(((floor((gl_FragCoord.x / pixelAmount)) * pixelAmount) / u_res.x),((floor((gl_FragCoord.y / pixelAmount)) * pixelAmount) / u_res.y)));\n}//Vertex Shader\nvoid vertex() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}","isText":false,"savedVarState":{"seperation":"0.01","pixelAmount":"8"}},"fragShader":"//replacement shader\n//Base Variables\n\n\n\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float pixelAmount;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_FragColor = v_color;\n\n\ngl_FragColor = texture2D(u_skin,vec2(((floor((gl_FragCoord.x / pixelAmount)) * pixelAmount) / u_res.x),((floor((gl_FragCoord.y / pixelAmount)) * pixelAmount) / u_res.y)));\n}","vertShader":"//replacement shader\n//Base Variables\nattribute highp vec4 a_position;\nattribute highp vec4 a_color;\nattribute highp vec2 a_texCoord;\n \nvarying highp vec4 v_color;\nvarying highp vec2 v_texCoord;\n\nvarying highp float v_depth;\nuniform highp float u_timer;\nuniform highp mat4 u_transform;\n\n//Pen+ Textures\nuniform mediump vec2 u_res;\n\n//Base functions\nhighp float log10(highp float a) {\n  return log(a)/log(10.0);\n}\n\nhighp float eulernum(highp float a) {\n    return 2.718 * a;\n}\n\nhighp vec4 HSVToRGB(highp float hue, highp float saturation, highp float value, highp float a) {\n  highp float huePrime = mod(hue,360.0);\n  highp float c = (value/100.0) * (saturation/100.0);\n  highp float x = c * (1.0 - abs(mod(huePrime/60.0, 2.0) - 1.0));\n  highp float m = (value/100.0) - c;\n  highp float r = 0.0;\n  highp float g = 0.0;\n  highp float b = 0.0;\n  \n  if (huePrime >= 0.0 && huePrime < 60.0) {\n      r = c;\n      g = x;\n      b = 0.0;\n  } else if (huePrime >= 60.0 && huePrime < 120.0) {\n      r = x;\n      g = c;\n      b = 0.0;\n  } else if (huePrime >= 120.0 && huePrime < 180.0) {\n      r = 0.0;\n      g = c;\n      b = x;\n  } else if (huePrime >= 180.0 && huePrime < 240.0) {\n      r = 0.0;\n      g = x;\n      b = c;\n  } else if (huePrime >= 240.0 && huePrime < 300.0) {\n      r = x;\n      g = 0.0;\n      b = c;\n  } else if (huePrime >= 300.0 && huePrime < 360.0) {\n      r = c;\n      g = 0.0;\n      b = x;\n  }\n  r += m;\n  g += m;\n  b += m;\n  return vec4(r, g, b, a);\n}\n\nhighp vec4 rotation(highp vec4 invec4) {\n    return vec4(\n      (invec4.y) * u_transform[1][0] + (invec4.x) * u_transform[1][1],\n      (invec4.y) * u_transform[1][1] - (invec4.x) * u_transform[1][0],\n      invec4.zw\n    );\n  }\n    \nuniform sampler2D u_skin;\n\nuniform highp float pixelAmount;\n\n//Fragment Shader\n//Vertex Shader\nvoid main() {\ngl_Position = (rotation(a_position) + vec4(u_transform[0][2],u_transform[0][3],0,0)) * vec4(a_position.w * u_transform[0][0],a_position.w * -u_transform[0][1],1,1) - vec4(0,0,1,0);\nv_color = a_color;\nv_texCoord = a_texCoord;\n}"},
  }

  //Pen+ Addon API
  let penPlus; Scratch.vm.runtime.on("EXTENSION_ADDED", () => {penPlus = Scratch.vm.runtime.ext_obviousalexc_penPlus;})

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const renderer = runtime.renderer;
  const gl = renderer._gl;
  const twgl = renderer.exports.twgl;
  const oldDrawThese = renderer._drawThese;

  const GL_POS_FINDER = /gl_Position\s*=[\w\s\d[\]|&^%$#@!+=\-*\/,._()]*;/gm;
  const GL_POS_VAR = /vec4\s*a_position;/gm;

  let reRenderInfo = twgl.createBufferInfoFromArrays(gl, {
    a_position:    { numComponents: 4, data: [
      -1, -1, 0, 1,
      1, -1, 0, 1,
      1, 1, 0, 1,
      -1, -1, 0, 1,
      1, 1, 0, 1,
      -1, 1, 0, 1
    ]},
    a_texCoord: { numComponents: 2, data: [
      0,1,
      1,1,
      1,0,
      0,1,
      1,0,
      0,0
    ]},
    a_color: { numComponents: 4, data: [
      1,1,1,1,
      1,1,1,1,
      1,1,1,1,

      1,1,1,1,
      1,1,1,1,
      1,1,1,1
    ]}
  });

  const stageBufferAttachments = [
    {
      format: gl.RGBA,
      type: gl.UNSIGNED_BYTE,
      min: gl.LINEAR,
      wrap: gl.CLAMP_TO_EDGE,
      premultiplyAlpha: true,
    },
    { format: gl.DEPTH_STENCIL },
  ];
  const stageBuffer = twgl.createFramebufferInfo(gl, stageBufferAttachments);

  let currentFrameBuffer = null;
  let currentShader = null;

  let parentExtension = null;
  let shouldBeDirty = false;

  //Should add name to the thing.
  let spriteShaders = {};
  let recompiledShaders = {};

  class extension {
    //Awesome
    advDrawThese (drawables, drawMode, projection, opts = {}) {

      const gl = renderer._gl;
      let currentShader = null;

      const framebufferSpaceScaleDiffers = (
          'framebufferWidth' in opts && 'framebufferHeight' in opts &&
          opts.framebufferWidth !== renderer._nativeSize[0] && opts.framebufferHeight !== renderer._nativeSize[1]
      );

      const numDrawables = drawables.length;
      for (let drawableIndex = 0; drawableIndex < numDrawables; ++drawableIndex) {
          const drawableID = drawables[drawableIndex];

          // If we have a filter, check whether the ID fails
          if (opts.filter && !opts.filter(drawableID)) continue;

          const drawable = renderer._allDrawables[drawableID];
          /** @todo check if drawable is inside the viewport before anything else */

          // Hidden drawables (e.g., by a "hide" block) are not drawn unless
          // the ignoreVisibility flag is used (e.g. for stamping or touchingColor).
          if (!drawable.getVisible() && !opts.ignoreVisibility) continue;

          // drawableScale is the "framebuffer-pixel-space" scale of the drawable, as percentages of the drawable's
          // "native size" (so 100 = same as skin's "native size", 200 = twice "native size").
          // If the framebuffer dimensions are the same as the stage's "native" size, there's no need to calculate it.
          const drawableScale = framebufferSpaceScaleDiffers ? [
              drawable.scale[0] * opts.framebufferWidth / renderer._nativeSize[0],
              drawable.scale[1] * opts.framebufferHeight / renderer._nativeSize[1]
          ] : drawable.scale;

          // If the skin or texture isn't ready yet, skip it.
          if (!drawable.skin || !drawable.skin.getTexture(drawableScale)) continue;

          // Skip private skins, if requested.
          if (opts.skipPrivateSkins && drawable.skin.private) continue;

          const drawableShader = spriteShaders[drawableID]

          let uniforms = {};

          let effectBits = drawable.enabledEffects;
          effectBits &= Object.prototype.hasOwnProperty.call(opts, 'effectMask') ? opts.effectMask : effectBits;

          const newShader = (spriteShaders[drawableID] && penPlus.shaders[drawableShader] && recompiledShaders[spriteShaders[drawableID]]) ? 
          recompiledShaders[spriteShaders[drawableID]] : 
          renderer._shaderManager.getShader(drawMode, effectBits);

          // Manually perform region check. Do not create functions inside a
          // loop.
          // ! no
          if (renderer._regionId !== newShader) {
            renderer._doExitDrawRegion();
            renderer._regionId = newShader;

              currentShader = newShader;
              gl.useProgram(currentShader.program);
              twgl.setBuffersAndAttributes(gl, currentShader, renderer._bufferInfo);
              Object.assign(uniforms, {
                  u_projectionMatrix: projection
              });
          }

          Object.assign(uniforms,
              drawable.skin.getUniforms(drawableScale),
              drawable.getUniforms());

          // Apply extra uniforms after the Drawable's, to allow overwriting.
          if (opts.extraUniforms) {
              Object.assign(uniforms, opts.extraUniforms);
          }

          if (spriteShaders[drawableID] && penPlus.shaders[drawableShader]) {
            penPlus.programs[drawableShader].uniformDat.u_res = [
              gl.canvas.width,
              gl.canvas.height,
            ];
            penPlus.programs[drawableShader].uniformDat.u_timer = runtime.ioDevices.clock.projectTimer();
            
            penPlus.programs[drawableShader].uniformDat.u_transform = [
              1,1,0,0,
              0,1,0,0,
              0,0,0,0,
              0,0,0,0
            ]
            
            penPlus.programs[drawableShader].uniformDat.u_skin = drawable.skin.getTexture(drawableScale);

            shouldBeDirty = true;

            uniforms = Object.assign({},uniforms, penPlus.programs[drawableShader].uniformDat);
          }

          if (uniforms.u_skin) {
              twgl.setTextureParameters(
                  gl, uniforms.u_skin, {
                      minMag: drawable.skin.useNearest(drawableScale, drawable) ? gl.NEAREST : gl.LINEAR
                  }
              );
          }

          twgl.setUniforms(currentShader, uniforms);
          twgl.drawBufferInfo(gl, renderer._bufferInfo, gl.TRIANGLES);
      }

      renderer._regionId = null;
    }

    //Will allow us to use custom shaders within our entire stage.
    customDrawFunction() {
      if (!renderer.dirty) {
          return;
      }
      renderer.dirty = false;
      shouldBeDirty = false;

      renderer._doExitDrawRegion();

      const gl = renderer._gl;
      
      //Our injected code
      if (currentFrameBuffer) {
        twgl.resizeFramebufferInfo(
          gl,
          currentFrameBuffer,
          stageBufferAttachments,
          Scratch.Cast.toNumber(gl.canvas.width),
          Scratch.Cast.toNumber(gl.canvas.height)
        );

        twgl.bindFramebufferInfo(gl, currentFrameBuffer);
      }
      else {
        twgl.bindFramebufferInfo(gl, null);
      }

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(...renderer._backgroundColor4f);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const snapshotRequested = renderer._snapshotCallbacks.length > 0;
      renderer._drawThese(renderer._drawList, 'default', renderer._projection, {
        framebufferWidth: gl.canvas.width,
        framebufferHeight: gl.canvas.height,
        skipPrivateSkins: snapshotRequested
      });

      if (snapshotRequested) {
          const snapshot = gl.canvas.toDataURL();
          renderer._snapshotCallbacks.forEach(cb => cb(snapshot));
          renderer._snapshotCallbacks = [];
          // We need to make sure to always render next frame so that private skins
          // that were skipped this frame will become visible again shortly.
          renderer.dirty = true;
      }

      if (currentFrameBuffer) {
        if ((!penPlus.programs[currentShader])) {
          parentExtension.resetBuffer();
          //re-render if no shader is found.
          renderer.dirty = true;
          return;
        }

        twgl.bindFramebufferInfo(gl, null);
        gl.useProgram(penPlus.programs[currentShader].info.program);

        twgl.setBuffersAndAttributes(
          gl,
          penPlus.programs[currentShader].info,
          reRenderInfo
        );

        penPlus.programs[currentShader].uniformDat.u_skin = stageBuffer.attachments[0];
        penPlus.programs[currentShader].uniformDat.u_res = [
          gl.canvas.width,
          gl.canvas.height,
        ];
        penPlus.programs[currentShader].uniformDat.u_timer = runtime.ioDevices.clock.projectTimer();
        
        penPlus.programs[currentShader].uniformDat.u_transform = [
          1,1,0,0,
          0,1,0,0,
          0,0,0,0,
          0,0,0,0
        ]

        twgl.setUniforms(penPlus.programs[currentShader].info, penPlus.programs[currentShader].uniformDat);

        twgl.drawBufferInfo(gl, reRenderInfo);
        renderer.dirty = parentExtension.autoReRender;
      }

      if (shouldBeDirty) {
        renderer.dirty = parentExtension.autoReRender;
      }
    }

    addDefaultShaders() {
      if (penPlus) {
        Object.keys(defaultShaders).forEach(shaderName => {
          if (!penPlus.shaders[shaderName]) {
            if (defaultShaders[shaderName].projectData.projectData) {
              penPlus.saveShader(shaderName,{
                projectData: defaultShaders[shaderName].projectData.projectData,
                vertShader: defaultShaders[shaderName].projectData.vertShader,
                fragShader: defaultShaders[shaderName].projectData.fragShader
              });
            }
            else {
              penPlus.saveShader(shaderName,{
                projectData: defaultShaders[shaderName].projectData,
                vertShader: defaultShaders[shaderName].vertShader,
                fragShader: defaultShaders[shaderName].fragShader
              });
            }
          }

          setTimeout(() => {
            if (defaultParameters[shaderName]) {
              penPlus.programs[shaderName].uniformDat = defaultParameters[shaderName];
            }
          }, 33);

        });
      }
    }

    saveThingExists = false;

    addSaveListeners() {
      if (this.saveThingExists) return;

      if (penPlus) {
        console.log("Shaded : Adding Save Listener")
        this.saveThingExists = true;
        penPlus.addEventListener("shaderSaved", (event) => {
          console.log(`converting shader ${event.name} to sprite format!`);

          let convertedVertex = event.vertexShader.replaceAll(GL_POS_FINDER,"gl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position,0,1);");
          convertedVertex = convertedVertex.replaceAll(GL_POS_VAR,"vec2 a_position;");
          convertedVertex = "uniform highp mat4 u_projectionMatrix; uniform highp mat4 u_modelMatrix;\n" + convertedVertex;
          
          recompiledShaders[event.name] = twgl.createProgramInfo(gl,[
            convertedVertex,
            event.fragmentShader
          ]);
        });
      }
    }

    autoReRender = true;

    constructor() {
      parentExtension = this;
      renderer.draw = this.customDrawFunction;
      renderer._drawThese = this.advDrawThese;

      //Doing this for the modified version of clipping and blending.
      this.stageBuffer = stageBuffer;
      runtime.ext_obviousalexc_shaded = this;

      vm.runtime.on("targetWasRemoved", (clone) => {
        const cloneID = clone.drawableID;
        if (spriteShaders[cloneID]) {
          delete spriteShaders[cloneID];
        }
      });

      Scratch.vm.runtime.on("EXTENSION_ADDED", this.addSaveListeners);

      window.addEventListener("message", (event) => {
        let eventType = event.data.type;

        if (!eventType) return;

        switch (eventType) {
          case "EXTENSION_REQUEST":
            penPlus.IFrame.contentWindow.postMessage(
              {
                type: "ADD_EXTENSION",
                URL: "https://pen-group.github.io/extensions/extensions/ShadedStamps/shaderEditorExtension.js"
              },
              //Target URL
              penPlus.IFrame.src
            );
            break;

          default:
            break;
        }
      });
    }

    getInfo() {
      return {
        blocks: [
          {
            blockType:Scratch.BlockType.LABEL,
            text:"put a random pen+"
          },
          {
            blockType:Scratch.BlockType.LABEL,
            text:"block in to save shaders!"
          },
          {
            blockType:Scratch.BlockType.BUTTON,
            text:"Add Default Shaders",
            func:"addDefaultShaders"
          },
          {
            blockType:Scratch.BlockType.BUTTON,
            text:"Default Shader Parameters",
            func:"openParamMenu"
          },
          {
            opcode: "setStageShader",
            blockType: Scratch.BlockType.COMMAND,
            text: "use [shader] on the screen",
            hideFromPalette:true,
            arguments: {
              shader: {
                type: Scratch.ArgumentType.STRING,
                menu: "shadersAndStage",
              },
            },
          },
          {
            opcode: "setStageShaderAlt",
            blockType: Scratch.BlockType.COMMAND,
            text: "use [shader] on the screen",
            arguments: {
              shader: {
                type: Scratch.ArgumentType.STRING,
                menu: "shadersAndStageALT",
              },
            },
          },
          "---",
          {
            opcode: "compileShaderForSprite",
            blockType: Scratch.BlockType.COMMAND,
            text: "compile [shader] for sprite use",
            arguments: {
              shader: {
                type: Scratch.ArgumentType.STRING,
                menu: "shadersAndStageALT",
              },
            },
          },
          {
            opcode: "setSpriteShader",
            blockType: Scratch.BlockType.COMMAND,
            text: "use [shader] on myself",
            arguments: {
              shader: {
                type: Scratch.ArgumentType.STRING,
                menu: "shadersAndStageALT",
              },
            },
          },
          {
            opcode: "setExtraShader",
            blockType: Scratch.BlockType.COMMAND,
            text: "use [shader] on the [target]",
            arguments: {
              target: {
                type: Scratch.ArgumentType.STRING,
                menu: "extraTargets",
              },
              shader: {
                type: Scratch.ArgumentType.STRING,
                menu: "shadersAndStageALT",
              },
            },
          },
          {
            opcode: "getDescrepency",
            blockType: Scratch.BlockType.REPORTER,
            text: "scale multiplier of the [dimension]",
            arguments: {
              dimension: {
                type: Scratch.ArgumentType.STRING,
                menu: "dimensions",
              }
            },
          },
          {
            opcode: "setAutoReRender",
            blockType: Scratch.BlockType.COMMAND,
            text: "turn auto re-render [value]",
            hideFromPalette:true,
            arguments: {
              value: {
                type: Scratch.ArgumentType.STRING,
                menu: "autorender",
              }
            },
          },
          {
            opcode: "setSetting",
            blockType: Scratch.BlockType.COMMAND,
            text: "turn [setting] [value]",
            arguments: {
              setting: {
                type: Scratch.ArgumentType.STRING,
                menu: "settings",
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                menu: "autorender",
              }
            },
          },
          
        ],
        menus: {
          shaders: {
            items:"shaderMenu"
          },
          shadersAndStage: {
            items:"shaderMenuAndStage"
          },
          shadersAndStageALT: {
            items:"shaderMenuAndStage",
            acceptReporters:true
          },
          extraTargets: {
            items: "extraTargets"
          },
          dimensions: {
            items:["width","height"],
            acceptReporters:true
          },
          settings: {
            items:["auto re-render","compatibility mode"],
            acceptReporters:true
          },
          autorender: {
            items:["on","off"],
            acceptReporters:true
          }
        },
        docsURI: "https://pen-group.github.io/docs/?page=extensions%2Fshaded%2Fmain",
        blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMzguNzc2NjkiIGhlaWdodD0iMTM4Ljc3NjY5IiB2aWV3Qm94PSIwLDAsMTM4Ljc3NjY5LDEzOC43NzY2OSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMC42MTE2NiwtODAuNjExNjYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNzMuODQwMjMsOTcuNDA3MTljMy44MzM1LC0xLjYwMDYzIDMuNjM4MjgsMS40OTgyNSAyMi4wNjIwMSw0Ni42ODA2OWMxMC40ODkxNCwyNi40NDU3NCAxOC44MDY4OSw0OC4xMTk4MiAxNS45MjI1MSw0OS4wODc4M2MtNC4yMDMxOSwxLjcxNzMzIC0xMS41NzI4NywtMjAuMjM0OTMgLTIyLjA2MjAxLC00Ni42ODA2OWMtMTYuMTE3NDUsLTQzLjIzOTQ2IC0yMC40OTI4OSwtNDcuMzMwNzMgLTE1LjkyMjUxLC00OS4wODc4M3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjZDk5ZTgyIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNzIuOTQ5NzUsOTguMjE3NTJjMi4wOTk2MiwtMC44NzY2NyA4LjM1NTI4LDIyLjY1MDQ2IDEyLjAwMDQ5LDMwLjUxNTU5YzMuMDEwMjMsNi40OTUwNyAyLjYxOTAxLC01LjA4MTEgMTAuOTUyMDEsMTUuMzU0NzdjMTAuNDg5MTQsMjYuNDQ1NzQgMTguODA2ODksNDguMTE5ODIgMTUuOTIyNTEsNDkuMDg3ODNjLTQuMjAzMTksMS43MTczMyAtMTEuNTcyODcsLTIwLjIzNDkzIC0yMi4wNjIwMSwtNDYuNjgwNjljLTE2LjExNzQ1LC00My4yMzk0NiAtMTkuNDUzODYsLTQ2LjMzMTQyIC0xNi44MTI5OSwtNDguMjc3NDh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbC1vcGFjaXR5PSIwLjM4ODI0IiBmaWxsPSIjNDkyMDBkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yOTIuMzg4MzgsMTU3Ljc3MTcyYy04LjI2NDQ5LDAuMTYxMDUgLTE1LjA5MTgzLC02LjI1OTczIC0xNS4yNDkzMSwtMTQuMzQxMjZjLTAuMDEzODQsLTAuNzEwMzggLTUuODcwMTksLTguMjYxODIgLTUuNDk5NTQsLTExLjU2NTE2YzAuMzE2OTksLTIuNTA0NjQgOC42MzEyMywtMC40Mzk3NSAxMC40MTM1NywtMC42OTkxN2M0LjM3NjQxLC0wLjk5MTI2IDQuODgyMTUsLTIuNTY0OTkgOS43NjUsLTIuNjYwMTVjMS40MjcxLC0wLjAyNzgxIDMuMDczMjcsLTYuNDIwNSA1LjM5MzQzLC01LjA2ODU2YzQuMjkxMjQsMi41MDA0OSA5Ljc1MzY4LDE0LjE2NDM0IDkuODU1OSwxOS40MDk4YzAuMTU3NDgsOC4wODE1MiAtNi40MTQ1NCwxNC43NjM0MiAtMTQuNjc5MDIsMTQuOTI0NDd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZjYjFlMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjkyLjM4ODM4LDE1Ny43NzE3MmMtOC4yNjQ0OSwwLjE2MTA1IC0xNS4wOTE4MywtNi4yNTk3MyAtMTUuMjQ5MzEsLTE0LjM0MTI2Yy0wLjAwNjk5LC0wLjM1ODgyIDMuOTM1NjksNi45NzE4NiAxMS45NzAxMSw5LjIwNTA4YzMuODAxNSwxLjA1NjY2IDE0LjA5Njg0LC0zLjYzMTUxIDE1LjAwNTExLC0yLjI5OTI5YzAuODc5ODEsMS4yOTA0NSAtOS43NjQ4MSw3LjM5NzI0IC0xMS43MjU4OSw3LjQzNTQ1eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGwtb3BhY2l0eT0iMC4zMjk0MSIgZmlsbD0iIzVkMTA0MyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzEzLjM2MjU0LDE3NC40ODg1OGMtMy41MjIzNSwyLjU1MTkyIC03LjI4MjI3LDQuMDY1ODggLTExLjI2NTg4LDQuNTI1MzhjLTQuMTA2MDEsMC40NzM2IC03LjYzNDM4LDAuODM3MDcgLTExLjEwOTUyLC0xLjk0MjM5Yy02Ljg0NjcyLC01LjQ3NjA4IC03Ljg4LC0xNy4yMTgwMSAtMi40MTM2MSwtMjIuMTUzMThjMS4yODQ5MiwtMS4xNjAzNCAyLjkxMDk3LC0yLjI3NTU5IDQuMDQxMzMsLTIuODYwNDZjMS41ODE5LC0wLjgxODUgMS43MTc4MSwtMC45MzgyNSA1LjEzMjYxLC0xLjg2MzMzYzUuNDQ2NzcsLTAuOTU0NjMgOC45NTkzNSwtMC45OTU3MiAxMy4yMDY1NSwyLjQwMTI0YzYuODQ2NzIsNS40NzYwOCA3LjkyMjIzLDE1LjEzMzk0IDIuNDA4NTMsMjEuODkyNzR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2ZmZDk4MyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzEzLjM2MjU0LDE3NC40ODg1OGMtMy41MjIzNSwyLjU1MTkyIC03LjI4MjI3LDQuMDY1ODggLTExLjI2NTg4LDQuNTI1MzhjLTQuMTA2MDEsMC40NzM2IC03LjYzNDM4LDAuODM3MDcgLTExLjEwOTUyLC0xLjk0MjM5Yy02Ljg0NjcyLC01LjQ3NjA4IC03Ljg4LC0xNy4yMTgwMSAtMi40MTM2MSwtMjIuMTUzMThjMS4yODQ5MiwtMS4xNjAzNCAyLjM3NzE1LDEyLjcxNzM2IDYuNjI0MzYsMTYuMTE0MzJjNi44NDY3Miw1LjQ3NjA4IDIzLjY3ODM3LC0zLjMwMjkzIDE4LjE2NDY4LDMuNDU1ODd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbC1vcGFjaXR5PSIwLjMxMzczIiBmaWxsPSIjNmI0ZjBkIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yOTMuNzY4NTMsMTk3LjgwNTA0Yy0yLjQxNTI0LC01LjA5MzA5IC0xLjY3MDE5LC03LjMzNTAxIC0xLjAwNDEyLC0xMS40MzIwNWMxLjEwNzAyLC01LjY5MTAzIDMuMzgzMywtNy45NDI2IDguNzA4OTgsLTkuOTk1MzFjMS45OTc0LC0wLjc2OTg3IDYuOTU2ODEsLTIuMjkgOS43NjA1NywtMi42NjE0NmMzLjI2OTY5LC0wLjM4MjkzIDYuMTQxNzMsMC40MDU3MyA4LjU0MDMsMi4wNTI5N2MyLjE1MzExLDEuNDc4NjYgMi43ODQ4NCwxLjkxODkyIDUuODQ1NDIsNi4xMzMwMWMyLjQ0OTMsNC4wMDI0NSA0LjI1OTk0LDEwLjI1ODIzIDAuOTc1MDIsMTUuMjY4MzZjLTMuMTYyNDEsNC44MjMyNiAtOS44NTk5Myw1LjU3NTYgLTE2LjY5MzQzLDUuNzA4NzZjLTcuNTMwMywwLjE0Njc0IC0xMy42MDk3OCwtMC4zMDM2MSAtMTYuMTMyNzMsLTUuMDc0Mjh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2E2ZDM4OCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjkyLjI2MDg0LDE0MS42NDgxN2MtMS4yNzU4OSwwLjAyNDg2IC0yLjMzMDM2LC0wLjk4OTMgLTIuMzU1MjMsLTIuMjY1MmMtMC4wMjQ4NiwtMS4yNzU5IDAuOTg5MjksLTIuMzMwMzcgMi4yNjUxOSwtMi4zNTUyM2MxLjI3NTksLTAuMDI0ODYgMi4zMzAzNywwLjk4OTI4IDIuMzU1MjMsMi4yNjUyYzAuMDI0ODYsMS4yNzU5IC0wLjk4OTI4LDIuMzMwMzcgLTIuMjY1MTksMi4zNTUyNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTMwMi45NTY1NiwxMzUuMzQzODF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMzA0LjU3OTk2LDEzNi4xNDk1NmMwLjAyNDE0LDEuMjM4OTIgLTAuMTcwMSwxLjU3NzUzIC0xLjQwOTAyLDEuNjAxNjdjLTAuNjE5NDUsMC4wMTIwNyAtMC44NTE2NiwtMC4zMDE1OSAtMS4yNjU1MiwtMC42OTk2MmMtMC40MTM4NSwtMC4zOTgwMyAtMC43NDE1MiwtMC44ODU2OSAtMC43NTM1OSwtMS41MDUxNWMtMC4wMjQxNCwtMS4yMzg5MiAtMC4wOTc3NSwtMS41NzIzMSAxLjE0MTE4LC0xLjU5NjQ2YzEuMjM4OTIsLTAuMDI0MTQgMi4yNjI4MSwwLjk2MDYyIDIuMjg2OTUsMi4xOTk1NHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBhdGggZD0iTTI5My43Njg1MywxOTcuODA1MDRjLTIuNDE1MjQsLTUuMDkzMDkgLTEuNjcwMTksLTcuMzM1MDEgLTEuMDA0MTIsLTExLjQzMjA1YzEuMTA3MDIsLTUuNjkxMDMgMy4zODMzLC03Ljk0MjYgOC43MDg5OCwtOS45OTUzMWMwLjc1NTAzLC0wLjI5MTAxIC02LjYxODc1LDEzLjA3Mjk3IC0xLjgwOTg4LDE2LjE3MzIzYzcuOTEyODQsNS4xMDEzOCAyOC45NzQzOSwxLjUwMzM3IDI2LjkzMTE4LDQuNjE5NjRjLTMuMTYyNDEsNC44MjMyNiAtOS44NTk5Myw1LjU3NTYgLTE2LjY5MzQzLDUuNzA4NzZjLTcuNTMwMywwLjE0Njc0IC0xMy42MDk3OCwtMC4zMDM2MSAtMTYuMTMyNzMsLTUuMDc0Mjh6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbC1vcGFjaXR5PSIwLjMyOTQxIiBmaWxsPSIjM2E2YjE5IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yOTQuMjQ5NjUsMTM4LjIzMTAxYy0wLjMxMzM3LDAuMzI1ODIgLTAuNjM5MTgsMC4wMTI0NiAtMC42MzkxOCwwLjAxMjQ2bC0wLjMzNjI1LC0wLjMyNTU0Yy0wLjc1MzE0LC0wLjUyNTYxIC0xLjIzMTU5LC0wLjI5Mzk1IC0xLjk4NjgzLDAuMTQ4NTNjMCwwIC0wLjM5MDgyLDAuMjI3MiAtMC42MTgwMSwtMC4xNjM2M2MtMC4yMjcyLC0wLjM5MDgyIDAuMTYzNjEsLTAuNjE4IDAuMTYzNjEsLTAuNjE4YzEuMTA5NjQsLTAuNjQwNjcgMS45MDcyNywtMC44MTU5MyAzLjAxMjA3LC0wLjA2OGwwLjM5MjEzLDAuMzc1MDFjMCwwIDAuMzI1ODIsMC4zMTMzNiAwLjAxMjQ2LDAuNjM5MTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTMwNC4xNTA1NywxMzUuNzk5OWMtMC40MDAzMSwwLjIxIC0wLjYxMDMyLC0wLjE5MDMyIC0wLjYxMDMyLC0wLjE5MDMybDAuMDI1MDksLTAuMDAyMWMtMC40Njc4NSwtMC40NDk5NSAtMS4wMDQ2LC0xLjA5MjE0IC0xLjY4MDQ3LC0wLjc1NzAzYzAsMCAtMC40MjAxLDAuMTY2OTQgLTAuNTg3MDUsLTAuMjUzMTZjLTAuMTY2OTQsLTAuNDIwMDkgMC4yNTMxNywtMC41ODcwNCAwLjI1MzE3LC0wLjU4NzA0YzEuMTMyMjUsLTAuMzk0MzcgMS44NDI0NCwwLjE3NzQ4IDIuNjQxMDgsMC45NDU1OWwwLjE0ODgyLDAuMjMzNzNjMCwwIDAuMjEsMC40MDAzMSAtMC4xOTAzLDAuNjEwMzJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTI5Mi4xMzE3OSwxMzAuMTgwNTRjMC4wOTcyOCwwLjQ0MTQ2IC0wLjM0NDE5LDAuNTM4NzQgLTAuMzQ0MTksMC41Mzg3NGwtMC4zODUsMC4wNzU4NWMtMi43MTIzMywwLjA1Mjg1IC01LjI4NjgxLDAuNTYzMjkgLTcuNzExMTEsMS42NjIyOGMwLDAgLTAuNDExOTYsMC4xODYxNSAtMC41OTgwOSwtMC4yMjU4MWMtMC4xODYxNCwtMC40MTE5NiAwLjIyNTgzLC0wLjU5ODA5IDAuMjI1ODMsLTAuNTk4MDljMi41Mzk4NywtMS4xNDM0IDUuMjM0NywtMS42ODcxNSA4LjA2NTc2LC0xLjc0MjMxbDAuMjA4MDYsLTAuMDU0ODRjMCwwIDAuNDQxNDYsLTAuMDk3MjcgMC41Mzg3NCwwLjM0NDE5eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0zMDAuODA2MzcsMTI5LjIxODc3Yy0wLjQyNTk5LDAuMTUxMjkgLTAuNTc3MjYsLTAuMjc0NzEgLTAuNTc3MjYsLTAuMjc0NzFsLTAuMDM3MzUsLTAuMTE4NzNjLTEuMDE0LC0xLjkzNDQ5IC0yLjIyNDIsLTMuMjA3MzkgLTMuOTA0NjEsLTQuNTQzNjVjMCwwIC0wLjM1Mjg0LC0wLjI4MjU3IC0wLjA3MDI2LC0wLjYzNTQyYzAuMjgyNTgsLTAuMzUyODUgMC42MzU0MiwtMC4wNzAyNyAwLjYzNTQyLC0wLjA3MDI3YzEuNzY5MzUsMS40Mjg5IDMuMDY0NCwyLjc4MDQ1IDQuMTQwMDgsNC44MjkzNWwwLjA4ODcsMC4yMzYxOGMwLDAgMC4xNTEyOCwwLjQyNTk5IC0wLjI3NDcxLDAuNTc3MjZ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTMxMS4zNTc1OSwxNTcuMTg1NWMtMC40MjU5OSwwLjE1MTI4IC0wLjU3NzI3LC0wLjI3NDcxIC0wLjU3NzI3LC0wLjI3NDcxbC0wLjAzNzM0LC0wLjExODczYy0wLjI5Mjg5LC0wLjU2NjkzIC0wLjc0MTYxLC0wLjk4MzkgLTEuMDY4OTMsLTEuNTMxNjNjLTIuMjE4MTgsLTIuNTU2NjUgLTQuNzE3NTgsLTMuNDAyOTMgLTcuOTE5MDgsLTQuMTMyYzAsMCAtMC40NDA2MSwtMC4xMDEwOCAtMC4zMzk1MywtMC41NDE2OGMwLjEwMTA4LC0wLjQ0MDYxIDAuNTQxNjksLTAuMzM5NTMgMC41NDE2OSwtMC4zMzk1M2MzLjQyMTksMC43OTEzNSA2LjA4MTQ3LDEuNzUwMSA4LjQ0OTM4LDQuNDgzMThjMC4zNDk2MSwwLjU4NTA3IDAuODE1MzEsMS4wMzU4NyAxLjEzNzEsMS42NDE2N2wwLjA4ODY5LDAuMjM2MThjMCwwIDAuMTUxMjgsMC40MjU5OSAtMC4yNzQ3MiwwLjU3NzI3eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAuNSIvPjxwYXRoIGQ9Ik0zMjEuMjAzNCwxNzguMzI3OTdjLTAuMTk0MjYsMC40MDgxOSAtMC42MDI0NCwwLjIxMzk0IC0wLjYwMjQ0LDAuMjEzOTRsLTAuMzA0OTMsLTAuMTUxOTNjLTAuMzQ4MzQsLTAuMjQ2ODMgLTAuNzI3NjEsLTAuNDY2NDEgLTEuMTM1NDksLTAuNTkyNTRjLTMuMjk1NzIsLTIuMDgxNTEgLTkuMzU4MzYsLTMuNTc0NTkgLTEyLjUyOTM4LC0wLjE5OTY2YzAsMCAtMC4zMTMzNiwwLjMyNTgyIC0wLjYzOTE3LDAuMDEyNDVjLTAuMzI1ODIsLTAuMzEzMzcgLTAuMDEyNDYsLTAuNjM5MTggLTAuMDEyNDYsLTAuNjM5MThjMy40ODk3NiwtMy41NjIyMSA5Ljg5OTgsLTIuMzY3MzYgMTMuNTYyMzQsMC4wMDY2M2MwLjQ1NzE4LDAuMTQzNzIgMC44NzY5MywwLjM5OTAyIDEuMjcxNTksMC42NzA5bDAuMTc2LDAuMDc2OTVjMCwwIDAuNDA4MTgsMC4xOTQyNCAwLjIxMzk0LDAuNjAyNDR6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTTIzMC42MTE2NiwyMTkuMzg4MzR2LTEzOC43NzY2OWgxMzguNzc2Njl2MTM4Ljc3NjY5eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9Im5vbmUiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo2OS4zODgzNDM5MTIyOTA4Mjo2OS4zODgzNDM5MTIyOTA3NS0tPg==",
        name: "Shaded",
        id: "OACShaded",
      };
    }

    compileShaderForSprite({ shader }) {
        if (penPlus) {
            console.log(`converting shader ${shader} to sprite format!`);

            const event = penPlus.shaders[shader].projectData;

            let convertedVertex = event.vertShader.replaceAll(GL_POS_FINDER,"gl_Position = u_projectionMatrix * u_modelMatrix * vec4(a_position,0,1);");
            convertedVertex = convertedVertex.replaceAll(GL_POS_VAR,"vec2 a_position;");
            if (convertedVertex.includes("#version 300 es")) {
                convertedVertex = convertedVertex.replaceAll("#version 300 es","");
                convertedVertex = "#version 300 es\nuniform highp mat4 u_projectionMatrix; uniform highp mat4 u_modelMatrix;\n" + convertedVertex;
            }
            else {
                convertedVertex = "uniform highp mat4 u_projectionMatrix; uniform highp mat4 u_modelMatrix;\n" + convertedVertex;
            }
            
            recompiledShaders[shader] = twgl.createProgramInfo(gl,[
                convertedVertex,
                event.fragShader
            ]);
        }
    }

    setAutoReRender({value}) {
      this.autoReRender = value == "on" ? true : false;
    }

    getDescrepency({ dimension }) {
      if (dimension == "width") {
        return gl.canvas.width / renderer._nativeSize[0];
      }
      return gl.canvas.height / renderer._nativeSize[1];
    }

    openParamMenu() {
      const { shaderPanel, closeFunc, resizeFunc } = modalAPI.openModal("Default Parameters");
      let div = document.createElement("div");
      div.style.position = "absolute";
      div.style.top = "0px";
      div.style.left = "0px";
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.overflowX = "hidden";
      div.style.overflowY = "scroll";
      shaderPanel.appendChild(div);

      let element = document.createElement("h1");
      element.innerText = "Chromatic Abberation";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "seperation (Number) - how much to distance the red and blue from the green!";
      div.appendChild(element);


      element = document.createElement("h1");
      element.innerText = "Posterization";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "Colors (Number) - How many shades of each colour there should be!";
      div.appendChild(element);


      element = document.createElement("h1");
      element.innerText = "Pixelated";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "pixelAmount (Number) - The resolution divider";
      div.appendChild(element);


      element = document.createElement("h1");
      element.innerText = "Image Mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskImage (Texture) - The texture to mask to";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskDropoff (Number) - How bright a pixel has to be to be hidden";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "direction (Number) - The angle of the mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskOffset (Vector 2) - The position of the mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "scale (Vector 2) - The scale of the mask";
      div.appendChild(element);


      element = document.createElement("h1");
      element.innerText = "Image Color Mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskImage (Texture) - The texture to mask to";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskColor (Vector 4) - What color to hide under the mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "direction (Number) - The angle of the mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "maskOffset (Vector 2) - The position of the mask";
      div.appendChild(element);

      element = document.createElement("p");
      element.innerText = "scale (Vector 2) - The scale of the mask";
      div.appendChild(element);
    }

    shaderMenu() {
      if (penPlus) {
        return penPlus.shaderMenu();
      }
      return ["None Yet"];
    }

    shaderMenuAndStage() {
      if (penPlus) {
        let returnedShaders = [{value:"____PEN_PLUS__NO__SHADER____", text:"No Shader!"}];
        const penPShaders = Object.keys(penPlus.shaders);
        penPShaders.forEach(shader => {
          returnedShaders.push({value:shader,text:shader});
        });

        return returnedShaders;
      }
      return [{value:"____PEN_PLUS__NO__SHADER____", text:"No Shader!"}];
    }

    resetBuffer() {
      currentFrameBuffer = null;
      renderer.dirty = true;
    }

    setStageShaderAlt(args,util) {
      this.setStageShader(args,util);
    }

    setStageShader({ shader },util) {
      if (shader == "____PEN_PLUS__NO__SHADER____") {
        this.resetBuffer();
        return;
      }
      
      if (currentFrameBuffer != stageBuffer) {
        currentFrameBuffer = stageBuffer;
      }

      currentShader = shader;
      if (!penPlus.shaders[shader]) {
        this.resetBuffer();
        return;
      }

      renderer.dirty = true;
    }

    setSpriteShader({ shader },util) {
      if (shader == "____PEN_PLUS__NO__SHADER____") {
        delete spriteShaders[util.target.drawableID];
        this.resetBuffer();
        return;
      }

      if (!penPlus.shaders[shader]) {
        delete spriteShaders[util.target.drawableID];
        this.resetBuffer();
        return;
      }
      spriteShaders[util.target.drawableID] = shader;
      renderer.dirty = true;
    }

    setExtraShader({ target, shader },util) {
      let DesiredID = -1;
      switch(target) {
        case "pen":
          if (!runtime.ext_pen) break;
          DesiredID = runtime.ext_pen._penDrawableId;
          break;

        case "camera":
          if (!runtime.ext_videoSensing) break;
          DesiredID = runtime.ioDevices.video._drawable;
          break;

        case "stage":
          if (!runtime.getTargetForStage()) break;
          DesiredID = runtime.getTargetForStage().drawableID;
          break;
        
        default:
          for(let drawableID in renderer._allDrawables) {
            const drawable = renderer._allDrawables[+drawableID];
            if (drawable && drawable.customDrawableName && drawable.customDrawableName+"_custom" === target) {
              DesiredID = +drawableID;
              break;
            }
          }
          break;
      }

      if (DesiredID == -1) return;

      if (shader == "____PEN_PLUS__NO__SHADER____") {
        delete spriteShaders[DesiredID];
        this.resetBuffer();
        return;
      }

      if (!penPlus.shaders[shader]) {
        delete spriteShaders[DesiredID];
        this.resetBuffer();
        return;
      }
      spriteShaders[DesiredID] = shader;
      renderer.dirty = true;
    }

    setSetting({ setting, value }) {
      switch (setting) {
        case "compatibility mode":
          if (value == "on") {
            renderer._drawThese = oldDrawThese;
          }
          else {
            renderer._drawThese = this.advDrawThese;
          }
          break;
      
        case "auto re-render":
          this.autoReRender = value == "on" ? true : false;
          break;

        default:
          break;
      }
    }

    extraTargets() {
      const out = [
        {
          text: "pen layer",
          value: "pen"
        },
        {
          text: "stage",
          value: "stage"
        },
        {
          text: "camera",
          value: "camera"
        }
      ];
      for(let drawableID in renderer._allDrawables) {
        const drawable = renderer._allDrawables[+drawableID];
        if (drawable && drawable.customDrawableName !== undefined) {
          out.push({
            text: drawable.customDrawableName,
            value: drawable.customDrawableName+"_custom"
          });
        }
      }
      return out;
    }
  }

  Scratch.extensions.register(new extension());
})(Scratch);
