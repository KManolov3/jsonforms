import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import type { VanillaRendererProps } from '../index';
export declare const TextCell: (props: CellProps & VanillaRendererProps) => React.JSX.Element;
/**
 * Default tester for text-based/string controls.
 * @type {RankedTester}
 */
export declare const textCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
