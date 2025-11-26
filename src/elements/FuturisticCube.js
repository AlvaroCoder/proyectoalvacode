'use client'
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const COLOR_PRIMARY = 0xFFB703; 
const COLOR_ACCENT = 0xE63946;  // Rojo Vibrante
const COLOR_BG = 0x212529;      // Negro Oscuro

const FuturisticCube = () => {
    const mountRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!mountRef.current) return;

        const currentMount = mountRef.current;
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(COLOR_BG);

        // 2. Configuración de la Cámara
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2;

        // 3. Configuración del Renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        // Desactivamos el fondo del renderizador para que se vea el fondo CSS
        renderer.setClearColor(0x000000, 0); 
        currentMount.appendChild(renderer.domElement);

        // 4. Creación del Cubo (Geometría)
        const geometry = new THREE.BoxGeometry(1, 1, 1);

        // Materiales Futuristas
        // Material de malla (Neon)
        const cubeMaterial = new THREE.MeshBasicMaterial({ 
            color: COLOR_ACCENT, 
            wireframe: false, 
            transparent: true,
            opacity: 0.2 // Poca opacidad para el cuerpo
        });
        const cube = new THREE.Mesh(geometry, cubeMaterial);
        scene.add(cube);

        // Material de alambre (Wireframe Neón)
        const edges = new THREE.EdgesGeometry(geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ color: COLOR_PRIMARY, linewidth: 2 });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        scene.add(wireframe);
        
        // Sincronizar el cubo y el wireframe
        wireframe.rotation.copy(cube.rotation);


        // 5. Función de Animación
        let animationFrameId;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Tasa de rotación base
            let rotationSpeed = 0.005;

            // Aceleración al hacer hover
            if (isHovered) {
                rotationSpeed = 0.02; // Más rápido cuando se pasa el ratón
            }

            // Rotación
            cube.rotation.x += rotationSpeed;
            cube.rotation.y += rotationSpeed * 0.7;
            wireframe.rotation.copy(cube.rotation);

            renderer.render(scene, camera);
        };

        animate();

        // 6. Manejo de Redimensionamiento
        const handleResize = () => {
            const newWidth = currentMount.clientWidth;
            const newHeight = currentMount.clientHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        // 7. Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            currentMount.removeChild(renderer.domElement);
            renderer.dispose();
            geometry.dispose();
            cubeMaterial.dispose();
            lineMaterial.dispose();
            // Limpieza de otros objetos
            scene.remove(cube);
            scene.remove(wireframe);
        };
    }, [isHovered]); 

    return (
        <div
            ref={mountRef}
            className="w-full h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
};

export default FuturisticCube;