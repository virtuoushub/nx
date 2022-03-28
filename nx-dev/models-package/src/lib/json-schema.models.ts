/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type JsonSchema = boolean | JsonSchema1;
export type NonNegativeInteger = number;
export type NonNegativeIntegerDefault0 = NonNegativeInteger;
export type SchemaArray = [JsonSchema, ...JsonSchema[]];
export type StringArray = string[];
export type SimpleTypes =
  | 'array'
  | 'boolean'
  | 'integer'
  | 'null'
  | 'number'
  | 'object'
  | 'string';

export interface JsonSchema1 {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number | boolean;
  minimum?: number;
  exclusiveMinimum?: number | boolean;
  maxLength?: NonNegativeInteger;
  minLength?: NonNegativeIntegerDefault0;
  pattern?: string;
  additionalItems?: JsonSchema1;
  items?: JsonSchema | SchemaArray;
  maxItems?: NonNegativeInteger;
  minItems?: NonNegativeIntegerDefault0;
  uniqueItems?: boolean;
  contains?: JsonSchema;
  maxProperties?: NonNegativeInteger;
  minProperties?: NonNegativeIntegerDefault0;
  required?: StringArray;
  additionalProperties?: JsonSchema;
  definitions?: {
    [k: string]: JsonSchema;
  };
  properties?: {
    [k: string]: JsonSchema;
  };
  patternProperties?: {
    [k: string]: JsonSchema;
  };
  dependencies?: {
    [k: string]: JsonSchema | StringArray;
  };
  propertyNames?: JsonSchema;
  const?: true;
  enum?: [unknown, ...unknown[]];
  type?: SimpleTypes | [SimpleTypes, ...SimpleTypes[]];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: JsonSchema;
  then?: JsonSchema;
  else?: JsonSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: JsonSchema;
  [k: string]: unknown;
}