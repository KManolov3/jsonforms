import React from 'react';
import type { Category, LayoutProps } from '@jsonforms/core';
import { TranslateProps } from '@jsonforms/react';
import type { AjvProps, VanillaRendererProps } from '../../util';
export interface CategorizationState {
    selectedCategory: Category;
}
interface CategorizationProps {
    selected?: number;
    onChange?(selected: number, prevSelected: number): void;
}
export declare const CategorizationRenderer: ({ data, uischema, schema, path, selected, t, visible, getStyleAsClassName, onChange, ajv, }: LayoutProps & VanillaRendererProps & TranslateProps & CategorizationProps & AjvProps) => React.JSX.Element;
declare const _default: (props: any) => React.JSX.Element;
export default _default;
