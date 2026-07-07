import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 176;
const IMAGE_PATH = (index: number) => `/modelimage/ezgif-frame-${String(index).padStart(3, '0')}.jpg`;
const LERP_FACTOR = 0.1;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

export default function ModelCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imageCacheRef = useRef<HTMLImageElement[]>([]);
    const targetProgressRef = useRef(0);
    const currentProgressRef = useRef(0);
    const animationRef = useRef<number | null>(null);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        const images: HTMLImageElement[] = [];
        for (let i = 1; i <= FRAME_COUNT; i += 1) {
            const img = new Image();
            img.src = IMAGE_PATH(i);
            img.onload = () => setLoadedCount((p) => p + 1);
            img.onerror = () => setLoadedCount((p) => p + 1);
            images.push(img);
        }
        imageCacheRef.current = images;
    }, []);

    useEffect(() => {
        const updateTargetProgress = () => {
            const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
            const progress = scrollRange > 0 ? window.scrollY / scrollRange : 0;
            targetProgressRef.current = clamp(progress, 0, 1);
        };

        const handleScroll = () => {
            updateTargetProgress();
        };

        updateTargetProgress();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        const width = Math.floor(window.innerWidth * dpr);
        const height = Math.floor(window.innerHeight * dpr);
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
    };

    const drawFrame = (progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        if (!context) return;

        const dpr = window.devicePixelRatio || 1;
        const frameIndex = clamp(Math.round(progress * (FRAME_COUNT - 1)), 0, FRAME_COUNT - 1);
        const image = imageCacheRef.current[frameIndex];
        if (!image || !image.complete) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const canvasWidth = canvas.width / dpr;
        const canvasHeight = canvas.height / dpr;
        const canvasRatio = canvasWidth / canvasHeight;
        const imageRatio = image.width / image.height;
        let drawWidth = canvasWidth;
        let drawHeight = canvasHeight;

        if (imageRatio > canvasRatio) {
            drawHeight = canvasHeight;
            drawWidth = image.width * (canvasHeight / image.height);
        } else {
            drawWidth = canvasWidth;
            drawHeight = image.height * (canvasWidth / image.width);
        }

        const offsetX = (canvasWidth - drawWidth) / 2;
        const offsetY = (canvasHeight - drawHeight) / 2;

        context.save();
        context.scale(dpr, dpr);
        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
        context.restore();
    };

    useEffect(() => {
        resizeCanvas();
        const onResize = () => {
            resizeCanvas();
            drawFrame(currentProgressRef.current);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        let rafId = 0;
        const animate = () => {
            currentProgressRef.current = lerp(
                currentProgressRef.current,
                targetProgressRef.current,
                LERP_FACTOR,
            );
            if (Math.abs(currentProgressRef.current - targetProgressRef.current) < 0.0005) {
                currentProgressRef.current = targetProgressRef.current;
            }
            drawFrame(currentProgressRef.current);
            rafId = window.requestAnimationFrame(animate);
        };

        rafId = window.requestAnimationFrame(animate);
        animationRef.current = rafId;
        return () => {
            if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
        };
    }, []);

    const loadingProgress = Math.round((loadedCount / FRAME_COUNT) * 100);
    const hasLoaded = loadedCount >= FRAME_COUNT;

    return (
        <>
            <canvas ref={canvasRef} className="scene-canvas pt-17" aria-hidden="true" />

            {!hasLoaded && (
                <div className="loading-screen z-10">
                    <div className="loading-card">
                        <span className="loading-label">Rendering model preview</span>
                        <div className="loading-meter">
                            <div className="loading-bar" style={{ width: `${loadingProgress}%` }} />
                        </div>
                        <span className="loading-percent">{Math.min(loadingProgress, 100)}</span>
                    </div>
                </div>
            )}
        </>
    );
}
