// JoystickPhysics.tsx
import { useEffect, useRef } from "react";
import Matter, { Body } from "matter-js";
import joystickImage from "../../assets/joystick.svg";
import "./joystick-physics.css";

// Extendemos el tipo Body para incluir la referencia al DOM
interface CustomBody extends Body {
  element?: HTMLImageElement;
}

export default function JoystickPhysics() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef(Matter.Engine.create());

  useEffect(() => {
    /* let mousePosition = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove); */

    const engine = engineRef.current;
    engine.gravity.y = 0.2;
    const world = engine.world;
    const renderWidth = window.innerWidth;
    const renderHeight = window.innerHeight;

    const joystickElements: HTMLImageElement[] = [];
    let count = 0;

    const addJoystick = () => {
      const center = renderWidth / 2;
      const spread = 400; // cuanto se pueden separar del centro
      const x = center + (Math.random() - 0.5) * spread;

      const size = 60;

      const body = Matter.Bodies.rectangle(x, -100, size, size, {
        restitution: 2,
        friction: 0.1,
      }) as CustomBody;

      Matter.World.add(world, body);

      const img = document.createElement("img");
      img.src = joystickImage;
      img.className = "joystick";
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      img.style.position = "absolute";
      img.style.left = `${x}px`;
      img.style.top = `-100px`;

      sceneRef.current?.appendChild(img);
      joystickElements.push(img);

      body.element = img;
    };

    const ground = Matter.Bodies.rectangle(
      renderWidth / 2,
      renderHeight + 50,
      renderWidth,
      100,
      { isStatic: true }
    );

    const leftWall = Matter.Bodies.rectangle(
      -50,
      renderHeight / 2,
      100,
      renderHeight,
      { isStatic: true }
    );
    const rightWall = Matter.Bodies.rectangle(
      renderWidth + 50,
      renderHeight / 2,
      100,
      renderHeight,
      { isStatic: true }
    );

    Matter.World.add(world, [ground, leftWall, rightWall]);

    const update = () => {
      Matter.Engine.update(engine);

      const bodies = Matter.Composite.allBodies(world) as CustomBody[];
      for (const body of bodies) {
        if (body.element) {
          body.element.style.left = `${body.position.x - 30}px`;
          body.element.style.top = `${body.position.y - 30}px`;
        }
      }
      /* const distanceThreshold = 200; // rango de influencia
      const forceMagnitude = 0.02; // cuánta fuerza aplicamos

      for (const body of bodies) {
        const el = (body as CustomBody).element;
        if (!el) continue;

        const dx = body.position.x - mousePosition.x;
        const dy = body.position.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < distanceThreshold) {
          const force = {
            x: (dx / distance) * forceMagnitude,
            y: (dy / distance) * forceMagnitude,
          };
          Matter.Body.applyForce(body, body.position, force);
        }
      } */

      requestAnimationFrame(update);
    };
    update();

    const interval = setInterval(() => {
      if (count < 20) {
        addJoystick();
        count++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      /* window.removeEventListener("mousemove", handleMouseMove); */
    };
  }, []);

  return <div className="joystick-scene" ref={sceneRef}></div>;
}
