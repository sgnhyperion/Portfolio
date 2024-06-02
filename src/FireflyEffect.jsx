import React, { useRef, useEffect } from 'react';

const FireflyEffect = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Firefly {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.alpha = Math.random();
                this.alphaChange = Math.random() * 0.02 - 0.01;
            }

            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off the edges
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

                // Flicker effect
                this.alpha += this.alphaChange;
                if (this.alpha <= 0 || this.alpha >= 1) this.alphaChange *= -1;

                this.draw();
            }
        }

        const firefliesArray = [];

        function init() {
            firefliesArray.length = 0;
            const numberOfFireflies = (canvas.width * canvas.height) / 9000;
            for (let i = 0; i < numberOfFireflies; i++) {
                firefliesArray.push(new Firefly());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            firefliesArray.forEach(firefly => firefly.update());
            requestAnimationFrame(animate);
        }

        init();
        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); // Reinitialize fireflies when resizing
        });
    }, []);

    return <canvas ref={canvasRef} />;
};

export default FireflyEffect;
