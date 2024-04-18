import { ForwardedRef } from "react";
/** make ForwardRef
 *
 * ported from https://stackoverflow.com/a/73748435
 */
export declare const useForwardRef: <T>(ref: ForwardedRef<T>, initialValue?: T | null) => import("react").RefObject<T>;
