declare const throttle: (delay: number | undefined, fn: Function) => (...args: any[]) => any;
export default throttle;
