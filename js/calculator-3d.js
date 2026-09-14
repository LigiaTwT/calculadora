const calculatorScene = document.querySelector(".calculator-scene");
const calculator3dWrapper = document.querySelector(".calculator-3d-wrapper");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const precisePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

const maxRotateX = 6;
const maxRotateY = 8;
const wheelSensitivity = 0.01;
const smoothing = 0.12;

let currentRotateX = 0;
let currentRotateY = 0;
let targetRotateX = 0;
let targetRotateY = 0;
let animationFrameId = null;
let isInteractionEnabled = false;


function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
}


function update3DRotation() {
    calculator3dWrapper.style.setProperty("--rotate-x", `${currentRotateX}deg`);
    calculator3dWrapper.style.setProperty("--rotate-y", `${currentRotateY}deg`);
}


function animate3DRotation() {
    currentRotateX += (targetRotateX - currentRotateX) * smoothing;
    currentRotateY += (targetRotateY - currentRotateY) * smoothing;

    const isSettled =
        Math.abs(targetRotateX - currentRotateX) < 0.01 &&
        Math.abs(targetRotateY - currentRotateY) < 0.01;

    if (isSettled) {
        currentRotateX = targetRotateX;
        currentRotateY = targetRotateY;
    }

    update3DRotation();

    animationFrameId = isSettled
        ? null
        : window.requestAnimationFrame(animate3DRotation);
}


function requestRotationUpdate() {
    if (animationFrameId === null) {
        animationFrameId = window.requestAnimationFrame(animate3DRotation);
    }
}


function handleMouseMove(event) {
    const sceneBounds = calculatorScene.getBoundingClientRect();
    const horizontalPosition = (event.clientX - sceneBounds.left) / sceneBounds.width;

    targetRotateY = clamp(
        (horizontalPosition - 0.5) * maxRotateY * 2,
        -maxRotateY,
        maxRotateY
    );

    requestRotationUpdate();
}


function handleMouseLeave() {
    targetRotateY = 0;

    requestRotationUpdate();
}


function handleWheel(event) {
    targetRotateX = clamp(
        targetRotateX + event.deltaY * wheelSensitivity,
        -maxRotateX,
        maxRotateX
    );

    requestRotationUpdate();
}


function reset3DRotation() {
    targetRotateX = 0;
    targetRotateY = 0;
    currentRotateX = 0;
    currentRotateY = 0;

    if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    update3DRotation();
}


function enable3DInteraction() {
    if (isInteractionEnabled) {
        return;
    }

    calculatorScene.addEventListener("mousemove", handleMouseMove);
    calculatorScene.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("wheel", handleWheel, { passive: true });

    isInteractionEnabled = true;
}


function disable3DInteraction() {
    if (!isInteractionEnabled) {
        reset3DRotation();

        return;
    }

    calculatorScene.removeEventListener("mousemove", handleMouseMove);
    calculatorScene.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("wheel", handleWheel);

    isInteractionEnabled = false;

    reset3DRotation();
}


function updateInteractionAvailability() {
    const canUse3DInteraction =
        precisePointerQuery.matches && !reducedMotionQuery.matches;

    if (canUse3DInteraction) {
        enable3DInteraction();
    } else {
        disable3DInteraction();
    }
}


precisePointerQuery.addEventListener("change", updateInteractionAvailability);
reducedMotionQuery.addEventListener("change", updateInteractionAvailability);

updateInteractionAvailability();
