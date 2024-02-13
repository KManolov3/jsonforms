import React from 'react';
import { EnumCellProps, RankedTester } from '@jsonforms/core';
import { TranslateProps } from '@jsonforms/react';
import type { VanillaRendererProps } from '../index';
export declare const EnumCell: (props: EnumCellProps & VanillaRendererProps & TranslateProps) => React.JSX.Element;
/**
 * Default tester for enum controls.
 * @type {RankedTester}
 */
export declare const enumCellTester: RankedTester;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfEnumCell>;
export default _default;
