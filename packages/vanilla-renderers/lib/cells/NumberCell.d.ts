import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import type { VanillaRendererProps } from '../index';
export declare const NumberCell: (props: CellProps & VanillaRendererProps) => React.JSX.Element;
/**
 * Default tester for number controls.
 * @type {RankedTester}
 */
export declare const numberCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
