import { Definitions } from "./utils/types";
/**
 * Parse a file, storing the definitions of all constants, macros, and tables.
 * @param filePath The path to the file to parse.
 */
export declare const parseFile: (filePath: string) => {
    macros: Definitions;
    constants: Definitions;
    functions: Definitions["data"];
    events: Definitions["data"];
    tables: Definitions;
};
/**
 * Parse the content, storing the definitions of all constants, macros, and tables.
 * @param content The content to parse.
 */
export declare const parseContent: (content: string, importFile?: string) => {
    macros: Definitions;
    constants: Definitions;
    functions: Definitions["data"];
    events: Definitions["data"];
    tables: Definitions;
};
export declare const setStoragePointerConstants: (macrosToSearch: string[], macros: Definitions["data"], constants: Definitions) => {
    [name: string]: {
        args: any[];
        value: string;
        data?: any;
    };
};
/**
 * Assign constants that use the builtin FREE_STORAGE_POINTER(
 * @param constants Maps the name of constants to their values
 * @param order The order that the constants were declared in
 */
export declare const setStoragePointers: (constants: Definitions["data"], order: string[]) => {
    [name: string]: {
        args: any[];
        value: string;
        data?: any;
    };
};
