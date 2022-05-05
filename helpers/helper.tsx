import Resolution from '@unstoppabledomains/resolution'

export const getDecimals = (num: number) => {
    // very ugly and bad practice i know, later will fix
    if (num > 1000) return num.toFixed(1);
    if (num > 100) return num.toFixed(2);
    if (num > 10) return num.toFixed(3);
    if (num < 10) return num.toFixed(3);
    if (num < 1) return num.toFixed(4);
    if (num < 0.1) return num.toFixed(5);
    if (num < 0.01) return num.toFixed(6);
    if (num < 0.001) return num.toFixed(7);
    if (num < 0.0001) return num.toFixed(8);
    if (num < 0.00001) return num.toFixed(9);
    if (num < 0.000001) return num.toFixed(10);
    if (num < 0.0000001) return num.toFixed(11);
}

