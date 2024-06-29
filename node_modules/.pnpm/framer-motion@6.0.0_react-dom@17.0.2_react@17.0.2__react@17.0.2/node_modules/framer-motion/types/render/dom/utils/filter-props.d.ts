import { MotionProps } from "../../../motion/types";
export declare type IsValidProp = (key: string) => boolean;
export declare function loadExternalIsValidProp(isValidProp?: IsValidProp): void;
export declare function filterProps(props: MotionProps, isDom: boolean, forwardMotionProps: boolean): {};
