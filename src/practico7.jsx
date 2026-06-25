import { useEffect, useRef, useState } from 'react'
import Sketch from 'react-p5'

const estadosSemaforo = [
  { nombre: 'VERDE', duracion: 3000, color: '#2ecc71', apagado: '#153f28' },
  { nombre: 'AMARILLO', duracion: 1000, color: '#f1c40f', apagado: '#4a4210' },
  { nombre: 'ROJO', duracion: 3000, color: '#e74c3c', apagado: '#4a1815' },
]

export default function Practico7() {
  const [estado, setEstado] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setEstado((estadoActual) => (estadoActual + 1) % estadosSemaforo.length)
    }, estadosSemaforo[estado].duracion)

    return () => clearTimeout(timerRef.current)
  }, [estado, estadosSemaforo.length])

  const acelerarARojo = () => {
    clearTimeout(timerRef.current)
    if (estado === 2) {
      return
    }

    setEstado(2)
  }

  const setupEj1 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
  }

  const drawEj1 = (p5) => {
    p5.background(255)
    p5.stroke(0)
    p5.strokeWeight(2)
    p5.line(0, 200, 400, 200)
    p5.line(200, 0, 200, 400)
  }

  const setupEj2 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
  }

  const drawEj2 = (p5) => {
    p5.background(255)
    p5.stroke(0)
    p5.strokeWeight(2)
    p5.ellipse(200, 200, 300, 300)
    p5.ellipse(200, 200, 200, 200)
    p5.ellipse(200, 200, 100, 100)
  }

  const setupEj3 = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef)
  }

  const drawEj3 = (p5) => {
    p5.background(255)
    p5.stroke(0)
    p5.strokeWeight(2)
    p5.rect(0, 0, 50, 50)
    p5.rect(0, 350, 50, 50)
    p5.rect(350, 350, 50, 50)
    p5.rect(350, 0, 50, 50)
  }

  const setupSemaforo = (p5, canvasParentRef) => {
    p5.createCanvas(200, 400).parent(canvasParentRef)
  }

  const drawSemaforo = (p5) => {
    p5.background(255)
    
    p5.fill(34, 34, 34)
    p5.noStroke()
    p5.rect(62, 60, 76, 220, 18)
    
    p5.fill(68, 68, 68)
    p5.rect(94, 280, 12, 80)
    
    estadosSemaforo.forEach((luz, index) => {
      if (estado === index) {
        p5.fill(luz.color)
      } else {
        p5.fill(luz.apagado)
      }
      p5.ellipse(100, 100 + index * 60, 46, 46)
    })
  }

  return (
    <div style={styles.page}>

      <section style={styles.card}>
        <h3 style={styles.subtitle}>Ejercicio 1: La Cruz Central</h3>
        <div style={styles.canvasBox}>
          <Sketch setup={setupEj1} draw={drawEj1} />
        </div>
      </section>

      <section style={styles.card}>
        <h3 style={styles.subtitle}>Ejercicio 2: Círculos Concéntricos</h3>
        <div style={styles.canvasBox}>
          <Sketch setup={setupEj2} draw={drawEj2} />
        </div>
      </section>

      <section style={styles.card}>
        <h3 style={styles.subtitle}>Ejercicio 3: 4 Cuadrados</h3>
        <div style={styles.canvasBox}>
          <Sketch setup={setupEj3} draw={drawEj3} />
        </div>
      </section>

      <section style={styles.dashboard}>
        <div style={styles.panel}>
          <h3 style={styles.subtitle}>Semáforo inteligente</h3>
          <div style={styles.canvasBox}>
            <Sketch setup={setupSemaforo} draw={drawSemaforo} />
          </div>
          <p style={styles.estadoTexto}>
            Estado actual: <strong>{estadosSemaforo[estado].nombre}</strong>
          </p>
          <button type="button" style={styles.botonPeatonal} onClick={acelerarARojo}>
            BOTÓN PEATONAL
          </button>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    padding: '25px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fafafa',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #eaeaea',
  },
  title: {
    marginTop: 0,
    color: '#1f2f46',
  },
  subtitle: {
    marginTop: 0,
    color: '#1f2f46',
  },
  instructions: {
    lineHeight: 1.7,
    color: '#263f5f',
  },
  canvasBox: {
    display: 'inline-block',
    border: '1px solid #ccc',
  },
  dashboard: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #eaeaea',
  },
  panel: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  estadoTexto: {
    margin: 0,
    color: '#555',
  },
  botonPeatonal: {
    width: '145px',
    height: '46px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#34495e',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
  },
}
