'use client'
import React, { useEffect, useRef } from 'react'
import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function BodyPhysics() {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); 
        mountRef.current.appendChild(renderer.domElement);

        const colorsREF = [
            new THREE.Color('#E63946'), 
            new THREE.Color('#FFB703'), 
            new THREE.Color('#FB8500'), 
            new THREE.Color('#8ECAE6'), 
            new THREE.Color('#219EBC'),
            new THREE.Color("#FFFFFF") 
        ];

        const colorPallete = colorsREF.map(color => color.getHex());

        const sceneMiddle = new THREE.Vector3(0, 0, 0);

        const geometries = [
            new THREE.SphereGeometry(0.65, 32, 32),
            new RoundedBoxGeometry(1.0, 1.0, 1.0, 2, 0.1),
            new THREE.TorusGeometry(0.65, 0.3, 16, 64),
            new THREE.TorusKnotGeometry(0.65, 0.25, 128, 32),
            new THREE.TetrahedronGeometry(1.0, 0),
        ];

        const glbLoader = new GLTFLoader();
        const glbPaths = ["duck.glb"];

        // Variables para física
        let world;
        let bodies = [];
        let mouseBall;

        async function loadGLTFModels() {
            const promises = glbPaths.map((path) =>
                new Promise((resolve, reject) => {
                    glbLoader.load(
                        `glb/${path}`,
                        (gltf) => {
                            const model = gltf.scene;
                            model.traverse((child) => {
                                if (child.isMesh) {
                                    geometries.push(child.geometry);
                                }
                            });
                            resolve();
                        },
                        undefined,
                        (error) => reject(error)
                    );
                })
            );

            try {
                await Promise.all(promises);
                console.log("All GLTF models loaded successfully.");
            } catch (error) {
                console.error("Error loading GLTF models:", error);
            }
        }

        function getGeometry(size) {
            const randomGeo = geometries[Math.floor(Math.random() * geometries.length)];
            const geo = randomGeo.clone();
            geo.scale(size, size, size);
            return geo;
        }

        function getBody(RAPIER, world) {
            const size = 0.5;
            const range = 12;
            const density = size * 1.0;
            let x = Math.random() * range - range * 0.5;
            let y = Math.random() * range - range * 0.5 + 3;
            let z = Math.random() * range - range * 0.5;
            
            let color = colorPallete[Math.floor(Math.random() * colorPallete.length)];
            const geometry = getGeometry(size);
            const prob = Math.random();
            const options = prob < 0.33 ? {
                color,
                metalness: 1,
                roughness: 0.1,
            } : prob < 0.66 ? {
                roughness: 0.1,
                transmission: 1.0,
                transparent: true,
                thickness: 3.0,
            } : {
                color,
                emissive: color,
                emissiveIntensity: 0.5,
                metalness: 0.0,
                roughness: 0.5,
            };
            const material = new THREE.MeshPhysicalMaterial(options);
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            // physics
            let rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
                .setTranslation(x, y, z);
            let rigid = world.createRigidBody(rigidBodyDesc);
            let points = geometry.attributes.position.array;
            let colliderDesc = RAPIER.ColliderDesc.convexHull(points).setDensity(density);
            world.createCollider(colliderDesc, rigid);

            function update() {
                rigid.resetForces(true);
                let { x, y, z } = rigid.translation();
                let pos = new THREE.Vector3(x, y, z);
                let dir = pos.clone().sub(sceneMiddle).normalize();
                let q = rigid.rotation();
                let rote = new THREE.Quaternion(q.x, q.y, q.z, q.w);
                mesh.rotation.setFromQuaternion(rote);
                rigid.addForce(dir.multiplyScalar(-0.5), true);
                mesh.position.set(x, y, z);
            }
            return { mesh, rigid, update };
        }
        
        function getMouseBall(RAPIER, world) {
            const mouseSize = 0.25;
            const geometry = new THREE.IcosahedronGeometry(mouseSize, 8);
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffff,
            });
            const mouseMesh = new THREE.Mesh(geometry, material);
            scene.add(mouseMesh);
            
            // RIGID BODY
            let bodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 0, 0)
            let mouseRigid = world.createRigidBody(bodyDesc);
            let dynamicCollider = RAPIER.ColliderDesc.ball(mouseSize * 3.0);
            world.createCollider(dynamicCollider, mouseRigid);
            
            function update(mousePos) {
                mouseRigid.setTranslation({ x: mousePos.x, y: mousePos.y, z: mousePos.z });
                let { x, y, z } = mouseRigid.translation();
                mouseMesh.position.set(x, y, z);
            }
            return { mesh: mouseMesh, update };
        }

        // Inicializar física
        async function initPhysics() {
            const RAPIER = await import('@dimforge/rapier3d-compat');
            await RAPIER.init();
            
            const gravity = new RAPIER.Vector3(0.0, -9.81, 0.0);
            world = new RAPIER.World(gravity);

            // Crear objetos físicos
            const objectCount = 50;
            for (let i = 0; i < objectCount; i++) {
                const body = getBody(RAPIER, world);
                bodies.push(body);
            }

            // Crear bola del mouse
            mouseBall = getMouseBall(RAPIER, world);

            return RAPIER;
        }

        // Cargar modelos e inicializar física
        Promise.all([loadGLTFModels(), initPhysics()]).then(([_, RAPIER]) => {
            // Configuración de cámara
            camera.position.z = 15;
            camera.position.y = 5;

            // Luces
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(5, 10, 7);
            scene.add(directionalLight);

            // Control de mouse
            const mouse = new THREE.Vector3();
            const mouseTarget = new THREE.Vector3();
            
            const handleMouseMove = (event) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                
                // Convertir coordenadas del mouse a posición 3D
                mouseTarget.set(mouse.x * 10, mouse.y * 10, 0);
            };

            window.addEventListener('mousemove', handleMouseMove);

            // Animación
            const clock = new THREE.Clock();
            
            const animate = () => {
                requestAnimationFrame(animate);
                
                const elapsedTime = clock.getElapsedTime();
                
                // Actualizar física
                if (world) {
                    world.step();
                    
                    // Actualizar objetos físicos
                    bodies.forEach(body => body.update());
                    
                    // Actualizar bola del mouse
                    if (mouseBall) {
                        mouseBall.update(mouseTarget);
                    }
                }

                // Rotación suave de cámara
                camera.position.x = Math.sin(elapsedTime * 0.1) * 10;
                camera.lookAt(sceneMiddle);

                renderer.render(scene, camera);
            };

            animate();

            // Cleanup
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                if (world) {
                    // Limpiar recursos de física
                    bodies.forEach(body => {
                        scene.remove(body.mesh);
                        body.mesh.geometry.dispose();
                        body.mesh.material.dispose();
                    });
                    if (mouseBall) {
                        scene.remove(mouseBall.mesh);
                        mouseBall.mesh.geometry.dispose();
                        mouseBall.mesh.material.dispose();
                    }
                }
            };
        });

        // Cleanup principal
        return () => {
            if (mountRef.current && renderer.domElement) {
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