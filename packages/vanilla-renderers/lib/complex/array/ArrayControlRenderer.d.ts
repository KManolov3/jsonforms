import React from 'react';
import { ArrayControlProps } from '@jsonforms/core';
import type { VanillaRendererProps } from '../../index';
export declare const ArrayControl: ({ classNames, data, label, path, schema, errors, addItem, removeItems, moveUp, moveDown, uischema, uischemas, getStyleAsClassName, renderers, rootSchema, translations, }: ArrayControlProps & VanillaRendererProps) => React.JSX.Element;
export declare const ArrayControlRenderer: ({ schema, uischema, data, path, rootSchema, uischemas, addItem, getStyle, getStyleAsClassName, removeItems, moveUp, moveDown, id, visible, enabled, errors, translations, }: ArrayControlProps & VanillaRendererProps) => React.JSX.Element;
declare const _default: (props: any) => React.JSX.Element;
export default _default;
