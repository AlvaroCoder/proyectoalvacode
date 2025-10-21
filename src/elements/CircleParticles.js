'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';

export default function CircleParticles() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); 
        mountRef.current.appendChild(renderer.domElement);
        
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 10000;

        const positions = new Float32Array(particlesCount * 3);
        const originalPositions = new Float32Array(particlesCount * 3); // Posiciones originales (esfera)
        const targetPositions = new Float32Array(particlesCount * 3); // Posiciones objetivo
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        const colorsREF = [
            new THREE.Color('#E63946'), 
            new THREE.Color('#FFB703'), 
            new THREE.Color('#FB8500'), 
            new THREE.Color('#8ECAE6'), 
            new THREE.Color('#219EBC'),
            new THREE.Color("#FFFFFF") 
        ];

        // Función para generar posiciones de esfera
        function generateSpherePositions() {
            for (let i = 0; i < particlesCount * 3; i += 3) {
                const radius = 5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);

                positions[i] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
                positions[i + 2] = radius * Math.cos(phi);

                // Guardar posiciones originales
                originalPositions[i] = positions[i];
                originalPositions[i + 1] = positions[i + 1];
                originalPositions[i + 2] = positions[i + 2];

                // Seleccionar un color aleatorio de la paleta
                const randomColor = colorsREF[Math.floor(Math.random() * colorsREF.length)];
                
                colors[i] = randomColor.r;
                colors[i + 1] = randomColor.g;
                colors[i + 2] = randomColor.b;
            }
        }

        // Función para generar forma de laptop
        function generateLaptopPositions() {
            const screenWidth = 8;
            const screenHeight = 5;
            const keyboardWidth = 8;
            const keyboardHeight = 2;
            const thickness = 0.3;

            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                
                if (i < particlesCount * 0.6) {
                    // Pantalla (60% de partículas)
                    const x = (Math.random() - 0.5) * screenWidth;
                    const y = (Math.random() - 0.5) * screenHeight + 3;
                    const z = (Math.random() - 0.5) * thickness;
                    
                    targetPositions[i3] = x;
                    targetPositions[i3 + 1] = y;
                    targetPositions[i3 + 2] = z;
                } else {
                    // Teclado (40% de partículas)
                    const x = (Math.random() - 0.5) * keyboardWidth;
                    const y = (Math.random() - 0.5) * keyboardHeight - 3;
                    const z = (Math.random() - 0.5) * thickness;
                    
                    targetPositions[i3] = x;
                    targetPositions[i3 + 1] = y;
                    targetPositions[i3 + 2] = z;
                }
            }
        }

        // Función para generar forma de peón de ajedrez
        function generatePawnPositions() {
            const baseRadius = 3;
            const stemHeight = 4;
            const headRadius = 1.5;
            const headHeight = 2;

            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                
                if (i < particlesCount * 0.3) {
                    // Base del peón (30%)
                    const radius = baseRadius * Math.sqrt(Math.random());
                    const angle = Math.random() * Math.PI * 2;
                    const y = -4;
                    
                    targetPositions[i3] = Math.cos(angle) * radius;
                    targetPositions[i3 + 1] = y;
                    targetPositions[i3 + 2] = Math.sin(angle) * radius;
                } else if (i < particlesCount * 0.6) {
                    // Vástago/tallo (30%)
                    const radius = 0.8;
                    const angle = Math.random() * Math.PI * 2;
                    const y = (Math.random() - 0.5) * stemHeight;
                    
                    targetPositions[i3] = Math.cos(angle) * radius;
                    targetPositions[i3 + 1] = y;
                    targetPositions[i3 + 2] = Math.sin(angle) * radius;
                } else {
                    // Cabeza del peón (40%)
                    const radius = headRadius * Math.sqrt(Math.random());
                    const angle = Math.random() * Math.PI * 2;
                    const y = stemHeight/2 + Math.random() * headHeight;
                    
                    targetPositions[i3] = Math.cos(angle) * radius;
                    targetPositions[i3 + 1] = y;
                    targetPositions[i3 + 2] = Math.sin(angle) * radius;
                }
            }
        }

        // Inicializar con forma de esfera
        generateSpherePositions();
        // Copiar posiciones iniciales a target
        targetPositions.set(positions);

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleSystem);

        camera.position.z = 12;

        const mouse = { x: 0, y: 0 };
    
        const handleMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const clock = new THREE.Clock();
        
        // Variables para controlar las transformaciones
        let currentShape = 'sphere';
        let transitionProgress = 0;
        let transitionSpeed = 0.005;
        let lastShapeChange = 0;
        const shapeChangeInterval = 5; // segundos entre cambios

        const animate = () => {
            requestAnimationFrame(animate);
            
            const elapsedTime = clock.getElapsedTime();
            
            // Rotación básica
            particleSystem.rotation.x = mouse.y * 0.3 + Math.sin(elapsedTime * 0.5) * 0.1;
            particleSystem.rotation.y = mouse.x * 0.3 + elapsedTime * 0.2;

            // Cambiar forma cada cierto tiempo
            if (elapsedTime - lastShapeChange > shapeChangeInterval) {
                transitionProgress = 0;
                lastShapeChange = elapsedTime;
                
                // Ciclo de formas: esfera -> laptop -> peón -> esfera
                if (currentShape === 'sphere') {
                    currentShape = 'laptop';
                    generateLaptopPositions();
                } else if (currentShape === 'laptop') {
                    currentShape = 'pawn';
                    generatePawnPositions();
                } else {
                    currentShape = 'sphere';
                    // Para volver a la esfera, usamos las posiciones originales
                    targetPositions.set(originalPositions);
                }
            }

            // Animación de transición entre formas
            if (transitionProgress < 1) {
                transitionProgress += transitionSpeed;
                
                const positionsArray = particlesGeometry.attributes.position.array;
                
                for (let i = 0; i < positionsArray.length; i++) {
                    // Interpolación suave usando easeOutCubic
                    const t = 1 - Math.pow(1 - transitionProgress, 3);
                    positionsArray[i] = positionsArray[i] + (targetPositions[i] - positionsArray[i]) * t;
                }
                
                particlesGeometry.attributes.position.needsUpdate = true;
            }

            // Pulsación suave (solo en modo esfera)
            if (currentShape === 'sphere' && transitionProgress >= 1) {
                const scale = 1 + Math.sin(elapsedTime) * 0.1;
                particleSystem.scale.set(scale, scale, scale);
            } else {
                particleSystem.scale.set(1, 1, 1);
            }

            renderer.render(scene, camera);
        };

        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="pointer-events-none"
        />
    );
}