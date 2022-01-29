declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.txt?raw" {
    const content: string;
    export default content;
}
