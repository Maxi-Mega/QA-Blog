const baseUrl = import.meta.env.BASE_URL.replace(`/$`, "");

export const link = (path: string): string => {
    if (baseUrl === "" || baseUrl === "/") return path;
    return (baseUrl + "/" + path.replace(`^/`, "")).replace("//", "/");
}