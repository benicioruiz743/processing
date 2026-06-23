import React from 'react';
import Sketch from 'react-p5';

export default function Practico7() {

  // ========================================================
  // DIV 1 - EJERCICIO 1: LA CRUZ CENTRAL (Lienzo 400x400)
  // ========================================================
  const setupEj1 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const drawEj1 = (p5) => {
    p5.background(255); // Fondo totalmente blanco

    p5.stroke(0); // Líneas negras
    p5.strokeWeight(2);

    // Línea Horizontal: cruza de punta a punta en Y = 200
    p5.line(0, 200, 400, 200);

    // Línea Vertical: cruza de arriba a abajo en X = 200
    p5.line(200, 0, 200, 400);
  };


  // ========================================================
  // DIV 2 - EJERCICIO 2: EL TABLERO DE CUATRO COLORES (Formato Ajedrez Gris)
  // ========================================================
  const setupEj2 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const drawEj2 = (p5) => {
    p5.background(255);
    p5.stroke(0)
    p5.strokeWeight(2);
    p5.ellipse(200, 200, 300, 300);
    p5.ellipse(200, 200, 200, 200);
    p5.ellipse(200, 200, 100, 100);

  };


  // ========================================================
  // DIV 3 - EJERCICIO 3: EL SEMÁFORO EN LA ESQUINA (Cuadrante Inferior Derecho)
  // ========================================================
  const setupEj3 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const drawEj3 = (p5) => {
    p5.background(255);

    // 1. Líneas de los cuadrantes en gris de fondo (para referencia de posición)
    p5.stroke(0);
    p5.strokeWeight(2);

    p5.rect(0, 0, 50, 50);
    p5.rect(0, 350, 50, 50);
    p5.rect(350, 350, 50, 50);
    p5.rect(350, 0, 50, 50);

  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', padding: '25px', fontFamily: 'sans-serif', backgroundColor: '#fafafa' }}>

      {/* DIV 1: EJERCICIO 1 */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #eaeaea' }}>
        <h3 style={{ marginTop: 0, color: '#1a1a1a' }}>Ejercicio 1: La Cruz Central</h3>
        <div style={{ display: 'inline-block', border: '1px solid #ccc' }}>
          <Sketch setup={setupEj1} draw={drawEj1} />
        </div>
      </div>

      {/* DIV 2: EJERCICIO 2 */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #eaeaea' }}>
        <h3 style={{ marginTop: 0, color: '#1a1a1a' }}>Ejercicio 2: El Tablero de Cuatro Colores</h3>
        <div style={{ display: 'inline-block', border: '1px solid #ccc' }}>
          <Sketch setup={setupEj2} draw={drawEj2} />
        </div>
      </div>

      {/* DIV 3: EJERCICIO 3 */}
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', border: '1px solid #eaeaea' }}>
        <h3 style={{ marginTop: 0, color: '#1a1a1a' }}>Ejercicio 3: 4 Cuadrados</h3>
        <div style={{ display: 'inline-block', border: '1px solid #ccc' }}>
          <Sketch setup={setupEj3} draw={drawEj3} />
        </div>
      </div>

    </div>
  );
}