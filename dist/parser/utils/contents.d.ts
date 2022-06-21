/**
 * Given a file path, return a string containing the raw
 * file contents of all imported files (including files imported in imported files).
 * @param filepath The path to the original file
 */
declare const getAllFileContents: (filepath: string) => {
    contents: string[];
    imports: string[];
};
export default getAllFileContents;
