export const onDev = <T>(fn: Function, arg: T) => {
    if (process.env.NODE_ENV === 'production') {
        return arg;
    }

    return fn(arg);
};

// <F extends Function>(fn: F): F | undefined => {

export const onProd = <T>(fn: Function, arg: T) => {
    if (process.env.NODE_ENV !== 'production') {
        return arg;
    }

    return fn(arg);
};