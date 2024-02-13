import React from 'react';
import { Category, Categorization, Translator } from '@jsonforms/core';
import { AjvProps } from '../../util';
export interface CategorizationProps {
    elements: (Category | Categorization)[];
    selectedCategory: Category;
    depth: number;
    data: any;
    onSelect: any;
    subcategoriesClassName: string;
    groupClassName: string;
    t: Translator;
}
export declare const CategorizationList: ({ selectedCategory, elements, data, depth, onSelect, subcategoriesClassName, groupClassName, t, ajv, }: CategorizationProps & AjvProps) => React.JSX.Element;
