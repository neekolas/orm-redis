
/**
 * Check if given function constructor has given prototype in inheritance chain
 * 
 * @export
 * @template TProto 
 * @param cl 
 * @param checkProto 
 * @returns 
 */
export function hasPrototypeOf<TProto extends Function>(cl: Function | undefined, checkProto: TProto): cl is TProto {
    if (!cl) {
        return false;
    }
    let prototype = cl.prototype;
    while (prototype) {
        if (prototype === checkProto.prototype) { return true; }
        prototype = Object.getPrototypeOf(prototype);
    }
    return false;
}