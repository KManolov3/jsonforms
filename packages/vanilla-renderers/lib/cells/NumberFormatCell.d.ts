import React from 'react';
import { CellProps, Formatted, RankedTester } from '@jsonforms/core';
import type { VanillaRendererProps } from '../index';
export declare const NumberFormatCell: (props: CellProps & VanillaRendererProps & Formatted<number | undefined>) => React.JSX.Element;
/**
 * Default tester for text-based/string controls.
 * @type {RankedTester}
 */
export declare const numberFormatCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;