export function androidDevice(): boolean;
export function ifAndroidDevice<T, U>(androidVal : T, regularVal: U): T | U;
export function getStatusBarHeight(safe?: boolean): number;
export function getDockSpace(): number;