import Sketch from 'react-p5';
import { Link } from 'react-router-dom';

const Practico7 = () => {
  let img;

  const preload = (p5) => {
    img = p5.loadImage('https://picsum.photos/400/300');
  };

  const setup = (p5, canvasParentRef) => {
    const width = canvasParentRef.offsetWidth > 0 ? canvasParentRef.offsetWidth : 400;
    const height = canvasParentRef.offsetHeight > 0 ? canvasParentRef.offsetHeight : 400;
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    if (img) {
      p5.image(img, 0, 0, p5.width, p5.height);
      
      let rojo = p5.map(p5.mouseX, 0, p5.width, 0, 255);
      let verde = p5.map(p5.mouseY, 0, p5.height, 0, 255);
      let azul = p5.sin(p5.frameCount * 0.05) * 127 + 128;
      
      p5.tint(rojo, verde, azul, 200);
    }
  };

  return (
    <>
      <div style={{ width: '100%', minHeight: '400px', background: 'white' }}>
        <Sketch preload={preload} setup={setup} draw={draw} />
      </div>
      <div style={{ padding: '24px' }}>
        <Link className="route-button" to="/">
          Volver al inicio
        </Link>
      </div>
    </>
  );
};

export default Practico7;
