import React from 'react';
import { CellProps, RankedTester } from '@jsonforms/core';
import type { VanillaRendererProps } from '../index';
export declare const DateCell: (props: CellProps & VanillaRendererProps) => React.JSX.Element;
/**
 * Default tester for date controls.
 * @type {RankedTester}
 */
export declare const dateCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfCell>;
export default _default;
