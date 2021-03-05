export default function NumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function corAleatoria() {
    let bg_colour = Math.floor(Math.random() * 16777215).toString(16);
    return bg_colour = "#" + ("000000" + bg_colour).slice(-6);
}
    