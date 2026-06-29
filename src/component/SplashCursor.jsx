import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function SplashCursor() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);
  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let isActive = true;

    const config = {
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1440,
      DENSITY_DISSIPATION: 0.93,
      VELOCITY_DISSIPATION: 0.94,
      PRESSURE: 0.1,
      PRESSURE_ITERATIONS: 20,
      CURL: 10,
      SPLAT_RADIUS: 0.14, // ← unchanged, perfect as-is
      SPLAT_FORCE: 3500,
      TRANSPARENT: true,
    };

    // ─────────────────────────────────────────────────────────────────────
    //  LIGHT MODE — "Deep Jewels" (original palette, reverted)
    // ─────────────────────────────────────────────────────────────────────
    const LIGHT_PALETTE = [
      { r: 0.04, g: 0.08, b: 0.78 }, // sapphire blue
      { r: 0.42, g: 0.0, b: 0.82 }, // deep amethyst
      { r: 0.06, g: 0.0, b: 0.62 }, // midnight indigo
      { r: 0.0, g: 0.42, b: 0.32 }, // dark emerald green
      { r: 0.35, g: 0.0, b: 0.48 }, // dark plum
      { r: 0.68, g: 0.0, b: 0.28 }, // deep rose-crimson
    ];

    // ─────────────────────────────────────────────────────────────────────
    //  DARK MODE — unchanged original
    // ─────────────────────────────────────────────────────────────────────
    const DARK_PALETTE = [
      { r: 0.0, g: 0.9, b: 1.0 }, // electric cyan
      { r: 0.65, g: 0.12, b: 1.0 }, // vivid violet
      { r: 0.0, g: 0.95, b: 0.65 }, // neon teal-green
      { r: 1.0, g: 0.15, b: 0.7 }, // neon pink
      { r: 0.22, g: 0.5, b: 1.0 }, // bright cerulean
    ];

    let paletteIndex = 0;
    const getNextColor = () => {
      const palette = isDarkRef.current ? DARK_PALETTE : LIGHT_PALETTE;
      const col = palette[paletteIndex % palette.length];
      paletteIndex++;
      return {
        r: col.r * (0.93 + Math.random() * 0.14),
        g: col.g * (0.93 + Math.random() * 0.14),
        b: col.b * (0.93 + Math.random() * 0.14),
      };
    };

    // ── WebGL init ───────────────────────────────────────────
    const params = {
      alpha: true,
      depth: false,
      stencil: false,
      antialias: false,
      preserveDrawingBuffer: false,
    };
    let gl = canvas.getContext("webgl2", params);
    const isWebGL2 = !!gl;
    if (!isWebGL2)
      gl =
        canvas.getContext("webgl", params) ||
        canvas.getContext("experimental-webgl", params);

    let halfFloat, supportLinearFiltering;
    if (isWebGL2) {
      gl.getExtension("EXT_color_buffer_float");
      supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
    } else {
      halfFloat = gl.getExtension("OES_texture_half_float");
      supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
    }
    gl.clearColor(0, 0, 0, 0);

    const halfFloatTexType = isWebGL2
      ? gl.HALF_FLOAT
      : halfFloat?.HALF_FLOAT_OES;
    let formatRGBA, formatRG, formatR;
    if (isWebGL2) {
      formatRGBA = getSupportedFormat(
        gl,
        gl.RGBA16F,
        gl.RGBA,
        halfFloatTexType,
      );
      formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
      formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
    } else {
      formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    }

    function getSupportedFormat(gl, iF, f, t) {
      if (!supportRenderTextureFormat(gl, iF, f, t)) {
        if (iF === gl.R16F) return getSupportedFormat(gl, gl.RG16F, gl.RG, t);
        if (iF === gl.RG16F)
          return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, t);
        return null;
      }
      return { internalFormat: iF, format: f };
    }
    function supportRenderTextureFormat(gl, iF, f, t) {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, iF, 4, 4, 0, f, t, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        tex,
        0,
      );
      return (
        gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE
      );
    }

    // ── Shaders ──────────────────────────────────────────────
    const vert = compileShader(
      gl.VERTEX_SHADER,
      `
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform vec2 texelSize;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,
    );

    const copyShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; uniform sampler2D uTexture;
      void main() { gl_FragColor = texture2D(uTexture, vUv); }
    `,
    );

    const clearShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; uniform sampler2D uTexture; uniform float value;
      void main() { gl_FragColor = value * texture2D(uTexture, vUv); }
    `,
    );

    // ── Display shader — original, unchanged ─────────────────
    const displayShaderSrc = `
      precision highp float; precision highp sampler2D;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform sampler2D uTexture;
      uniform vec2 texelSize;
      uniform float uDarkMode;

      vec3 linearToGamma(vec3 c) { return pow(max(c, 0.0), vec3(1.0 / 2.2)); }

      void main() {
        vec3 c = texture2D(uTexture, vUv).rgb;

        float a  = max(c.r, max(c.g, c.b));
        float nb = max(texture2D(uTexture, vL).r, max(texture2D(uTexture, vL).g, texture2D(uTexture, vL).b));
        float nd = max(texture2D(uTexture, vR).r, max(texture2D(uTexture, vR).g, texture2D(uTexture, vR).b));
        float ne = max(texture2D(uTexture, vT).r, max(texture2D(uTexture, vT).g, texture2D(uTexture, vT).b));
        float nf = max(texture2D(uTexture, vB).r, max(texture2D(uTexture, vB).g, texture2D(uTexture, vB).b));
        float diff = max(a, max(max(nb, nd), max(ne, nf)))
                   - min(a, min(min(nb, nd), min(ne, nf)));
        c += vec3(diff * 0.4);

        if (uDarkMode < 0.5) {
          float lum = dot(c, vec3(0.2126, 0.7152, 0.0722));
          c = mix(vec3(lum), c, 1.6);
        }

        c = clamp(c, 0.0, 1.0);
        float alpha = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
        gl_FragColor = vec4(linearToGamma(c), alpha);
      }
    `;

    const splatShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision highp float; precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio; uniform vec3 color; uniform vec2 point; uniform float radius;
      void main() {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        gl_FragColor = vec4(texture2D(uTarget, vUv).xyz + splat, 1.0);
      }
    `,
    );

    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision highp float; precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity; uniform sampler2D uSource;
      uniform vec2 texelSize; uniform vec2 dyeTexelSize;
      uniform float dt; uniform float dissipation;
      ${
        supportLinearFiltering
          ? ""
          : `
      vec4 bilerp(sampler2D s, vec2 uv, vec2 ts) {
        vec2 st = uv / ts - 0.5; vec2 i = floor(st); vec2 f = fract(st);
        return mix(
          mix(texture2D(s, (i + vec2(0.5, 0.5)) * ts), texture2D(s, (i + vec2(1.5, 0.5)) * ts), f.x),
          mix(texture2D(s, (i + vec2(0.5, 1.5)) * ts), texture2D(s, (i + vec2(1.5, 1.5)) * ts), f.x),
          f.y
        );
      }`
      }
      void main() {
        ${
          supportLinearFiltering
            ? `vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
             gl_FragColor = dissipation * texture2D(uSource, coord);`
            : `vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
             gl_FragColor = dissipation * bilerp(uSource, coord, dyeTexelSize);`
        }
        gl_FragColor.a = 1.0;
      }
    `,
    );

    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main() {
        float L = texture2D(uVelocity, vL).x; float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y; float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) L = -C.x; if (vR.x > 1.0) R = -C.x;
        if (vT.y > 1.0) T = -C.y; if (vB.y < 0.0) B = -C.y;
        gl_FragColor = vec4(0.5 * (R - L + T - B), 0.0, 0.0, 1.0);
      }
    `,
    );

    const curlShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
      uniform sampler2D uVelocity;
      void main() {
        float L = texture2D(uVelocity, vL).y; float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x; float B = texture2D(uVelocity, vB).x;
        gl_FragColor = vec4(0.5 * (R - L - T + B), 0.0, 0.0, 1.0);
      }
    `,
    );

    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision highp float; precision highp sampler2D;
      varying vec2 vUv; varying vec2 vL; varying vec2 vR; varying vec2 vT; varying vec2 vB;
      uniform sampler2D uVelocity; uniform sampler2D uCurl;
      uniform float curl; uniform float dt;
      void main() {
        float L = texture2D(uCurl, vL).x; float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x; float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        gl_FragColor = vec4(texture2D(uVelocity, vUv).xy + force * dt, 0.0, 1.0);
      }
    `,
    );

    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
      uniform sampler2D uPressure; uniform sampler2D uDivergence;
      void main() {
        float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
        float div = texture2D(uDivergence, vUv).x;
        gl_FragColor = vec4((L + R + B + T - div) * 0.25, 0.0, 0.0, 1.0);
      }
    `,
    );

    const gradientShader = compileShader(
      gl.FRAGMENT_SHADER,
      `
      precision mediump float; precision mediump sampler2D;
      varying highp vec2 vUv; varying highp vec2 vL; varying highp vec2 vR; varying highp vec2 vT; varying highp vec2 vB;
      uniform sampler2D uPressure; uniform sampler2D uVelocity;
      void main() {
        float L = texture2D(uPressure, vL).x; float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x; float B = texture2D(uPressure, vB).x;
        gl_FragColor = vec4(texture2D(uVelocity, vUv).xy - vec2(R - L, T - B), 0.0, 1.0);
      }
    `,
    );

    function compileShader(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
        console.error("Shader error:", gl.getShaderInfoLog(s));
      return s;
    }
    function createProgram(v, f) {
      const p = gl.createProgram();
      gl.attachShader(p, v);
      gl.attachShader(p, f);
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS))
        console.error("Program error:", gl.getProgramInfoLog(p));
      return p;
    }
    function getUniforms(prog) {
      const u = {},
        n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) {
        const { name } = gl.getActiveUniform(prog, i);
        u[name] = gl.getUniformLocation(prog, name);
      }
      return u;
    }

    class GLProgram {
      constructor(v, f) {
        this.program = createProgram(v, f);
        this.uniforms = getUniforms(this.program);
      }
      bind() {
        gl.useProgram(this.program);
      }
    }

    const copyProg = new GLProgram(vert, copyShader);
    const clearProg = new GLProgram(vert, clearShader);
    const displayProg = new GLProgram(
      vert,
      compileShader(gl.FRAGMENT_SHADER, displayShaderSrc),
    );
    const splatProg = new GLProgram(vert, splatShader);
    const advectionProg = new GLProgram(vert, advectionShader);
    const divergenceProg = new GLProgram(vert, divergenceShader);
    const curlProg = new GLProgram(vert, curlShader);
    const vorticityProg = new GLProgram(vert, vorticityShader);
    const pressureProg = new GLProgram(vert, pressureShader);
    const gradientProg = new GLProgram(vert, gradientShader);

    // ── Quad ────────────────────────────────────────────────
    const vBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      gl.STATIC_DRAW,
    );
    const iBuf = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuf);
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array([0, 1, 2, 0, 2, 3]),
      gl.STATIC_DRAW,
    );
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);

    function blit(target, clear = false) {
      if (target == null) {
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      } else {
        gl.viewport(0, 0, target.width, target.height);
        gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
      }
      if (clear) {
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
      gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    }

    // ── FBOs ────────────────────────────────────────────────
    let dye, velocity, divergence, curl, pressure;

    function createFBO(w, h, iF, f, t, param) {
      gl.activeTexture(gl.TEXTURE0);
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, iF, w, h, 0, f, t, null);
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        tex,
        0,
      );
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return {
        texture: tex,
        fbo,
        width: w,
        height: h,
        texelSizeX: 1 / w,
        texelSizeY: 1 / h,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, tex);
          return id;
        },
      };
    }
    function createDoubleFBO(w, h, iF, f, t, p) {
      const a = createFBO(w, h, iF, f, t, p),
        b = createFBO(w, h, iF, f, t, p);
      return {
        width: w,
        height: h,
        texelSizeX: a.texelSizeX,
        texelSizeY: a.texelSizeY,
        read: a,
        write: b,
        swap() {
          const tmp = this.read;
          this.read = this.write;
          this.write = tmp;
        },
      };
    }
    function resizeDoubleFBO(target, w, h, iF, f, t, p) {
      if (target.width === w && target.height === h) return target;
      const newRead = createFBO(w, h, iF, f, t, p);
      copyProg.bind();
      gl.uniform1i(copyProg.uniforms.uTexture, target.read.attach(0));
      blit(newRead);
      target.read = newRead;
      target.write = createFBO(w, h, iF, f, t, p);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1 / w;
      target.texelSizeY = 1 / h;
      return target;
    }
    function initFBOs() {
      const simRes = getRes(config.SIM_RESOLUTION);
      const dyeRes = getRes(config.DYE_RESOLUTION);
      const tt = halfFloatTexType;
      const filt = supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
      if (dye == null) {
        dye = createDoubleFBO(
          dyeRes.width,
          dyeRes.height,
          formatRGBA.internalFormat,
          formatRGBA.format,
          tt,
          filt,
        );
        velocity = createDoubleFBO(
          simRes.width,
          simRes.height,
          formatRG.internalFormat,
          formatRG.format,
          tt,
          filt,
        );
      } else {
        dye = resizeDoubleFBO(
          dye,
          dyeRes.width,
          dyeRes.height,
          formatRGBA.internalFormat,
          formatRGBA.format,
          tt,
          filt,
        );
        velocity = resizeDoubleFBO(
          velocity,
          simRes.width,
          simRes.height,
          formatRG.internalFormat,
          formatRG.format,
          tt,
          filt,
        );
      }
      divergence = createFBO(
        simRes.width,
        simRes.height,
        formatR.internalFormat,
        formatR.format,
        tt,
        gl.NEAREST,
      );
      curl = createFBO(
        simRes.width,
        simRes.height,
        formatR.internalFormat,
        formatR.format,
        tt,
        gl.NEAREST,
      );
      pressure = createDoubleFBO(
        simRes.width,
        simRes.height,
        formatR.internalFormat,
        formatR.format,
        tt,
        gl.NEAREST,
      );
    }
    function getRes(res) {
      const w = gl.drawingBufferWidth,
        h = gl.drawingBufferHeight;
      return w < h
        ? { width: Math.round((w * res) / h), height: res }
        : { width: res, height: Math.round((h * res) / w) };
    }

    // ── Pointer ──────────────────────────────────────────────
    const makePointer = () => ({
      id: -1,
      texcoordX: 0,
      texcoordY: 0,
      prevTexcoordX: 0,
      prevTexcoordY: 0,
      deltaX: 0,
      deltaY: 0,
      down: false,
      moved: false,
      color: [0, 0, 0],
    });
    const pointers = [makePointer()];
    const corrX = (d) => {
      const ar = canvas.width / canvas.height;
      return ar > 1 ? d * ar : d;
    };
    const corrY = (d) => {
      const ar = canvas.width / canvas.height;
      return ar > 1 ? d : d / ar;
    };

    function updateMove(p, x, y, color) {
      p.prevTexcoordX = p.texcoordX;
      p.prevTexcoordY = p.texcoordY;
      p.texcoordX = x / canvas.width;
      p.texcoordY = 1 - y / canvas.height;
      p.deltaX = corrX(p.texcoordX - p.prevTexcoordX);
      p.deltaY = corrY(p.texcoordY - p.prevTexcoordY);
      p.moved = Math.abs(p.deltaX) > 0 || Math.abs(p.deltaY) > 0;
      p.color = color;
    }

    // ── Splat ────────────────────────────────────────────────
    function splat(x, y, dx, dy, color) {
      const ar = canvas.width / canvas.height;
      const r = config.SPLAT_RADIUS / 100 / (ar > 1 ? ar : 1);
      splatProg.bind();
      gl.uniform1i(splatProg.uniforms.uTarget, velocity.read.attach(0));
      gl.uniform1f(splatProg.uniforms.aspectRatio, ar);
      gl.uniform2f(splatProg.uniforms.point, x, y);
      gl.uniform3f(splatProg.uniforms.color, dx, dy, 0);
      gl.uniform1f(splatProg.uniforms.radius, r);
      blit(velocity.write);
      velocity.swap();
      gl.uniform1i(splatProg.uniforms.uTarget, dye.read.attach(0));
      gl.uniform3f(splatProg.uniforms.color, color.r, color.g, color.b);
      blit(dye.write);
      dye.swap();
    }

    function initSplats(n) {
      for (let i = 0; i < n; i++) {
        const c = getNextColor();
        splat(
          Math.random(),
          Math.random(),
          600 * (Math.random() - 0.5),
          600 * (Math.random() - 0.5),
          { r: c.r * 0.3, g: c.g * 0.3, b: c.b * 0.3 },
        );
      }
    }

    // ══════════════════════════════════════════════════════════════════════
    //  PREMIUM SCROLL EFFECT — "Aurora Bloom"
    //
    //  Inspired by Antigravity.google's landing page: a slow, breathing
    //  prismatic aurora that expands and rotates when you scroll. The effect
    //  uses 3 orbital force sources that rotate at different angular speeds
    //  around screen center, creating a soft radial vortex — subtle when
    //  idle, dramatic when you scroll fast.
    //
    //  Design principles (matching Antigravity's aesthetic):
    //    • Low color count — 2 splats per scroll event, not 6+
    //    • Slow, large-radius forces — creates aurora-like sweeping bloom
    //    • Velocity-proportional: light scroll = shimmer, fast = full bloom
    //    • Colors are the palette hues at ×0.15 intensity — ultra-subtle
    //      wash, not a paint explosion. Exactly how Antigravity does it.
    //    • Orbital placement: splats orbit from center outward, so the
    //      bloom feels like it's emanating from the page core
    // ══════════════════════════════════════════════════════════════════════
    let lastScrollY = window.scrollY;
    let scrollPhase = 0; // rotates with each scroll event — orbital motion
    let scrollMomentum = 0; // smoothed scroll velocity for easing

    const SCROLL_ORBITAL_RADIUS = 0.22; // how far from center the bloom sources orbit

    const onScroll = () => {
      const currentY = window.scrollY;
      const rawDelta = currentY - lastScrollY;
      lastScrollY = currentY;
      const speed = Math.abs(rawDelta);
      if (speed < 0.5) return;

      // Smooth momentum — fast scroll builds up, then decays
      scrollMomentum = Math.min(scrollMomentum + speed * 0.04, 1.0);

      // Advance orbital phase — each scroll nudges the rotation
      scrollPhase += speed * 0.006;

      // ── Two orbital aurora splats ──────────────────────────
      // They sit at opposing positions around screen center,
      // creating a balanced bloom (like Antigravity's two-orb aurora).
      const intensity = Math.min(speed * 0.9, 220); // force — gentle cap
      const colorScale = Math.min(speed * 0.011, 0.28); // subtle color intensity

      for (let i = 0; i < 2; i++) {
        const angle = scrollPhase + i * Math.PI; // 180° apart
        const cx = 0.5 + Math.cos(angle) * SCROLL_ORBITAL_RADIUS;
        const cy = 0.5 + Math.sin(angle) * SCROLL_ORBITAL_RADIUS * 0.55; // elliptical

        // Force rotates tangentially — creates a slow spin, not a push
        const forceAngle = angle + Math.PI / 2;
        const fx = Math.cos(forceAngle) * intensity * (rawDelta > 0 ? 1 : -1);
        const fy = Math.sin(forceAngle) * intensity * (rawDelta > 0 ? 1 : -1);

        const c = getNextColor();
        splat(
          Math.max(0.05, Math.min(0.95, cx)),
          Math.max(0.05, Math.min(0.95, cy)),
          fx,
          fy,
          { r: c.r * colorScale, g: c.g * colorScale, b: c.b * colorScale },
        );
      }
    };

    // ── Sim step ─────────────────────────────────────────────
    function step(dt, fastClear) {
      gl.disable(gl.BLEND);
      gl.disable(gl.DEPTH_TEST);

      curlProg.bind();
      gl.uniform2f(
        curlProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      gl.uniform1i(curlProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl);

      vorticityProg.bind();
      gl.uniform2f(
        vorticityProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      gl.uniform1i(vorticityProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProg.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProg.uniforms.curl, config.CURL);
      gl.uniform1f(vorticityProg.uniforms.dt, dt);
      blit(velocity.write);
      velocity.swap();

      divergenceProg.bind();
      gl.uniform2f(
        divergenceProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      gl.uniform1i(divergenceProg.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence);

      clearProg.bind();
      gl.uniform1i(clearProg.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProg.uniforms.value, config.PRESSURE);
      blit(pressure.write);
      pressure.swap();

      pressureProg.bind();
      gl.uniform2f(
        pressureProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      gl.uniform1i(pressureProg.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProg.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write);
        pressure.swap();
      }

      gradientProg.bind();
      gl.uniform2f(
        gradientProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      gl.uniform1i(gradientProg.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradientProg.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write);
      velocity.swap();

      advectionProg.bind();
      gl.uniform2f(
        advectionProg.uniforms.texelSize,
        velocity.texelSizeX,
        velocity.texelSizeY,
      );
      if (!supportLinearFiltering)
        gl.uniform2f(
          advectionProg.uniforms.dyeTexelSize,
          velocity.texelSizeX,
          velocity.texelSizeY,
        );
      gl.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProg.uniforms.uSource, velocity.read.attach(0));
      gl.uniform1f(advectionProg.uniforms.dt, dt);
      gl.uniform1f(
        advectionProg.uniforms.dissipation,
        fastClear ? 0.5 : config.VELOCITY_DISSIPATION,
      );
      blit(velocity.write);
      velocity.swap();

      if (!supportLinearFiltering)
        gl.uniform2f(
          advectionProg.uniforms.dyeTexelSize,
          dye.texelSizeX,
          dye.texelSizeY,
        );
      gl.uniform1i(advectionProg.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProg.uniforms.uSource, dye.read.attach(1));
      gl.uniform1f(
        advectionProg.uniforms.dissipation,
        fastClear ? 0.45 : config.DENSITY_DISSIPATION,
      );
      blit(dye.write);
      dye.swap();
    }

    function render() {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      displayProg.bind();
      gl.uniform2f(
        displayProg.uniforms.texelSize,
        1 / gl.drawingBufferWidth,
        1 / gl.drawingBufferHeight,
      );
      gl.uniform1i(displayProg.uniforms.uTexture, dye.read.attach(0));
      gl.uniform1f(
        displayProg.uniforms.uDarkMode,
        isDarkRef.current ? 1.0 : 0.0,
      );
      blit(null);
    }

    // ── Resize ───────────────────────────────────────────────
    function resizeCanvas() {
      const w = window.innerWidth,
        h = window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        initFBOs();
      }
    }

    // ── Events ───────────────────────────────────────────────
    const onMouseMove = (e) => {
      const p = pointers[0];
      if (!p.down) {
        p.down = true;
        p.texcoordX = e.clientX / canvas.width;
        p.texcoordY = 1 - e.clientY / canvas.height;
        p.prevTexcoordX = p.texcoordX;
        p.prevTexcoordY = p.texcoordY;
      }
      const c = getNextColor();
      const boost = isDarkRef.current ? 1.2 : 1.3;
      updateMove(p, e.clientX, e.clientY, [
        c.r * boost,
        c.g * boost,
        c.b * boost,
      ]);
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      Array.from(e.targetTouches).forEach((touch, i) => {
        if (!pointers[i]) pointers.push(makePointer());
        const c = getNextColor();
        const boost = isDarkRef.current ? 1.2 : 1.3;
        updateMove(pointers[i], touch.pageX, touch.pageY, [
          c.r * boost,
          c.g * boost,
          c.b * boost,
        ]);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Init + loop ──────────────────────────────────────────
    resizeCanvas();
    initFBOs();
    initSplats(2);

    let lastTime = Date.now();
    function update() {
      if (!isActive) return;
      resizeCanvas();
      const now = Date.now();
      const dt = Math.min((now - lastTime) / 1000, 0.016);
      lastTime = now;

      // Decay scroll momentum — the aurora shimmer fades naturally
      scrollMomentum *= 0.92;

      // Normal cursor splats — always active (removed isScrolling gate)
      pointers.forEach((p) => {
        if (p.moved) {
          p.moved = false;
          splat(
            p.texcoordX,
            p.texcoordY,
            p.deltaX * config.SPLAT_FORCE,
            p.deltaY * config.SPLAT_FORCE,
            { r: p.color[0], g: p.color[1], b: p.color[2] },
          );
        }
      });

      step(dt, false);
      render();
      requestAnimationFrame(update);
    }
    update();

    return () => {
      isActive = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        id="fluid"
        style={{ width: "100vw", height: "100vh", display: "block" }}
      />
    </div>
  );
}
