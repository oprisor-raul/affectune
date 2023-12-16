export const responsiveFontSize = (width, height, f) => {
    return Math.sqrt((height * height) + (width * width)) * (f / 100);
};
