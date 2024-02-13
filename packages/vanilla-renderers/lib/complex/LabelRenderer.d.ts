import React, { FunctionComponent } from 'react';
import { LabelProps, RankedTester } from '@jsonforms/core';
import type { VanillaRendererProps } from '../index';
/**
 * Default tester for a label.
 * @type {RankedTester}
 */
export declare const labelRendererTester: RankedTester;
/**
 * Default renderer for a label.
 */
export declare const LabelRenderer: FunctionComponent<LabelProps & VanillaRendererProps>;
declare const _default: (props: any) => React.JSX.Element;
export default _default;
