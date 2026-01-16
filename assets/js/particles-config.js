
// tsparticles Configuration
// Loads a subtle "constellation" effect

const particlesConfig = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.1, // Subtle
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false
            }
        },
        links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.1, // Subtle lines
            width: 1
        },
        move: {
            enable: true,
            speed: 1, // Slow movement
            direction: "none",
            random: false,
            straight: false,
            outModes: {
                default: "out"
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "bubble" // Gentle interaction
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                links: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 6, // Slightly larger on hover
                duration: 2,
                opacity: 0.3,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                quantity: 4
            },
            remove: {
                quantity: 2
            }
        }
    },
    detectRetina: true,
    background: {
        color: "transparent" // Let website background show through
    }
};

// Initialize tsparticles
// We check if "tsparticles" container exists to avoid errors on other pages
if (document.getElementById('tsparticles')) {
    tsParticles.load("tsparticles", particlesConfig);
}
