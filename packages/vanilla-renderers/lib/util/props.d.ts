import Ajv from 'ajv';
import React, { ComponentType } from 'react';
import type { JsonFormsState, OwnPropsOfCell, OwnPropsOfControl, OwnPropsOfRenderer, RendererProps, StatePropsOfCell, StatePropsOfControl } from '@jsonforms/core';
export interface WithClassname {
    className?: string;
}
export interface AjvProps {
    ajv: Ajv;
}
export interface WithChildren {
    children: any;
}
/**
 * Additional renderer props specific to vanilla renderers.
 */
export interface VanillaRendererProps extends WithClassname {
    classNames?: {
        [className: string]: string;
    };
    /**
     * Returns all classes associated with the given style.
     * @param {string} string the style name
     * @param args any additional args necessary to calculate the classes
     * @returns {string[]} array of class names
     */
    getStyle?(string: string, ...args: any[]): string[];
    /**
     * Returns all classes associated with the given style as a single class name.
     * @param {string} string the style name
     * @param args any additional args necessary to calculate the classes
     * @returns {string[]} array of class names
     */
    getStyleAsClassName?(string: string, ...args: any[]): string;
}
/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps existing mapStateToProps function
 * @returns {VanillaControlStateProps} vanilla-specific control props
 */
export declare const addVanillaControlProps: <P extends StatePropsOfControl>(mapStateToProps: (s: JsonFormsState, p: OwnPropsOfControl) => P) => (state: JsonFormsState, ownProps: OwnPropsOfControl) => StatePropsOfControl & VanillaRendererProps;
export declare const withVanillaControlProps: (Component: ComponentType<any>) => (props: any) => React.JSX.Element;
/**
 * Add vanilla props to the return value of calling the given
 * mapStateToProps function.
 *
 * @param mapStateToProps an existing mapStateToProps function for retrieving layout props
 * @returns {VanillaLayoutProps} vanilla specific layout props
 */
export declare const addVanillaLayoutProps: (mapStateToProps: (s: JsonFormsState, p: OwnPropsOfRenderer) => RendererProps) => (state: JsonFormsState, ownProps: OwnPropsOfRenderer) => RendererProps & VanillaRendererProps;
export declare const addVanillaCellProps: (mapStateToCellsProps: (s: JsonFormsState, p: OwnPropsOfCell) => StatePropsOfCell) => (state: JsonFormsState, ownProps: OwnPropsOfCell) => StatePropsOfCell & VanillaRendererProps;
export declare const withAjvProps: <P extends object>(Component: React.ComponentType<AjvProps & P>) => (props: P) => React.JSX.Element;
export declare const withVanillaCellProps: (Component: ComponentType<any>) => (props: any) => React.JSX.Element;
export declare const withVanillaEnumCellProps: (Component: ComponentType<any>) => (props: any) => React.JSX.Element;
export declare const withVanillaBooleanCellProps: (Component: ComponentType<any>) => (props: any) => React.JSX.Element;
