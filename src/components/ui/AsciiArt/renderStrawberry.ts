export function renderStrawberry(): void {
    const asciiContainer = document.getElementById('ascii-art');
  
    if (!asciiContainer) {
      console.error('Element with id "ascii-art" not found.');
      return;
    }
  
    let A = 0; 
    let B = 190; 
    const K2 = 6;
    const K3 = 260; 
    const K4 = 260; 
  
    const luminanceChars = '.,-~:;=!*#$@';
  
    function renderFrame(): void {
      const screen: string[] = Array(K3 * K3).fill(' ');
      const zBuffer: number[] = Array(K3 * K3).fill(0);
  
      for (let theta = -Math.PI / 2; theta < Math.PI / 2; theta += 0.1) {
        for (let phi = 0; phi < Math.PI * 2; phi += 0.03) {
          const cosTheta = Math.cos(theta);
          const sinTheta = Math.sin(theta);
          const cosPhi = Math.cos(phi);
          const sinPhi = Math.sin(phi);
  
          const r = 1 - sinTheta;
          const x = r * cosTheta * cosPhi;
          const y = r * cosTheta * sinPhi;
          const z = Math.cos(theta) + sinTheta - 1;
  
          const ooz = 1 / (z + K2);
          const xp = Math.floor((K3 / 2) + K4 * ooz * x);
          const yp = Math.floor((K3 / 2) - K4 * ooz * y);
  
          if (xp < 0 || xp >= K3 || yp < 0 || yp >= K3) continue;
  
          const idx = xp + yp * K3;
  
          const L = cosTheta * cosPhi * Math.sin(B) - Math.cos(A) * cosPhi * sinTheta -
                    Math.sin(A) * sinPhi + Math.cos(B) * (Math.cos(A) * sinTheta - cosPhi * Math.sin(A) * sinTheta);
  
          if (L > 0 && ooz > zBuffer[idx]) {
            zBuffer[idx] = ooz;
            const luminance = Math.floor(L * 8);
            const clampedLuminance = Math.max(0, Math.min(luminance, luminanceChars.length - 1));
            screen[idx] = luminanceChars[clampedLuminance];
          }
        }
      }
  
      asciiContainer.innerHTML = screen.reduce((acc, char, i) => {
        acc += char;
        if ((i + 1) % K3 === 0) acc += '<br>';
        return acc;
      }, '');
  
      A += 0.07;
      B += 0.03;
      requestAnimationFrame(renderFrame);
    }
  
    renderFrame();
  }