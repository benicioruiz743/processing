import Sketch from 'react-p5';
import { Link } from 'react-router-dom';

const Practico6 = () => {
  const setup = (p5, canvasParentRef) => {
   const width = canvasParentRef.offsetWidth > 0 ? canvasParentRef.offsetWidth : 350;
   const height = canvasParentRef.offsetHeight > 0 ? canvasParentRef.offsetHeight : 600;
   p5.createCanvas(width, height).parent(canvasParentRef);
   p5.background(50);
   p5.noStroke();
  }

  const draw = (p5) => {
    p5.fill(20, 15);
    p5.rect(0, 0, p5.width, p5.height);

    let velocidad = p5.dist(p5.mouseX, p5.mouseY, p5.mouseX, p5.mouseY);

    let diametro = p5.map(velocidad, 0, 100, 10, 90, true);

    let rojo = p5.map(p5.mouseX, 0,p5.width, 100, 255);
    let verde = p5.map(p5.mouseY, 0,p5.height, 100, 255);

    p5.fill(rojo, verde, 255, 200);
    p5.ellipse(p5.mouseX, p5.mouseY, diametro, diametro);
  }

      return (
      <>
          <div className="stats-container-fixed" style={{ width: '100%', minHeight: '600px', background: "white"}}>
            <Sketch setup={setup} draw={draw} />
          </div>
          <div style={{ padding: '24px' }}>
            <Link className="route-button" to="/">
              Volver al inicio
            </Link>
          </div>
      </>
    )


}

export default Practico6
