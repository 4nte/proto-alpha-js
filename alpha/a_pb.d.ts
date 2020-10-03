// package: alpha
// file: alpha/a.proto

import * as jspb from "google-protobuf";

export class AlphaTest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlphaTest.AsObject;
  static toObject(includeInstance: boolean, msg: AlphaTest): AlphaTest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AlphaTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlphaTest;
  static deserializeBinaryFromReader(message: AlphaTest, reader: jspb.BinaryReader): AlphaTest;
}

export namespace AlphaTest {
  export type AsObject = {
  }
}

