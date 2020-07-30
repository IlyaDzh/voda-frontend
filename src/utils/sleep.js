export const sleep = millisecondsToSleep =>
    new Promise(resolve => setTimeout(() => resolve(), millisecondsToSleep));
