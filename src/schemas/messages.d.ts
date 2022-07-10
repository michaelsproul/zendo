/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Permissible messages to be passed between peers
 */
export type ZendoGameMessages =
  | {
      type: "display";
      name: string;
    }
  | {
      type: "peers";
      peers: string[];
    }
  | {
      type: "chat";
      msg: string;
    }
  | {
      type: "askdisplay";
    }
  | {
      type: "gameReplace";
      game: string;
      msg?: string;
    }
  | {
      type: "notifyAbandon";
    }
  | {
      type: "vote";
      vote: boolean;
    };