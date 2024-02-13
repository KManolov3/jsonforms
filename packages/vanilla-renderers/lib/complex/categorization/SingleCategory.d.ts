import React from 'react';
import type { Category, JsonSchema } from '@jsonforms/core';
export interface CategoryProps {
    category: Category;
    schema: JsonSchema;
    path: string;
}
export declare const SingleCategory: ({ category, schema, path }: CategoryProps) => React.JSX.Element;
