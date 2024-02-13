import React from 'react';
import { ControlProps, ControlState, RankedTester } from '@jsonforms/core';
import { Control } from '@jsonforms/react';
import type { VanillaRendererProps } from '../index';
export declare class InputControl extends Control<ControlProps & VanillaRendererProps, ControlState> {
    render(): React.JSX.Element;
}
export declare const inputControlTester: RankedTester;
declare const _default: (props: any) => React.JSX.Element;
export default _default;
