// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  interface VideoGame {
    name: string;
    image: string;
  }
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
    }
  }
}
