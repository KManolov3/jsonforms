import { ArrayTranslationEnum, NOT_APPLICABLE, convertDateToString, updateErrors } from '@jsonforms/core';
import { get } from 'lodash';
import get$1 from 'lodash/get';

const knownExamples = {};
const registerExamples = (examples) => {
    examples.forEach((example) => (knownExamples[example.name] = example));
};
const getExamples = () => {
    const examples = Object.keys(knownExamples).map((key) => knownExamples[key]);
    examples.sort((a, b) => a.label.localeCompare(b.label));
    return examples;
};

const schema$K = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        address: {
            type: 'object',
            properties: {
                street_address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
            },
            required: ['street_address', 'city', 'state'],
        },
    },
    type: 'object',
    properties: {
        billing_address: { $ref: '#/definitions/address' },
        shipping_address: {
            allOf: [
                { $ref: '#/definitions/address' },
                {
                    type: 'object',
                    properties: {
                        type: {
                            type: 'string',
                            enum: ['residential', 'business'],
                        },
                    },
                    required: ['type'],
                },
            ],
        },
    },
};
const uischema$K = {
    type: 'VerticalLayout',
    elements: [
        {
            label: 'Billing address',
            type: 'Control',
            scope: '#/properties/billing_address',
        },
        {
            type: 'Control',
            scope: '#/properties/shipping_address',
        },
    ],
};
const data$M = {
    billing_address: {
        street_address: '1600 Pennsylvania Avenue NW',
        city: 'Washington',
        state: 'DC',
    },
};
registerExamples([
    {
        name: 'allOf',
        label: 'allOf',
        data: data$M,
        schema: schema$K,
        uischema: uischema$K,
    },
]);

var allOf = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$K,
  uischema: uischema$K
});

const schema$J = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        address: {
            type: 'object',
            properties: {
                street_address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
            },
            required: ['street_address', 'city', 'state'],
        },
        user: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                mail: { type: 'string' },
            },
            required: ['name', 'mail'],
        },
        users: {
            type: 'array',
            items: { $ref: '#/definitions/user' },
        },
        addresses: {
            type: 'array',
            items: { $ref: '#/definitions/address' },
        },
    },
    type: 'object',
    properties: {
        addressOrUser: {
            anyOf: [
                { $ref: '#/definitions/address' },
                { $ref: '#/definitions/user' },
            ],
        },
        addressesOrUsers: {
            anyOf: [
                { $ref: '#/definitions/addresses' },
                { $ref: '#/definitions/users' },
            ],
        },
        addressesOrUsersAnyOfItems: {
            type: 'array',
            items: {
                anyOf: [
                    { $ref: '#/definitions/addresses' },
                    { $ref: '#/definitions/users' },
                ],
            },
        },
    },
};
const uischema$J = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/addressOrUser',
        },
        {
            type: 'Control',
            scope: '#/properties/addressesOrUsers',
            label: 'Addresses or Users (AnyOf Schema)',
        },
        {
            type: 'Control',
            scope: '#/properties/addressesOrUsersAnyOfItems',
            label: 'Addresses or Users (AnyOf Array Items)',
        },
    ],
};
const data$L = {
    addressOrUser: {
        street_address: '1600 Pennsylvania Avenue NW',
        city: 'Washington',
        state: 'DC',
    },
};
const schema_simple = {
    type: 'object',
    properties: {
        foo: {
            anyOf: [{ type: 'string' }, { enum: ['foo', 'bar'] }],
        },
    },
};
registerExamples([
    {
        name: 'anyOf',
        label: 'anyOf',
        data: data$L,
        schema: schema$J,
        uischema: uischema$J,
    },
    {
        name: 'anyOf_simple',
        label: 'AnyOf Simple',
        data: { foo: 'foo' },
        schema: schema_simple,
        uischema: undefined,
    },
]);

var anyOf = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$J,
  uischema: uischema$J
});

const schema$I = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        address: {
            type: 'object',
            properties: {
                street_address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
            },
            required: ['street_address', 'city', 'state'],
            additionalProperties: false,
        },
        user: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                mail: { type: 'string' },
            },
            required: ['name', 'mail'],
            additionalProperties: false,
        },
    },
    type: 'object',
    properties: {
        name: { type: 'string' },
        addressOrUser: {
            oneOf: [
                { $ref: '#/definitions/address' },
                { $ref: '#/definitions/user' },
            ],
        },
    },
    required: ['name'],
};
const uischema$I = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/name',
        },
        {
            type: 'Control',
            scope: '#/properties/addressOrUser',
        },
    ],
};
const data$K = {
    name: 'test',
    addressOrUser: {
        name: 'User',
        mail: 'mail@example.com',
    },
};
const schema_1265_array = {
    type: 'object',
    properties: {
        coloursOrNumbers: {
            oneOf: [
                {
                    $ref: '#/definitions/colours',
                },
                {
                    $ref: '#/definitions/numbers',
                },
                {
                    $ref: '#/definitions/shapes',
                },
            ],
        },
    },
    definitions: {
        colours: {
            title: 'Colours',
            type: 'array',
            minItems: 1,
            items: {
                title: 'Type',
                type: 'string',
                enum: ['Red', 'Green', 'Blue'],
            },
        },
        numbers: {
            title: 'Numbers',
            type: 'array',
            minItems: 1,
            items: {
                title: 'Type',
                type: 'string',
                enum: ['One', 'Two', 'Three'],
            },
        },
        shapes: {
            title: 'Shapes',
            type: 'array',
            minItems: 1,
            items: {
                title: 'Type',
                type: 'string',
                enum: ['Circle', 'Triangle', 'Square'],
            },
        },
    },
};
const schema_1265_object = {
    type: 'object',
    properties: {
        coloursOrNumbers: {
            oneOf: [
                {
                    $ref: '#/definitions/colours',
                },
                {
                    $ref: '#/definitions/numbers',
                },
                {
                    $ref: '#/definitions/shapes',
                },
            ],
        },
    },
    additionalProperties: false,
    definitions: {
        colours: {
            title: 'Colours',
            type: 'object',
            properties: {
                colour: {
                    title: 'Type',
                    type: 'string',
                    enum: ['Red', 'Green', 'Blue'],
                },
            },
            additionalProperties: false,
        },
        numbers: {
            title: 'Numbers',
            type: 'object',
            properties: {
                number: {
                    title: 'Type',
                    type: 'string',
                    enum: ['One', 'Two', 'Three'],
                },
            },
            additionalProperties: false,
        },
        shapes: {
            title: 'Shapes',
            type: 'object',
            properties: {
                shape: {
                    title: 'Type',
                    type: 'string',
                    enum: ['Circle', 'Triangle', 'Square'],
                },
            },
            additionalProperties: false,
        },
    },
};
const schema_1265_simple = {
    type: 'object',
    properties: {
        coloursOrNumbers: {
            oneOf: [
                {
                    $ref: '#/definitions/colours',
                },
                {
                    $ref: '#/definitions/numbers',
                },
                {
                    $ref: '#/definitions/shapes',
                },
            ],
        },
    },
    definitions: {
        colours: {
            title: 'Colours',
            type: 'string',
            enum: ['Red', 'Green', 'Blue'],
        },
        numbers: {
            title: 'Numbers',
            type: 'string',
            enum: ['One', 'Two', 'Three'],
        },
        shapes: {
            title: 'Shapes',
            type: 'string',
            enum: ['Circle', 'Triangle', 'Square'],
        },
    },
};
const schema_1273 = {
    type: 'object',
    properties: {
        quantity: {
            oneOf: [
                {
                    $ref: '#/definitions/unrangedQuantity',
                },
                {
                    $ref: '#/definitions/rangedQuantity',
                },
            ],
        },
    },
    definitions: {
        unrangedQuantity: {
            title: 'Value',
            type: 'object',
            properties: {
                value: {
                    type: 'number',
                },
                unit: {
                    type: 'string',
                },
            },
            required: ['value', 'unit'],
        },
        rangedQuantity: {
            title: 'Range',
            type: 'object',
            properties: {
                valueLow: {
                    type: 'number',
                },
                valueHigh: {
                    type: 'number',
                    maximum: 10,
                },
                unit: {
                    type: 'string',
                },
            },
            required: ['valueLow', 'valueHigh', 'unit'],
        },
    },
};
const schema_1273_simple = {
    type: 'object',
    properties: {
        quantity: {
            oneOf: [
                {
                    type: 'string',
                },
                {
                    type: 'number',
                },
            ],
        },
    },
};
const data_1273 = {
    quantity: {
        valueLow: 1,
        valueHigh: 100,
        unit: 'kg',
    },
};
registerExamples([
    {
        name: 'oneOf',
        label: 'oneOf',
        data: data$K,
        schema: schema$I,
        uischema: uischema$I,
    },
    {
        name: 'oneOf_1265_array',
        label: 'oneOf - Validation for Arrays (Issue 1265)',
        data: { coloursOrNumbers: ['Foo'] },
        schema: schema_1265_array,
        uischema: undefined,
    },
    {
        name: 'oneOf_1265_object',
        label: 'oneOf - Validation for Objects (Issue 1265)',
        data: { coloursOrNumbers: { colour: 'Foo' } },
        schema: schema_1265_object,
        uischema: undefined,
    },
    {
        name: 'oneOf_1265_simple',
        label: 'oneOf - Validation for Primitives (Issue 1265)',
        data: { coloursOrNumbers: 'Foo' },
        schema: schema_1265_simple,
        uischema: undefined,
    },
    {
        name: 'oneOf_1273',
        label: 'oneOf - Preselection for Objects (Issue 1273)',
        data: data_1273,
        schema: schema_1273,
        uischema: undefined,
    },
    {
        name: 'oneOf_1273_simple',
        label: 'oneOf - Preselection for Primitives (Issue 1273 )',
        data: { quantity: 5 },
        schema: schema_1273_simple,
        uischema: undefined,
    },
]);

var oneOf = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$I,
  uischema: uischema$I
});

const schema$H = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        address: {
            type: 'object',
            properties: {
                street_address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
            },
            required: ['street_address', 'city', 'state'],
        },
        user: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                mail: { type: 'string' },
            },
            required: ['name', 'mail'],
        },
    },
    type: 'object',
    properties: {
        name: { type: 'string' },
        addressOrUsers: {
            type: 'array',
            items: {
                oneOf: [
                    { $ref: '#/definitions/address' },
                    { $ref: '#/definitions/user' },
                ],
            },
        },
    },
};
const uischema$H = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/addressOrUsers',
        },
    ],
};
const data$J = {
    name: 'test',
    addressOrUsers: [
        {
            street_address: '1600 Pennsylvania Avenue NW',
            city: 'Washington',
            state: 'DC',
        },
        {
            name: 'User',
            mail: 'user@user.user',
        },
    ],
};
registerExamples([
    {
        name: 'oneOfArray',
        label: 'oneOf - Inside array items',
        data: data$J,
        schema: schema$H,
        uischema: uischema$H,
    },
]);

var oneOfArray = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$H,
  uischema: uischema$H
});

const schema$G = {
    $defs: {
        Base: {
            type: 'object',
            properties: {
                width: {
                    type: 'integer',
                },
            },
        },
        Child: {
            type: 'object',
            allOf: [
                { $ref: '#/$defs/Base' },
                {
                    properties: {
                        geometry: {
                            type: 'string',
                        },
                    },
                },
            ],
        },
    },
    type: 'object',
    properties: {
        element: {
            $ref: '#/$defs/Child',
        },
    },
};
const uischema$G = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Label',
            text: 'AllOfRenderer',
        },
        {
            type: 'Control',
            scope: '#/properties/element',
        },
        {
            type: 'Label',
            text: 'Manual controls',
        },
        {
            type: 'Control',
            scope: '#/properties/element/properties/width',
        },
        {
            type: 'Control',
            scope: '#/properties/element/properties/geometry',
        },
    ],
};
const data$I = {};
registerExamples([
    {
        name: 'anyOf-oneOf-allOf-resolve',
        label: 'AnyOf OneOf AllOf Resolve',
        data: data$I,
        schema: schema$G,
        uischema: uischema$G,
    },
]);

var anyOfOneOfAllOfResolve = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$G,
  uischema: uischema$G
});

const schema$F = {
    type: 'object',
    properties: {
        comments: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date',
                    },
                    message: {
                        type: 'string',
                        maxLength: 5,
                    },
                    enum: {
                        type: 'string',
                        const: 'foo',
                    },
                    oneOfEnum: {
                        type: 'string',
                        oneOf: [{ const: 'foo' }, { const: 'bar' }],
                    },
                },
            },
        },
        foo: { type: 'string' },
    },
};
const uischema$F = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/foo',
        },
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: false,
            },
        },
    ],
};
const uischemaWithSorting$1 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/foo',
        },
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: false,
            },
        },
    ],
};
const data$H = {
    comments: [
        {
            date: new Date(2001, 8, 11).toISOString().substr(0, 10),
            message: 'This is an example message',
        },
        {
            date: new Date().toISOString().substr(0, 10),
            message: 'Get ready for booohay',
            oneOfEnum: 'test',
        },
    ],
};
const actions$5 = [
    {
        label: 'Enable Sorting',
        apply: (props) => {
            return {
                ...props,
                uischema: uischemaWithSorting$1,
            };
        },
    },
    {
        label: 'Disable Sorting',
        apply: (props) => {
            return {
                ...props,
                uischema: uischema$F,
            };
        },
    },
];
registerExamples([
    {
        name: 'array',
        label: 'Array',
        data: data$H,
        schema: schema$F,
        uischema: uischema$F,
        config: {
            withSort: uischemaWithSorting$1,
        },
        actions: actions$5,
    },
]);

var arrays = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$F,
  uischema: uischema$F,
  uischemaWithSorting: uischemaWithSorting$1,
  data: data$H
});

const schema$E = {
    type: 'object',
    properties: {
        comments: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date',
                    },
                    message: {
                        type: 'string',
                        maxLength: 5,
                    },
                    enum: {
                        type: 'string',
                        const: 'foo',
                    },
                },
            },
        },
    },
};
const uischema$E = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: true,
            },
        },
    ],
};
const data$G = {
    comments: [
        {
            date: new Date(2001, 8, 11).toISOString().substr(0, 10),
            message: 'This is an example message',
        },
        {
            date: new Date().toISOString().substr(0, 10),
            message: 'Get ready for booohay',
        },
    ],
};
const translations$2 = {
    comments: {
        [ArrayTranslationEnum.noDataMessage]: 'Be the first to write a comment',
        [ArrayTranslationEnum.addTooltip]: 'Add a Comment',
        [ArrayTranslationEnum.deleteDialogAccept]: 'Delete!',
        [ArrayTranslationEnum.deleteDialogDecline]: 'Cancel!',
        [ArrayTranslationEnum.deleteDialogMessage]: 'Are you sure you want to delete this comment?',
    },
};
const translate$2 = (key, defaultMessage) => {
    return get(translations$2, key) ?? defaultMessage;
};
registerExamples([
    {
        name: 'array-i18n',
        label: 'Array (i18n)',
        data: data$G,
        schema: schema$E,
        uischema: uischema$E,
        i18n: {
            translate: translate$2,
            locale: 'en',
        },
    },
]);

var arraysI18n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$E,
  uischema: uischema$E,
  data: data$G,
  translations: translations$2,
  translate: translate$2
});

const schema$D = {
    definitions: {
        choicesContainer: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                choices: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
            },
        },
    },
    type: 'object',
    properties: {
        exampleArray: {
            type: 'array',
            items: {
                $ref: '#/definitions/choicesContainer',
            },
        },
    },
};
const uischema$D = {
    type: 'HorizontalLayout',
    elements: [
        {
            type: 'Control',
            label: {
                text: 'Example Array',
                show: true,
            },
            scope: '#/properties/exampleArray',
        },
    ],
};
const data$F = {
    exampleArray: [
        {
            choices: ['This', 'is', 'an', 'example'],
            name: 'Hi there',
        },
    ],
};
const control1 = {
    type: 'Control',
    scope: '#/properties/name',
};
const control2 = {
    type: 'Control',
    scope: '#/properties/choices',
};
const uischemas = [
    {
        tester: (_jsonSchema, schemaPath) => {
            return schemaPath === '#/properties/exampleArray' ? 2 : NOT_APPLICABLE;
        },
        uischema: {
            type: 'VerticalLayout',
            elements: [control1, control2],
        },
    },
];
const actions$4 = [
    {
        label: 'Register NestedArray UISchema',
        apply: (props) => {
            return {
                ...props,
                uischemas: uischemas,
            };
        },
    },
    {
        label: 'Unregister NestedArray UISchema',
        apply: (props) => {
            const uischemas = undefined;
            return {
                ...props,
                uischemas: uischemas,
            };
        },
    },
];
registerExamples([
    {
        name: 'nestedArray',
        label: 'Nested Array',
        data: data$F,
        schema: schema$D,
        uischema: uischema$D,
        actions: actions$4,
    },
]);

var nestedArrays = /*#__PURE__*/Object.freeze({
  __proto__: null,
  uischema: uischema$D
});

const schema$C = {
    type: 'object',
    properties: {
        cat1: {
            type: 'object',
            properties: {
                subcat11: {
                    type: 'string',
                },
            },
        },
        cat2: {
            type: 'object',
            properties: {
                subcat21: {
                    type: 'string',
                },
                subcat22: {
                    type: 'string',
                },
            },
        },
        cat3: {
            type: 'object',
            properties: {
                subcat31: {
                    type: 'string',
                },
                subcat32: {
                    type: 'string',
                },
                subcat33: {
                    type: 'string',
                },
            },
        },
    },
};
const uischema$C = {
    type: 'Categorization',
    elements: [
        {
            type: 'Category',
            label: 'Cat1',
            elements: [
                {
                    type: 'Categorization',
                    elements: [
                        {
                            type: 'Category',
                            label: 'SubCat1-1',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat1/properties/subcat11',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'Category',
            label: 'Cat2',
            elements: [
                {
                    type: 'Categorization',
                    elements: [
                        {
                            type: 'Category',
                            label: 'SubCat2-1',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat2/properties/subcat21',
                                },
                            ],
                        },
                        {
                            type: 'Category',
                            label: 'SubCat2-2',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat2/properties/subcat22',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'Category',
            label: 'Cat3',
            elements: [
                {
                    type: 'Categorization',
                    elements: [
                        {
                            type: 'Category',
                            label: 'SubCat3-1',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat3/properties/subcat31',
                                },
                            ],
                        },
                        {
                            type: 'Category',
                            label: 'SubCat3-2',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat3/properties/subcat32',
                                },
                            ],
                        },
                        {
                            type: 'Category',
                            label: 'SubCat3-3',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/cat3/properties/subcat33',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
const data$E = {};
registerExamples([
    {
        name: 'nestedCategorization',
        label: 'Nested Categorization',
        data: data$E,
        schema: schema$C,
        uischema: uischema$C,
    },
]);

var nestedCategorization = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$C,
  uischema: uischema$C,
  data: data$E
});

const personCoreSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 3,
            description: 'Please enter your name',
        },
        vegetarian: {
            type: 'boolean',
        },
        birthDate: {
            type: 'string',
            format: 'date',
            description: 'Please enter your birth date.',
        },
        nationality: {
            type: 'string',
            enum: ['DE', 'IT', 'JP', 'US', 'RU', 'Other'],
        },
    },
};
const schema$B = {
    type: 'object',
    properties: {
        ...personCoreSchema.properties,
        personalData: {
            type: 'object',
            properties: {
                age: {
                    type: 'integer',
                    description: 'Please enter your age.',
                },
                height: {
                    type: 'number',
                },
                drivingSkill: {
                    type: 'number',
                    maximum: 10,
                    minimum: 1,
                    default: 7,
                },
            },
            required: ['age', 'height'],
        },
        vegetarian: {
            type: 'boolean',
        },
        birthDate: {
            type: 'string',
            format: 'date',
        },
        occupation: {
            type: 'string',
        },
        postalCode: {
            type: 'string',
            maxLength: 5,
        },
    },
    required: ['occupation', 'nationality'],
};
const uischema$B = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/name',
                },
                {
                    type: 'Control',
                    scope: '#/properties/personalData/properties/age',
                },
                {
                    type: 'Control',
                    scope: '#/properties/birthDate',
                },
            ],
        },
        {
            type: 'Label',
            text: 'Additional Information',
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/personalData/properties/height',
                },
                {
                    type: 'Control',
                    scope: '#/properties/nationality',
                },
                {
                    type: 'Control',
                    scope: '#/properties/occupation',
                    suggestion: [
                        'Accountant',
                        'Engineer',
                        'Freelancer',
                        'Journalism',
                        'Physician',
                        'Student',
                        'Teacher',
                        'Other',
                    ],
                },
            ],
        },
    ],
};
const data$D = {
    name: 'John Doe',
    vegetarian: false,
    birthDate: '1985-06-02',
    personalData: {
        age: 34,
    },
    postalCode: '12345',
};
registerExamples([
    {
        name: 'person',
        label: 'Person',
        data: data$D,
        schema: schema$B,
        uischema: uischema$B,
    },
]);

var person = /*#__PURE__*/Object.freeze({
  __proto__: null,
  personCoreSchema: personCoreSchema,
  schema: schema$B,
  uischema: uischema$B,
  data: data$D
});

const schema$A = {
    type: 'object',
    properties: {
        ...personCoreSchema.properties,
        occupation: { type: 'string' },
        comments: {
            type: 'array',
            description: 'Description for array with details',
            minItems: 2,
            maxItems: 8,
            items: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date',
                    },
                    message: {
                        type: 'string',
                        maxLength: 5,
                    },
                },
            },
        },
    },
    required: ['occupation', 'nationality'],
};
const uischema$A = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: true,
                restrict: true,
                detail: {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/message',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/date',
                        },
                    ],
                },
            },
        },
    ],
};
const data$C = {
    comments: [
        {
            date: new Date(2001, 8, 11).toISOString().substr(0, 10),
            message: 'This is an example message',
        },
        {
            date: new Date().toISOString().substr(0, 10),
            message: 'Get ready for booohay',
        },
    ],
};
registerExamples([
    {
        name: 'array-with-detail',
        label: 'Array with detail',
        data: data$C,
        schema: schema$A,
        uischema: uischema$A,
    },
]);

var arraysWithDetail = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$A,
  uischema: uischema$A,
  data: data$C
});

const schema$z = {
    type: 'object',
    properties: {
        ...personCoreSchema.properties,
        occupation: { type: 'string' },
        enableArray: { type: 'boolean' },
        comments: {
            type: 'array',
            title: 'Messages',
            items: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date',
                    },
                    message: {
                        type: 'string',
                        maxLength: 5,
                    },
                },
            },
        },
    },
    required: ['occupation', 'nationality'],
};
const uischema$z = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/occupation',
        },
        {
            type: 'Control',
            scope: '#/properties/enableArray',
        },
        {
            type: 'Control',
            scope: '#/properties/comments',
            rule: {
                effect: 'SHOW',
                condition: {
                    type: 'OR',
                    conditions: [
                        {
                            schema: { const: 'developer' },
                            scope: '#/properties/occupation',
                        },
                        {
                            schema: { const: true },
                            scope: '/properties/enableArray',
                        },
                    ],
                },
            },
            options: {
                detail: {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/message',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/date',
                        },
                    ],
                },
            },
        },
    ],
};
const data$B = {
    occupation: 'developer',
    comments: [
        {
            date: new Date(2001, 8, 11).toISOString().substr(0, 10),
            message: 'This is an example message',
        },
        {
            date: new Date().toISOString().substr(0, 10),
            message: 'Get ready for booohay',
        },
    ],
};
registerExamples([
    {
        name: 'array-with-detail-and-rule',
        label: 'Array with detail and rule',
        data: data$B,
        schema: schema$z,
        uischema: uischema$z,
    },
]);

var arraysWithDetailAndRule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$z,
  uischema: uischema$z,
  data: data$B
});

const schema$y = {
    type: 'object',
    properties: {
        comments: {
            type: 'array',
            title: 'Messages',
            items: {
                type: 'object',
                properties: {
                    message1: {
                        type: 'string',
                    },
                    message2: {
                        type: 'string',
                    },
                },
            },
        },
    },
};
const uischema$y = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                elementLabelProp: 'message2',
                detail: {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/message1',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/message2',
                        },
                    ],
                },
            },
        },
    ],
};
const data$A = {
    comments: [
        {
            message1: 'This is an example message',
            message2: 'This is an example message 2',
        },
        {
            message1: 'Get ready for booohay 1',
            message2: 'Get ready for booohay 2',
        },
    ],
};
registerExamples([
    {
        name: 'array-with-custom-element-label',
        label: 'Array with custom element label',
        data: data$A,
        schema: schema$y,
        uischema: uischema$y,
    },
]);

var arraysWithCustomElementLabel = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$y,
  uischema: uischema$y,
  data: data$A
});

const schema$x = {
    type: 'object',
    properties: {
        comments: {
            type: 'array',
            minItems: 2,
            maxItems: 8,
            items: {
                type: 'object',
                properties: {
                    date: {
                        type: 'string',
                        format: 'date',
                    },
                    message: {
                        type: 'string',
                        maxLength: 5,
                    },
                    enum: {
                        type: 'string',
                        const: 'foo',
                    },
                },
            },
        },
        foo: { type: 'string' },
    },
};
const uischema$x = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/foo',
        },
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: true,
                restrict: true,
            },
        },
    ],
};
const uischemaWithSorting = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/foo',
        },
        {
            type: 'Control',
            scope: '#/properties/comments',
            options: {
                showSortButtons: true,
                restrict: true,
            },
        },
    ],
};
const data$z = {
    comments: [
        {
            date: new Date(2001, 8, 11).toISOString().substr(0, 10),
            message: 'This is an example message With sorting',
        },
        {
            date: new Date().toISOString().substr(0, 10),
            message: 'Get ready for booohay',
        },
    ],
};
const actions$3 = [
    {
        label: 'Enable Sorting',
        apply: (props) => {
            return {
                ...props,
                uischema: uischemaWithSorting,
            };
        },
    },
    {
        label: 'Disable Sorting',
        apply: (props) => {
            return {
                ...props,
                uischema: uischema$x,
            };
        },
    },
];
registerExamples([
    {
        name: 'array-with-sorting',
        label: 'Array with sorting',
        data: data$z,
        schema: schema$x,
        uischema: uischema$x,
        config: {
            withSort: uischemaWithSorting,
        },
        actions: actions$3,
    },
]);

var arraysWithSorting = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$x,
  uischema: uischema$x,
  uischemaWithSorting: uischemaWithSorting,
  data: data$z
});

const schema$w = {
    definitions: {
        itemsType: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    default: 'foo1',
                },
                name_noDefault: {
                    type: 'string',
                },
                description: {
                    type: 'string',
                    default: 'bar',
                },
                done: {
                    type: 'boolean',
                    default: false,
                },
                rating: {
                    type: 'integer',
                    default: 5,
                },
                cost: {
                    type: 'number',
                    default: 5.5,
                },
                date: {
                    type: 'string',
                    format: 'date',
                    default: convertDateToString(new Date(), 'date'),
                },
            },
        },
        stringDef: { type: 'string', default: 'excellent' },
        numberDef: { type: 'number', default: 10 },
        intDef: { type: 'integer', default: 11 },
        boolDef: { type: 'boolean', default: true },
        arrayDef: { type: 'array', default: ['a', 'b', 'c'] },
    },
    type: 'object',
    properties: {
        objectArray: {
            type: 'array',
            items: {
                $ref: '#/definitions/itemsType',
            },
        },
        stringArray: {
            type: 'array',
            items: {
                type: 'string',
                default: '123',
            },
        },
        objectArrayWithPropertyRefs: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    string1: { $ref: '#/definitions/stringDef' },
                    string2: { type: 'string' },
                    number: { $ref: '#/definitions/numberDef' },
                    int: { $ref: '#/definitions/intDef' },
                    bool: { $ref: '#/definitions/boolDef' },
                    array: { $ref: '#/definitions/arrayDef' },
                },
            },
        },
    },
};
const uischema$w = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/objectArray',
        },
        {
            type: 'Control',
            scope: '#/properties/stringArray',
        },
        {
            type: 'Control',
            scope: '#/properties/objectArrayWithPropertyRefs',
        },
    ],
};
const data$y = {};
registerExamples([
    {
        name: 'array-with-defaults',
        label: 'Array with defaults',
        data: data$y,
        schema: schema$w,
        uischema: uischema$w,
    },
]);

var arraysWithDefaults = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$w,
  uischema: uischema$w,
  data: data$y
});

const schema$v = {
    type: 'object',
    properties: {
        comments: {
            description: 'Description for array of String Type',
            type: 'array',
            items: {
                type: 'string',
                maxLength: 5,
            },
        },
    },
};
const uischema$v = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/comments',
        },
    ],
};
const data$x = {
    comments: ['one string', 'two strings'],
};
registerExamples([
    {
        name: 'stringArray',
        label: 'Array of Strings',
        data: data$x,
        schema: schema$v,
        uischema: uischema$v,
    },
]);

var stringArray = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$v,
  uischema: uischema$v,
  data: data$x
});

const schema$u = {
    type: 'object',
    properties: {
        firstName: {
            type: 'string',
            minLength: 3,
            description: 'Please enter your first name',
        },
        secondName: {
            type: 'string',
            minLength: 3,
            description: 'Please enter your second name',
        },
        vegetarian: {
            type: 'boolean',
        },
        birthDate: {
            type: 'string',
            format: 'date',
            description: 'Please enter your birth date.',
        },
        nationality: {
            type: 'string',
            enum: ['DE', 'IT', 'JP', 'US', 'RU', 'Other'],
        },
        provideAddress: {
            type: 'boolean',
        },
        address: {
            type: 'object',
            properties: {
                street: {
                    type: 'string',
                },
                streetNumber: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
                postalCode: {
                    type: 'string',
                    maxLength: 5,
                },
            },
        },
        vegetarianOptions: {
            type: 'object',
            properties: {
                vegan: {
                    type: 'boolean',
                },
                favoriteVegetable: {
                    type: 'string',
                    enum: ['Tomato', 'Potato', 'Salad', 'Aubergine', 'Cucumber', 'Other'],
                },
                otherFavoriteVegetable: {
                    type: 'string',
                },
            },
        },
    },
};
const uischema$u = {
    type: 'Categorization',
    elements: [
        {
            type: 'Category',
            label: 'categoryLabelKey',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/firstName',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/secondName',
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/birthDate',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/nationality',
                        },
                    ],
                },
                {
                    type: 'Control',
                    scope: '#/properties/provideAddress',
                },
                {
                    type: 'Control',
                    scope: '#/properties/vegetarian',
                },
            ],
        },
        {
            type: 'Category',
            i18n: 'address',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/street',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/streetNumber',
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/city',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/postalCode',
                        },
                    ],
                },
            ],
            rule: {
                effect: 'SHOW',
                condition: {
                    scope: '#/properties/provideAddress',
                    schema: { const: true },
                },
            },
        },
        {
            type: 'Category',
            label: 'Additional',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/vegetarianOptions/properties/vegan',
                },
                {
                    type: 'Control',
                    scope: '#/properties/vegetarianOptions/properties/favoriteVegetable',
                },
                {
                    type: 'Control',
                    scope: '#/properties/vegetarianOptions/properties/otherFavoriteVegetable',
                    rule: {
                        effect: 'SHOW',
                        condition: {
                            scope: '#/properties/vegetarianOptions/properties/favoriteVegetable',
                            schema: { const: 'Other' },
                        },
                    },
                },
            ],
            rule: {
                effect: 'SHOW',
                condition: {
                    scope: '#/properties/vegetarian',
                    schema: { const: true },
                },
            },
        },
    ],
};
const data$w = {
    provideAddress: true,
    vegetarian: false,
};
const schema_1713 = {
    type: 'object',
    properties: {
        experiments: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    ID: {
                        type: 'string',
                    },
                },
                additionalProperties: false,
                additionalItems: false,
            },
        },
    },
    required: ['experiments'],
};
const uischema_1713 = {
    type: 'Categorization',
    elements: [
        {
            type: 'Category',
            label: 'Experiments',
            elements: [
                {
                    type: 'ListWithDetail',
                    scope: '#/properties/experiments',
                    options: {
                        labelRef: '#/items/properties/ID',
                        detail: {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/ID',
                                        },
                                    ],
                                },
                                {
                                    type: 'Categorization',
                                    elements: [
                                        {
                                            type: 'Category',
                                            label: 'Sequential',
                                            elements: [
                                                {
                                                    type: 'VerticalLayout',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/ID',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
            ],
        },
    ],
};
const translations$1 = {
    categoryLabelKey: 'Basic',
    address: {
        label: 'Address',
    },
};
const translate$1 = (key, defaultMessage) => {
    return get$1(translations$1, key) ?? defaultMessage;
};
registerExamples([
    {
        name: 'categorization',
        label: 'Categorization',
        data: data$w,
        schema: schema$u,
        uischema: uischema$u,
        i18n: { locale: 'en', translate: translate$1 },
    },
    {
        name: 'categorization_1713',
        label: 'Categorization - Issue 1713',
        data: data$w,
        schema: schema_1713,
        uischema: uischema_1713,
    },
]);

var categorization = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$u,
  uischema: uischema$u,
  data: data$w,
  translations: translations$1,
  translate: translate$1
});

const schema$t = schema$u;
const uischema$t = {
    ...uischema$u,
    options: {
        variant: 'stepper',
    },
};
const data$v = data$w;
registerExamples([
    {
        name: 'categorizationstepper',
        label: 'Categorization (Stepper)',
        data: data$v,
        schema: schema$t,
        uischema: uischema$t,
    },
]);

var categorizationStepper = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$t,
  uischema: uischema$t,
  data: data$v
});

const schema$s = schema$u;
const uischema$s = {
    ...uischema$u,
    options: {
        variant: 'stepper',
        showNavButtons: true,
    },
};
const data$u = data$w;
registerExamples([
    {
        name: 'categorization-stepper-nav-buttons',
        label: 'Categorization (Stepper - Nav Buttons)',
        data: data$u,
        schema: schema$s,
        uischema: uischema$s,
    },
]);

var categorizationStepperNavButtons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$s,
  uischema: uischema$s,
  data: data$u
});

const schema$r = {
    type: 'object',
    properties: {
        string: {
            type: 'string',
        },
        boolean: {
            type: 'boolean',
            description: 'Boolean description as a tooltip',
        },
        number: {
            type: 'number',
        },
        integer: {
            type: 'integer',
        },
        date: {
            type: 'string',
            format: 'date',
        },
        time: {
            type: 'string',
            format: 'time',
        },
        dateTime: {
            type: 'string',
            format: 'date-time',
        },
        enum: {
            type: 'string',
            enum: ['One', 'Two', 'Three'],
        },
    },
};
const uischema$r = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/string',
        },
        {
            type: 'Control',
            scope: '#/properties/boolean',
        },
        {
            type: 'Control',
            scope: '#/properties/number',
        },
        {
            type: 'Control',
            scope: '#/properties/integer',
        },
        {
            type: 'Control',
            scope: '#/properties/date',
        },
        {
            type: 'Control',
            scope: '#/properties/time',
        },
        {
            type: 'Control',
            scope: '#/properties/dateTime',
        },
        {
            type: 'Control',
            scope: '#/properties/enum',
        },
    ],
};
const data$t = {
    string: 'This is a string',
    boolean: true,
    number: 50.5,
    integer: 50,
    date: '2020-06-25',
    time: '23:08:00',
    dateTime: '2020-06-25T23:08:42+02:00',
    enum: 'Two',
};
const extendedSchema = {
    type: 'object',
    properties: {
        multilineString: {
            type: 'string',
            description: 'Multiline Example',
        },
        slider: {
            type: 'number',
            minimum: 1,
            maximum: 5,
            default: 2,
            description: 'Slider Example',
        },
        trimText: {
            type: 'string',
            description: 'Trim indicates whether the control shall grab the full width available',
        },
        restrictText: {
            type: 'string',
            maxLength: 5,
            description: 'Restricts the input length to the set value (in this case: 5)',
        },
        unfocusedDescription: {
            type: 'string',
            description: 'This description is shown even when the control is not focused',
        },
        hideRequiredAsterisk: {
            type: 'string',
            description: 'Hides the "*" symbol, when the field is required',
        },
        toggle: {
            type: 'boolean',
            description: 'The "toggle" option renders boolean values as a toggle.',
        },
    },
    required: ['hideRequiredAsterisk', 'restrictText'],
};
const extendedUischema = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/multilineString',
            options: {
                multi: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/slider',
            options: {
                slider: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/trimText',
            options: {
                trim: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/restrictText',
            options: {
                restrict: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/unfocusedDescription',
            options: {
                showUnfocusedDescription: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/hideRequiredAsterisk',
            options: {
                hideRequiredAsterisk: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/toggle',
            label: 'Boolean as Toggle',
            options: {
                toggle: true,
            },
        },
    ],
};
const extendedData = {
    multilineString: 'Multi-\nline\nexample',
    slider: 4,
    trimText: 'abcdefg',
    restrictText: 'abcde',
    toggle: false,
};
const combinedSchema = {
    ...extendedSchema,
    properties: {
        ...schema$r.properties,
        ...extendedSchema.properties,
    },
};
const combinedUiSchema = {
    type: 'Categorization',
    elements: [
        {
            type: 'Category',
            label: 'Normal controls',
            elements: [uischema$r],
        },
        {
            type: 'Category',
            label: 'Configured controls',
            elements: [extendedUischema],
        },
    ],
};
const combinedData = {
    ...data$t,
    ...extendedData,
};
registerExamples([
    {
        name: 'control-options',
        label: 'Control Options',
        data: combinedData,
        schema: combinedSchema,
        uischema: combinedUiSchema,
    },
]);

var controlOptions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$r,
  uischema: uischema$r,
  data: data$t,
  extendedSchema: extendedSchema,
  extendedUischema: extendedUischema,
  extendedData: extendedData
});

const schema$q = {
    type: 'object',
    properties: {
        schemaBased: {
            type: 'object',
            properties: {
                date: {
                    type: 'string',
                    format: 'date',
                    description: 'schema-based date picker',
                },
                time: {
                    type: 'string',
                    format: 'time',
                    description: 'schema-based time picker',
                },
                datetime: {
                    type: 'string',
                    format: 'date-time',
                    description: 'schema-based datetime picker',
                },
            },
        },
        uiSchemaBased: {
            type: 'object',
            properties: {
                date: {
                    type: 'string',
                    description: 'does not allow to select days',
                },
                time: {
                    type: 'string',
                    description: '24 hour format',
                },
                datetime: {
                    type: 'string',
                    description: 'uischema-based datetime picker',
                },
            },
        },
    },
};
const uischema$q = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/schemaBased/properties/date',
                },
                {
                    type: 'Control',
                    scope: '#/properties/schemaBased/properties/time',
                },
                {
                    type: 'Control',
                    scope: '#/properties/schemaBased/properties/datetime',
                },
            ],
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/uiSchemaBased/properties/date',
                    label: 'Year Month Picker',
                    options: {
                        format: 'date',
                        clearLabel: 'Clear it!',
                        cancelLabel: 'Abort',
                        okLabel: 'Do it',
                        views: ['year', 'month'],
                        dateFormat: 'YYYY.MM',
                        dateSaveFormat: 'YYYY-MM',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/uiSchemaBased/properties/time',
                    options: {
                        format: 'time',
                        ampm: true,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/uiSchemaBased/properties/datetime',
                    options: {
                        format: 'date-time',
                        dateTimeFormat: 'DD-MM-YY hh:mm:a',
                        dateTimeSaveFormat: 'YYYY/MM/DD h:mm a',
                        ampm: true,
                    },
                },
            ],
        },
    ],
};
const data$s = {
    schemaBased: {
        date: new Date().toISOString().substr(0, 10),
        time: '13:37:00',
        datetime: new Date().toISOString(),
    },
    uiSchemaBased: {
        date: new Date().toISOString().substr(0, 10),
        time: '13:37:00',
        datetime: '1999/12/11 10:05 am',
    },
};
registerExamples([
    {
        name: 'dates',
        label: 'Dates',
        data: data$s,
        schema: schema$q,
        uischema: uischema$q,
    },
]);

var dates = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$q,
  uischema: uischema$q,
  data: data$s
});

const actions$2 = [
    {
        label: 'Change data',
        apply: (props) => {
            return {
                ...props,
                data: { id: 'aaa' },
            };
        },
    },
];
registerExamples([
    {
        name: 'dynamic',
        label: 'Generate both schemas - Dynamic data change',
        schema: undefined,
        uischema: undefined,
        data: { name: 'bla' },
        actions: actions$2,
    },
]);

var generateDynamic = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions$2
});

const schema$p = undefined;
const uischema$p = undefined;
const data$r = data$D;
registerExamples([
    {
        name: 'generate',
        label: 'Generate both Schemas',
        data: data$r,
        schema: schema$p,
        uischema: uischema$p,
    },
]);

var generate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$p,
  uischema: uischema$p,
  data: data$r
});

const schema$o = personCoreSchema;
const uischema$o = undefined;
const data$q = data$D;
registerExamples([
    {
        name: 'generate-ui',
        label: 'Generate UI Schema',
        data: data$q,
        schema: schema$o,
        uischema: uischema$o,
    },
]);

var generateUI = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$o,
  uischema: uischema$o,
  data: data$q
});

const schema$n = schema$B;
const uischemaVertical = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            label: 'Name',
            scope: '#/properties/name',
        },
        {
            type: 'Control',
            label: 'Birth Date',
            scope: '#/properties/birthDate',
        },
    ],
};
const uischemaHorizontal = {
    type: 'HorizontalLayout',
    elements: [
        {
            type: 'Control',
            label: 'Name',
            scope: '#/properties/name',
        },
        {
            type: 'Control',
            label: 'Birth Date',
            scope: '#/properties/birthDate',
        },
    ],
};
const uischemaGroup = {
    type: 'Group',
    label: 'My Group',
    elements: [
        {
            type: 'Control',
            label: 'Name',
            scope: '#/properties/name',
        },
        {
            type: 'Control',
            label: 'Birth Date',
            scope: '#/properties/birthDate',
        },
    ],
};
const uischemaComplex = {
    type: 'Group',
    label: 'My Group',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'Control',
                            label: 'Name',
                            scope: '#/properties/name',
                        },
                        {
                            type: 'Control',
                            label: 'Birth Date',
                            scope: '#/properties/birthDate',
                        },
                    ],
                },
                {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'Control',
                            label: 'Name',
                            scope: '#/properties/name',
                        },
                        {
                            type: 'Control',
                            label: 'Birth Date',
                            scope: '#/properties/birthDate',
                        },
                    ],
                },
            ],
        },
    ],
};
const data$p = data$D;
registerExamples([
    {
        name: 'layout-vertical',
        label: 'Layout Vertical',
        data: data$p,
        schema: schema$n,
        uischema: uischemaVertical,
    },
    {
        name: 'layout-horizontal',
        label: 'Layout Horizontal',
        data: data$p,
        schema: schema$n,
        uischema: uischemaHorizontal,
    },
    {
        name: 'layout-group',
        label: 'Layout Group',
        data: data$p,
        schema: schema$n,
        uischema: uischemaGroup,
    },
    {
        name: 'layout-complex',
        label: 'Layout Complex',
        data: data$p,
        schema: schema$n,
        uischema: uischemaComplex,
    },
]);

var layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$n,
  uischemaVertical: uischemaVertical,
  uischemaHorizontal: uischemaHorizontal,
  uischemaGroup: uischemaGroup,
  uischemaComplex: uischemaComplex,
  data: data$p
});

const schema$m = {
    type: 'object',
    required: ['age'],
    properties: {
        firstName: {
            type: 'string',
            minLength: 2,
            maxLength: 20,
        },
        lastName: {
            type: 'string',
            minLength: 5,
            maxLength: 15,
        },
        age: {
            type: 'integer',
            minimum: 18,
            maximum: 100,
        },
        gender: {
            type: 'string',
            enum: ['Male', 'Female', 'Undisclosed'],
        },
        height: {
            type: 'number',
        },
        dateOfBirth: {
            type: 'string',
            format: 'date',
        },
        rating: {
            type: 'integer',
        },
        committer: {
            type: 'boolean',
        },
        address: {
            type: 'object',
            properties: {
                street: {
                    type: 'string',
                },
                streetnumber: {
                    type: 'string',
                },
                postalCode: {
                    type: 'string',
                },
                city: {
                    type: 'string',
                },
            },
        },
    },
};
const uischema$n = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Label',
            text: 'Toggle the committer boolean to enable/disable the address block.',
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/firstName',
                },
                {
                    type: 'Control',
                    scope: '#/properties/lastName',
                },
            ],
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/age',
                },
                {
                    type: 'Control',
                    scope: '#/properties/dateOfBirth',
                },
            ],
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/height',
                },
                {
                    type: 'Control',
                    scope: '#/properties/gender',
                },
                {
                    type: 'Control',
                    scope: '#/properties/committer',
                },
            ],
        },
        {
            type: 'Group',
            label: 'Address for Shipping T-Shirt',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/street',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/streetnumber',
                        },
                    ],
                },
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/postalCode',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/address/properties/city',
                        },
                    ],
                },
            ],
            rule: {
                effect: 'ENABLE',
                condition: {
                    scope: '#/properties/committer',
                    schema: {
                        const: true,
                    },
                },
            },
        },
    ],
};
const data$o = {
    firstName: 'Max',
    lastName: 'Power',
    committer: false,
};
registerExamples([
    {
        name: '1884',
        label: 'Issue 1884 - Nested enable/disable',
        data: data$o,
        schema: schema$m,
        uischema: uischema$n,
    },
]);

var _1884 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$m,
  uischema: uischema$n,
  data: data$o
});

const schema$l = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        dead: {
            type: 'boolean',
        },
        kindOfDead: {
            type: 'string',
            enum: ['Zombie', 'Vampire', 'Ghoul'],
        },
        vegetables: {
            type: 'boolean',
        },
        kindOfVegetables: {
            type: 'string',
            enum: ['All', 'Some', 'Only potatoes'],
        },
    },
};
const uischema$m = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            label: 'Name',
            scope: '#/properties/name',
        },
        {
            type: 'Group',
            elements: [
                {
                    type: 'Control',
                    label: 'Is Dead?',
                    scope: '#/properties/dead',
                },
                {
                    type: 'Control',
                    label: 'Kind of dead',
                    scope: '#/properties/kindOfDead',
                    rule: {
                        effect: 'ENABLE',
                        condition: {
                            scope: '#/properties/dead',
                            schema: {
                                const: true,
                            },
                        },
                    },
                },
            ],
        },
        {
            type: 'Group',
            elements: [
                {
                    type: 'Control',
                    label: 'Eats vegetables?',
                    scope: '#/properties/vegetables',
                },
                {
                    type: 'Control',
                    label: 'Kind of vegetables',
                    scope: '#/properties/kindOfVegetables',
                    rule: {
                        effect: 'HIDE',
                        condition: {
                            scope: '#/properties/vegetables',
                            schema: {
                                const: false,
                            },
                        },
                    },
                },
            ],
        },
    ],
};
const data$n = {
    name: 'John Doe',
    dead: false,
    vegetables: false,
};
registerExamples([
    {
        name: 'rule',
        label: 'Rule',
        data: data$n,
        schema: schema$l,
        uischema: uischema$m,
    },
]);

var rule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$l,
  uischema: uischema$m,
  data: data$n
});

const schema$k = {
    type: 'object',
    properties: {
        toggleTopLayout: {
            type: 'boolean',
        },
        topString: {
            type: 'string',
        },
        middleNumber: {
            type: 'number',
        },
        toggleBottomLayout: {
            type: 'boolean',
        },
        bottomBoolean: {
            type: 'boolean',
        },
    },
};
const uischema$l = {
    type: 'VerticalLayout',
    rule: {
        effect: 'ENABLE',
        condition: {
            scope: '#/properties/toggleTopLayout',
            schema: { const: true },
        },
    },
    elements: [
        {
            type: 'Control',
            scope: '#/properties/topString',
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/middleNumber',
                },
                {
                    type: 'Group',
                    label: 'group',
                    rule: {
                        effect: 'SHOW',
                        condition: {
                            scope: '#/properties/toggleBottomLayout',
                            schema: { const: true },
                        },
                    },
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/bottomBoolean',
                        },
                    ],
                },
            ],
        },
    ],
};
const data$m = {
    toggleTopLayout: true,
    toggleBottomLayout: true,
    toggleControl: true,
};
const actions$1 = [
    {
        label: 'Enable/Disable top layout',
        apply: (props) => {
            return {
                ...props,
                data: { ...props.data, toggleTopLayout: !props.data.toggleTopLayout },
            };
        },
    },
    {
        label: 'Show/Hide bottom layout',
        apply: (props) => {
            return {
                ...props,
                data: {
                    ...props.data,
                    toggleBottomLayout: !props.data.toggleBottomLayout,
                },
            };
        },
    },
];
registerExamples([
    {
        name: 'rule-enable',
        label: 'Rule Inheritance',
        data: data$m,
        schema: schema$k,
        uischema: uischema$l,
        actions: actions$1,
    },
]);

var ruleInheritance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$k,
  uischema: uischema$l,
  data: data$m
});

const schema$j = {
    type: 'object',
    properties: {
        postalCode: {
            type: 'string',
            description: 'A Postal Code',
            maxLength: 5,
        },
        recurrenceInterval: {
            type: 'integer',
            description: 'A recurrence interval',
        },
    },
    required: ['postalCode'],
};
const uischema$k = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/postalCode',
                    label: 'Postal Code',
                },
                {
                    type: 'Control',
                    scope: '#/properties/recurrenceInterval',
                    label: 'Recurrence Interval',
                },
            ],
        },
    ],
};
const data$l = {
    postalCode: '12345',
};
const config = {
    restrict: true,
    trim: true,
    showUnfocusedDescription: true,
    hideRequiredAsterisk: true,
};
registerExamples([
    {
        name: 'configDefault',
        label: 'Configuration (Default)',
        data: data$l,
        schema: schema$j,
        uischema: uischema$k,
    },
    {
        name: 'configCustom',
        label: 'Configuration (Custom)',
        data: data$l,
        schema: schema$j,
        uischema: uischema$k,
        config,
    },
]);

var config$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$j,
  uischema: uischema$k,
  data: data$l
});

const schema$i = {
    type: 'object',
    properties: {
        zipCode: {
            type: 'string',
            maxLength: 5,
        },
        zipCodeWithoutTrim: {
            type: 'string',
            maxLength: 5,
        },
        zipCodeWithoutRestrict: {
            type: 'string',
            maxLength: 5,
        },
    },
};
const uischema$j = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/zipCode',
                    label: 'ZIP Code (with trim and restrict options)',
                    options: {
                        trim: true,
                        restrict: true,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/zipCodeWithoutTrim',
                    label: 'ZIP Code (without trimming)',
                    options: {
                        trim: false,
                        restrict: true,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/zipCodeWithoutRestrict',
                    label: 'ZIP Code (without restricting)',
                    options: {
                        trim: true,
                        restrict: false,
                    },
                },
            ],
        },
    ],
};
const data$k = {
    zipCode: '12345',
    zipCodeWithoutTrim: '12345678',
    zipCodeWithoutRestrict: '12345678',
};
registerExamples([
    {
        name: 'text',
        label: 'Text Control Options',
        data: data$k,
        schema: schema$i,
        uischema: uischema$j,
    },
]);

var text = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$i,
  uischema: uischema$j,
  data: data$k
});

const schema$h = {
    type: 'object',
    properties: {
        price: {
            type: 'number',
            maximum: 100,
            minimum: 1,
            default: 50,
        },
        age: {
            type: 'integer',
        },
        height: {
            type: 'number',
        },
    },
};
const uischema$i = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/price',
                    label: {
                        text: 'Price',
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/age',
                },
                {
                    type: 'Control',
                    scope: '#/properties/height',
                },
                {
                    type: 'Control',
                    scope: '#/properties/price',
                    label: {
                        text: 'Price with Slider',
                    },
                    options: { slider: true },
                },
            ],
        },
    ],
};
const data$j = {};
registerExamples([
    {
        name: 'numbers',
        label: 'Numbers',
        data: data$j,
        schema: schema$h,
        uischema: uischema$i,
    },
]);

var numbers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$h,
  uischema: uischema$i,
  data: data$j
});

const orderSchema = {
    type: 'object',
    properties: {
        orderId: {
            type: 'string',
        },
        purchaseDate: {
            type: 'string',
            format: 'date',
        },
        price: {
            type: 'number',
        },
        shippingAddress: {
            $ref: '#/definitions/shippingAddress',
        },
    },
    definitions: {
        shippingAddress: {
            type: 'object',
            properties: {
                aptNo: {
                    type: 'integer',
                },
                streetNumber: {
                    type: 'integer',
                },
            },
        },
    },
};
const uischema$h = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/orderId',
                },
                {
                    type: 'Control',
                    scope: '#/properties/purchaseDate',
                },
                {
                    type: 'Control',
                    scope: '#/properties/price',
                },
            ],
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/shippingAddress/properties/aptNo',
                },
                {
                    type: 'Control',
                    scope: '#/properties/shippingAddress/properties/streetNumber',
                },
            ],
        },
    ],
};
const data$i = {
    orderId: '123456',
    purchaseDate: '1985-06-02',
    price: 16,
    shippingAddress: {
        aptNo: 3,
        streetNumber: 12,
    },
};
registerExamples([
    {
        name: 'scope',
        label: 'Scope',
        data: data$i,
        schema: orderSchema,
        uischema: uischema$h,
    },
]);

var scope = /*#__PURE__*/Object.freeze({
  __proto__: null,
  orderSchema: orderSchema,
  uischema: uischema$h,
  data: data$i
});

const data$h = {
    orders: [
        {
            customer: {
                id: '471201',
                name: 'Sirius Cybernetics Corporation',
                department: 'Complaints Division',
            },
            title: '42 killer robots',
            ordered: true,
            processId: '1890004498',
            assignee: 'Philip J. Fry',
            status: 'ordered',
            startDate: '2018-06-01',
            endDate: '2018-08-01',
        },
        {
            customer: {
                id: '471202',
                name: 'Very Big Corporation of America',
            },
            title: '1000 gallons of MomCorp Oil',
            processId: '1890004499',
            assignee: 'Jen Barber',
            startDate: '2018-07-01',
            status: 'planned',
        },
    ],
};
const schema$g = {
    definitions: {
        order: {
            type: 'object',
            properties: {
                customer: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string', format: 'email' },
                        department: { type: 'string' },
                    },
                },
                title: {
                    type: 'string',
                    minLength: 5,
                    title: 'Official Title',
                },
                ordered: { type: 'boolean' },
                processId: {
                    type: 'number',
                    minimum: 0,
                },
                assignee: { type: 'string' },
                startDate: {
                    type: 'string',
                    format: 'date',
                },
                endDate: {
                    type: 'string',
                    format: 'date',
                },
                status: {
                    type: 'string',
                    enum: ['unordered', 'planned', 'ordered'],
                },
            },
            required: ['title'],
        },
    },
    type: 'object',
    properties: {
        orders: {
            type: 'array',
            items: {
                $ref: '#/definitions/order',
            },
        },
    },
};
const uischema$g = {
    type: 'ListWithDetail',
    scope: '#/properties/orders',
    options: {
        labelRef: '#/items/properties/customer/properties/name',
        detail: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/title',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/processId',
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Customer',
                    elements: [
                        {
                            type: 'Control',
                            label: 'ID',
                            scope: '#/properties/customer/properties/id',
                        },
                        {
                            type: 'Control',
                            label: 'Name',
                            scope: '#/properties/customer/properties/name',
                        },
                        {
                            type: 'Control',
                            label: 'Department',
                            scope: '#/properties/customer/properties/department',
                        },
                    ],
                },
                {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/ordered',
                                            options: {
                                                toggle: true,
                                            },
                                        },
                                        {
                                            type: 'Control',
                                            scope: '#/properties/assignee',
                                        },
                                    ],
                                },
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/startDate',
                                        },
                                        {
                                            type: 'Control',
                                            scope: '#/properties/endDate',
                                        },
                                    ],
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/status',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
};
const uischemaNoLabelRef = {
    type: 'ListWithDetail',
    scope: '#/properties/orders',
    options: {
        detail: {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'HorizontalLayout',
                    elements: [
                        {
                            type: 'Control',
                            scope: '#/properties/title',
                        },
                        {
                            type: 'Control',
                            scope: '#/properties/processId',
                        },
                    ],
                },
                {
                    type: 'Group',
                    label: 'Customer',
                    elements: [
                        {
                            type: 'Control',
                            label: 'ID',
                            scope: '#/properties/customer/properties/id',
                        },
                        {
                            type: 'Control',
                            label: 'Name',
                            scope: '#/properties/customer/properties/name',
                        },
                        {
                            type: 'Control',
                            label: 'Department',
                            scope: '#/properties/customer/properties/department',
                        },
                    ],
                },
                {
                    type: 'VerticalLayout',
                    elements: [
                        {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/ordered',
                                            options: {
                                                toggle: true,
                                            },
                                        },
                                        {
                                            type: 'Control',
                                            scope: '#/properties/assignee',
                                        },
                                    ],
                                },
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/startDate',
                                        },
                                        {
                                            type: 'Control',
                                            scope: '#/properties/endDate',
                                        },
                                    ],
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/status',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
};
registerExamples([
    {
        name: 'list-with-detail',
        label: 'List With Detail',
        data: data$h,
        schema: schema$g,
        uischema: uischema$g,
    },
]);
registerExamples([
    {
        name: 'list-with-detail-no-labelref',
        label: 'List With Detail (No Label Ref)',
        data: data$h,
        schema: schema$g,
        uischema: uischemaNoLabelRef,
    },
]);

var listWithDetail = /*#__PURE__*/Object.freeze({
  __proto__: null,
  data: data$h,
  schema: schema$g,
  uischema: uischema$g,
  uischemaNoLabelRef: uischemaNoLabelRef
});

const data$g = {
    warehouseitems: [
        {
            name: 'Fantasy Book',
            buyer: {
                email: 'buyerA@info.org',
                age: 18,
            },
            status: 'warehouse',
        },
        {
            name: 'Boardgame',
            buyer: {
                email: 'buyerB@info.org',
                age: 45,
            },
            status: 'shipping',
        },
        {
            name: 'Energy Drink',
            buyer: {
                email: 'buyerC@info.org',
                age: 90,
            },
            status: 'delivered',
        },
    ],
};
const schema$f = {
    definitions: {
        warehouseitem: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                buyer: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', format: 'email' },
                        age: { type: 'number' },
                    },
                },
                status: {
                    type: 'string',
                    enum: ['warehouse', 'shipping', 'delivered'],
                },
            },
            required: ['name'],
        },
    },
    type: 'object',
    properties: {
        warehouseitems: {
            type: 'array',
            items: {
                $ref: '#/definitions/warehouseitem',
            },
        },
    },
};
const uischema$f = {
    type: 'ListWithDetail',
    scope: '#/properties/warehouseitems',
    options: {
        labelRef: '#/items/properties/name',
    },
};
registerExamples([
    {
        name: 'list-with-detail-registered',
        label: 'List With Detail (Registered Detail UISchema)',
        data: data$g,
        schema: schema$f,
        uischema: uischema$f,
    },
]);

var listWithDetailRegistered = /*#__PURE__*/Object.freeze({
  __proto__: null,
  data: data$g,
  schema: schema$f,
  uischema: uischema$f
});

const schema$e = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    properties: {
        address: {
            type: 'object',
            properties: {
                street_address: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
            },
            required: ['street_address', 'city', 'state'],
        },
        user: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                mail: { type: 'string' },
            },
            required: ['name', 'mail'],
        },
    },
};
const uischemaRoot = {
    type: 'Control',
    scope: '#',
};
const uischemaNonRoot = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/address',
        },
        {
            type: 'Control',
            scope: '#/properties/user',
            rule: {
                effect: 'SHOW',
                condition: {
                    type: 'LEAF',
                    scope: '#/properties/address/properties/state',
                    expectedValue: 'DC',
                },
            },
            options: {
                detail: {
                    type: 'Group',
                    label: 'User Data',
                    elements: [
                        { type: 'Control', scope: '#/properties/name' },
                        {
                            type: 'Control',
                            scope: '#/properties/mail',
                        },
                    ],
                },
            },
        },
    ],
};
const data$f = {
    address: {
        street_address: '1600 Pennsylvania Avenue NW',
        city: 'Washington',
        state: 'DC',
    },
};
registerExamples([
    {
        name: 'rootObject',
        label: 'Object - Root Scope',
        data: data$f,
        schema: schema$e,
        uischema: uischemaRoot,
    },
    {
        name: 'object',
        label: 'Object',
        data: data$f,
        schema: schema$e,
        uischema: uischemaNonRoot,
    },
]);

var object = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$e,
  uischemaRoot: uischemaRoot,
  uischemaNonRoot: uischemaNonRoot
});

const localize = require('ajv-i18n');
const onChange$2 = (dispatch) => (extensionState) => ({ errors }) => {
    if (!extensionState) {
        return;
    }
    const localiseFunc = localize[extensionState.locale.split('-')[0]];
    localiseFunc(errors);
    dispatch(updateErrors(errors));
};
const uischema$e = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Group',
            i18n: 'basicInfoGroup',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/name',
                },
                {
                    type: 'Control',
                    scope: '#/properties/birthDate',
                },
            ],
        },
        {
            type: 'Label',
            text: 'additionalInformationLabel',
        },
        {
            type: 'HorizontalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/nationality',
                },
                {
                    type: 'Control',
                    scope: '#/properties/vegetarian',
                },
            ],
        },
    ],
};
const data$e = {
    vegetarian: false,
    birthDate: '1985-06-02',
    personalData: {
        age: 34,
    },
    postalCode: '12345',
};
const translations = {
    basicInfoGroup: {
        label: 'Basic Information',
    },
    additionalInformationLabel: 'Additional Information',
};
const translate = (key, defaultMessage) => {
    return get$1(translations, key) ?? defaultMessage;
};
registerExamples([
    {
        name: 'i18n',
        label: 'Person (i18n)',
        data: data$e,
        schema: personCoreSchema,
        uischema: uischema$e,
        i18n: {
            translate: translate,
            locale: 'en',
        },
    },
]);

var i18n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  onChange: onChange$2,
  uischema: uischema$e,
  data: data$e,
  translations: translations,
  translate: translate
});

const schema$d = {
    type: 'object',
    definitions: {
        import: {
            title: 'Import',
            type: 'object',
            properties: {
                eClass: {
                    const: 'http://my_schema/1.0.0#//Import',
                },
                document: {
                    type: 'string',
                },
                package: {
                    type: 'string',
                },
                prefix: {
                    type: 'string',
                },
            },
        },
    },
    properties: {
        import: {
            type: 'array',
            items: {
                $ref: '#/definitions/import',
            },
        },
    },
};
const uischema$d = undefined;
const data$d = {
    import: [
        {
            document: 'Document1',
            package: 'Package1',
            prefix: 'Prefix',
        },
    ],
};
registerExamples([
    {
        name: '1948_with',
        label: 'Issue 1948 - Array renderer selection (with schema)',
        data: data$d,
        schema: schema$d,
        uischema: uischema$d,
    },
    {
        name: '1948_without',
        label: 'Issue 1948 - Array renderer selection (w/o schema)',
        data: data$d,
        schema: undefined,
        uischema: uischema$d,
    },
]);

var _1948 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$d,
  uischema: uischema$d,
  data: data$d
});

const schema$c = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    definitions: {
        fileOrFolder: {
            title: 'fileOrFolder',
            oneOf: [{ $ref: '#/definitions/file' }, { $ref: '#/definitions/folder' }],
        },
        file: {
            title: 'File',
            type: 'object',
            properties: {
                name: { type: 'string' },
            },
        },
        folder: {
            type: 'object',
            title: 'Folder',
            properties: {
                name: { type: 'string' },
                children: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/fileOrFolder',
                    },
                },
            },
        },
    },
    type: 'object',
    properties: {
        root: {
            type: 'array',
            items: {
                $ref: '#/definitions/folder',
            },
        },
    },
};
const uischema$c = {
    type: 'Control',
    scope: '#',
};
const data$c = {};
registerExamples([
    {
        name: 'oneOf-recursive',
        label: 'oneOf recursive',
        data: data$c,
        schema: schema$c,
        uischema: uischema$c,
    },
]);

var oneOfRecursive = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$c,
  uischema: uischema$c
});

const schema$b = {
    $schema: 'http://json-schema.org/schema#',
    definitions: {
        confidenceTypes: {
            type: 'string',
            enum: [
                'http://gedcomx.org/High',
                'http://gedcomx.org/Medium',
                'http://gedcomx.org/Low',
            ],
        },
        genderTypes: {
            type: 'string',
            enum: [
                'http://gedcomx.org/Male',
                'http://gedcomx.org/Female',
                'http://gedcomx.org/Unknown',
                'http://gedcomx.org/Intersex',
            ],
        },
        nameTypes: {
            type: 'string',
            enum: [
                'http://gedcomx.org/BirthName',
                'http://gedcomx.org/MarriedName',
                'http://gedcomx.org/AlsoKnownAs',
                'http://gedcomx.org/Nickname',
                'http://gedcomx.org/AdoptiveName',
                'http://gedcomx.org/FormalName',
                'http://gedcomx.org/ReligiousName',
            ],
        },
        namePartTypes: {
            enum: [
                'http://gedcomx.org/Prefix',
                'http://gedcomx.org/Suffix',
                'http://gedcomx.org/Given',
                'http://gedcomx.org/Surname',
            ],
        },
        personFactTypes: {
            type: 'string',
            enum: [
                'http://gedcomx.org/Adoption',
                'http://gedcomx.org/AdultChristening',
                'http://gedcomx.org/Amnesty',
                'http://gedcomx.org/Apprenticeship',
                'http://gedcomx.org/Arrest',
                'http://gedcomx.org/Baptism',
                'http://gedcomx.org/BarMitzvah',
                'http://gedcomx.org/BatMitzvah',
                'http://gedcomx.org/Birth',
                'http://gedcomx.org/Blessing',
                'http://gedcomx.org/Burial',
                'http://gedcomx.org/Caste',
                'http://gedcomx.org/Census',
                'http://gedcomx.org/Christening',
                'http://gedcomx.org/Circumcision',
                'http://gedcomx.org/Clan',
                'http://gedcomx.org/Confirmation',
                'http://gedcomx.org/Cremation',
                'http://gedcomx.org/Death',
                'http://gedcomx.org/Education',
                'http://gedcomx.org/Emigration',
                'http://gedcomx.org/Ethnicity',
                'http://gedcomx.org/Excommunication',
                'http://gedcomx.org/FirstCommunion',
                'http://gedcomx.org/Funeral',
                'http://gedcomx.org/GenderChange',
                'http://gedcomx.org/Heimat',
                'http://gedcomx.org/Immigration',
                'http://gedcomx.org/Imprisonment',
                'http://gedcomx.org/LandTransaction',
                'http://gedcomx.org/Language',
                'http://gedcomx.org/Living',
                'http://gedcomx.org/MaritalStatus',
                'http://gedcomx.org/Medical',
                'http://gedcomx.org/MilitaryAward',
                'http://gedcomx.org/MilitaryDischarge',
                'http://gedcomx.org/MilitaryDraftRegistration',
                'http://gedcomx.org/MilitaryInduction',
                'http://gedcomx.org/MilitaryService',
                'http://gedcomx.org/Mission',
                'http://gedcomx.org/MoveTo',
                'http://gedcomx.org/MoveFrom',
                'http://gedcomx.org/MultipleBirth',
                'http://gedcomx.org/NationalId',
                'http://gedcomx.org/Nationality',
                'http://gedcomx.org/Naturalization',
                'http://gedcomx.org/NumberOfChildren',
                'http://gedcomx.org/NumberOfMarriages',
                'http://gedcomx.org/Occupation',
                'http://gedcomx.org/Ordination',
                'http://gedcomx.org/Pardon',
                'http://gedcomx.org/PhysicalDescription',
                'http://gedcomx.org/Probate',
                'http://gedcomx.org/Property',
                'http://gedcomx.org/Religion',
                'http://gedcomx.org/Residence',
                'http://gedcomx.org/Retirement',
                'http://gedcomx.org/Stillbirth',
                'http://gedcomx.org/Will',
                'http://gedcomx.org/Visit',
                'http://gedcomx.org/Yahrzeit',
            ],
        },
        uri: {
            type: 'string',
        },
        localeTag: {
            type: 'string',
        },
        resourceReference: {
            type: 'object',
            properties: {
                resource: { $ref: '#/definitions/uri' },
            },
        },
        identifier: {
            type: 'object',
        },
        attribution: {
            title: 'Attribution',
            properties: {
                contributor: {
                    $ref: '#/definitions/resourceReference',
                    description: 'Reference to the agent to whom the attributed data is attributed.',
                },
                modified: {
                    type: 'number',
                    description: 'Timestamp of when the attributed data was contributed.',
                },
                changeMessage: {
                    type: 'string',
                    description: 'A statement of why the attributed data is being provided by the contributor.',
                },
                creator: {
                    $ref: '#/definitions/resourceReference',
                    description: 'Reference to the agent that created the attributed data. The creator MAY be different from the contributor if changes were made to the attributed data.',
                },
                created: {
                    type: 'number',
                    description: 'Timestamp of when the attributed data was contributed.',
                },
            },
        },
        note: {
            title: 'Note',
            properties: {
                lang: {
                    $ref: '#/definitions/localeTag',
                    description: 'The locale identifier for the note.',
                },
                subject: {
                    type: 'string',
                    description: 'A subject or title for the note.',
                },
                text: { type: 'string', description: 'The text of the note.' },
                attribution: {
                    $ref: '#/definitions/attribution',
                    description: 'The attribution of this note.',
                },
            },
            required: ['text'],
        },
        textValue: {
            type: 'object',
            properties: {
                lang: {
                    $ref: '#/definitions/localeTag',
                    description: 'The locale identifier for the value of the text.',
                },
                value: { type: 'string', description: 'The text value.' },
            },
            required: ['value'],
        },
        sourceCitation: {
            type: 'object',
            properties: {
                lang: {
                    $ref: '#/definitions/localeTag',
                    description: 'The locale identifier for the bibliographic metadata.',
                },
                value: {
                    type: 'string',
                    description: 'The bibliographic metadata rendered as a full citation.',
                },
            },
            required: ['value'],
        },
        sourceReference: {
            title: 'SourceReference',
            properties: {
                description: {
                    $ref: '#/definitions/uri',
                    description: 'Reference to a description of the target source.',
                },
                descriptionId: {
                    type: 'string',
                    description: 'The id of the target source.',
                },
                attribution: {
                    $ref: '#/definitions/attribution',
                    description: 'The attribution of this source reference.',
                },
                qualifiers: {
                    items: { $ref: '#/definitions/sourceReferenceQualifier' },
                    description: 'Qualifiers for the reference, used to identify specific fragments of the source that are being referenced.',
                },
            },
            required: ['description'],
        },
        sourceReferenceQualifier: {
            properties: {
                name: {
                    anyOf: [
                        { $ref: '#/definitions/sourceReferenceQualifierNames' },
                        { $ref: '#/definitions/uri' },
                    ],
                },
                value: { type: 'string' },
            },
            required: ['name'],
        },
        sourceReferenceQualifierNames: {
            enum: [
                'http://gedcomx.org/CharacterRegion',
                'http://gedcomx.org/RectangleRegion',
                'http://gedcomx.org/TimeRegion',
            ],
        },
        evidenceReference: {
            title: 'EvidenceReference',
            properties: {
                resource: { $ref: '#/definitions/uri' },
                attribution: { $ref: '#/definitions/attribution' },
            },
            required: ['resource'],
        },
        onlineAccount: {
            type: 'object',
            properties: {
                serviceHomepage: { $ref: '#/definitions/resourceReference' },
                accountName: { type: 'string' },
            },
            required: ['serviceHomepage', 'accountName'],
        },
        address: {
            type: 'object',
            properties: {
                value: { type: 'string' },
                city: { type: 'string' },
                country: { type: 'string' },
                postalCode: { type: 'string' },
                stateOrProvince: { type: 'string' },
                street: { type: 'string' },
                street2: { type: 'string' },
                street3: { type: 'string' },
                street4: { type: 'string' },
                street5: { type: 'string' },
                street6: { type: 'string' },
            },
        },
        conclusion: {
            type: 'object',
            title: 'Conclusion',
            properties: {
                id: {
                    type: 'string',
                    description: 'An identifier for the conclusion data.',
                },
                lang: {
                    $ref: '#/definitions/localeTag',
                    description: 'The locale identifier for the conclusion.',
                },
                sources: {
                    items: { $ref: '#/definitions/sourceReference' },
                    description: 'The list of references to the sources of related to this conclusion.',
                },
                analysis: {
                    $ref: '#/definitions/resourceReference',
                    description: 'Reference to a document containing analysis supporting this conclusion.',
                },
                notes: {
                    items: { $ref: '#/definitions/note' },
                    description: 'A list of notes about this conclusion.',
                },
                confidence: {
                    anyOf: [
                        { $ref: '#/definitions/uri' },
                        { $ref: '#/definitions/confidenceTypes' },
                    ],
                    description: 'Reference to a confidence level for this conclusion.',
                },
                attribution: {
                    $ref: '#/definitions/attribution',
                    description: 'The attribution of this conclusion.',
                },
            },
        },
        subject: {
            title: 'Subject',
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        extracted: {
                            type: 'boolean',
                            description: 'Whether this subject is to be constrained as an extracted conclusion.',
                        },
                        evidence: {
                            items: { $ref: '#/definitions/evidenceReference' },
                            description: 'References to other subjects that support this subject.',
                        },
                        media: {
                            items: { $ref: '#/definitions/sourceReference' },
                            description: 'References to multimedia resources for this subject, such as photos or videos, intended to provide additional context or illustration for the subject and not considered evidence supporting the identity of the subject or its supporting conclusions.',
                        },
                        identifiers: {
                            $ref: '#/definitions/identifier',
                            description: 'A list of identifiers for the subject.',
                        },
                    },
                },
            ],
        },
        gender: {
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/uri' },
                                { $ref: '#/definitions/genderTypes' },
                            ],
                            description: 'Enumerated value identifying the gender.',
                        },
                    },
                    required: ['type'],
                },
            ],
        },
        date: {
            type: 'object',
            properties: {
                original: {
                    type: 'string',
                    description: 'The original value of the date as supplied by the contributor.',
                },
                formal: {
                    type: 'string',
                    pattern: '^(A?[\\+-]\\d{4}(-\\d{2})?(-\\d{2})?T?(\\d{2})?(:\\d{2})?(:\\d{2})?([\\+-]\\d{2}(:\\d{2})?|Z)?)|(P(\\d{0,4}Y)?(\\d{0,4}M)?(\\d{0,4}D)?(T(\\d{0,4}H)?(\\d{0,4}M)?(\\d{0,4}S)?)?)$',
                    description: 'The standardized formal value of the date, formatted according to the GEDCOM X Date Format specification.',
                },
            },
        },
        name: {
            title: 'Name',
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/uri' },
                                { $ref: '#/definitions/nameTypes' },
                            ],
                            description: 'Enumerated value identifying the name type.',
                        },
                        date: {
                            $ref: '#/definitions/date',
                            description: 'The date of applicability of the name.',
                        },
                        nameForms: {
                            items: {
                                $ref: '#/definitions/nameForm',
                            },
                            description: "The name form(s) that best express this name, usually representations considered proper and well formed in the person's native, historical cultural context.",
                        },
                    },
                    required: ['nameForms'],
                },
            ],
        },
        namePart: {
            title: 'NamePart',
            description: 'The NamePart data type is used to model a portion of a full name, including the terms that make up that portion. Some name parts may have qualifiers to provide additional semantic meaning to the name part (e.g., "given name" or "surname").',
            properties: {
                type: {
                    anyOf: [
                        { $ref: '#/definitions/uri' },
                        { $ref: '#/definitions/namePartTypes' },
                    ],
                    description: 'Enumerated value identifying the type of the name part.',
                },
                value: {
                    type: 'string',
                    description: 'The term(s) from the name that make up this name part.',
                },
                qualifiers: {
                    items: { $ref: '#/definitions/namePartQualifier' },
                    description: 'Qualifiers to add additional semantic meaning to the name part.',
                },
            },
            required: ['value'],
        },
        namePartQualifier: {
            properties: {
                name: {
                    anyOf: [
                        { $ref: '#/definitions/namePartQualifierNames' },
                        { $ref: '#/definitions/uri' },
                    ],
                },
                value: { type: 'string' },
            },
            required: ['name'],
        },
        namePartQualifierNames: {
            enum: [
                'http://gedcomx.org/Title',
                'http://gedcomx.org/Primary',
                'http://gedcomx.org/Secondary',
                'http://gedcomx.org/Middle',
                'http://gedcomx.org/Familiar',
                'http://gedcomx.org/Religious',
                'http://gedcomx.org/Family',
                'http://gedcomx.org/Maiden',
                'http://gedcomx.org/Patronymic',
                'http://gedcomx.org/Matronymic',
                'http://gedcomx.org/Geographic',
                'http://gedcomx.org/Occupational',
                'http://gedcomx.org/Characteristic',
                'http://gedcomx.org/Postnom',
                'http://gedcomx.org/Particle',
                'http://gedcomx.org/RootName',
            ],
        },
        nameForm: {
            title: 'NameForm',
            description: `The NameForm data type defines a representation of a name (a "name form") within a given cultural context, such as a given language and script.
      As names are captured (both in records or in applications), the terms in the name are sometimes classified by type. For example, a certificate of death might prompt for "given name(s)" and "surname". The parts list can be used to represent the terms in the name that have been classified.
      If both a full rendering of the name and a list of parts are provided, it NOT REQUIRED that every term in the fully rendered name appear in the list of parts.
      Name parts in the parts list SHOULD be ordered in the natural order they would be used in the applicable cultural context.
      If a full rendering of the name is not provided (i.e., the name has only been expressed in parts), a full rendering of the name MAY be derived (sans punctuation) by concatenating, in order, each name part value in the list of parts, separating each part with the name part separator appropriate for the applicable cultural context.`,
            properties: {
                lang: {
                    $ref: '#/definitions/localeTag',
                    description: 'The locale identifier for the name form.',
                },
                fullText: {
                    type: 'string',
                    description: 'A full rendering of the name (or as much of the name as is known).',
                },
                parts: {
                    items: {
                        $ref: '#/definitions/namePart',
                    },
                    description: 'Any identified name parts from the name.',
                },
            },
        },
        fact: {
            title: 'PersonFact',
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/uri' },
                                { $ref: '#/definitions/personFactTypes' },
                            ],
                            description: 'Enumerated value identifying the type of the fact.',
                        },
                        date: {
                            $ref: '#/definitions/date',
                            description: 'The date of applicability of the fact.',
                        },
                        place: {
                            $ref: '#/definitions/placeReference',
                            description: 'A reference to the place applicable to this fact.',
                        },
                        value: { type: 'string', description: 'The value of the fact.' },
                        qualifiers: {
                            items: { $ref: '#/definitions/factQualifier' },
                            description: 'Qualifiers to add additional details about the fact.',
                        },
                    },
                    required: ['type'],
                },
            ],
        },
        factQualifier: {
            properties: {
                name: {
                    anyOf: [
                        { $ref: '#/definitions/factQualifierNames' },
                        { $ref: '#/definitions/uri' },
                    ],
                },
                value: { type: 'string' },
            },
            required: ['name'],
        },
        factQualifierNames: {
            enum: [
                'http://gedcomx.org/Age',
                'http://gedcomx.org/Cause',
                'http://gedcomx.org/Religion',
                'http://gedcomx.org/Transport',
                'http://gedcomx.org/NonConsensual',
            ],
        },
        eventRole: {
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        person: {
                            $ref: '#/definitions/resourceReference',
                            description: 'Reference to the event participant.',
                        },
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/uri' },
                                { $ref: '#/definitions/eventRoleTypes' },
                            ],
                            description: "Enumerated value identifying the participant's role.",
                        },
                        details: {
                            type: 'string',
                            description: 'Details about the role of participant in the event.',
                        },
                    },
                    required: ['person'],
                },
            ],
        },
        eventRoleTypes: {
            enum: [
                'http://gedcomx.org/Principal',
                'http://gedcomx.org/Participant',
                'http://gedcomx.org/Official',
                'http://gedcomx.org/Witness',
            ],
        },
        placeReference: {
            type: 'object',
            properties: {
                original: {
                    type: 'string',
                    description: 'The original place name text as supplied by the contributor.',
                },
                description: {
                    $ref: '#/definitions/uri',
                    description: 'A reference to a description of this place.',
                },
            },
        },
        coverage: {
            properties: {
                spatial: {
                    $ref: '#/definitions/placeReference',
                    description: 'The spatial (i.e., geographic) coverage.',
                },
                temporal: {
                    $ref: '#/definitions/date',
                    description: 'The temporal coverage.',
                },
            },
        },
        groupRole: {
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        person: {
                            $ref: '#/definitions/resourceReference',
                            description: 'Reference to the group participant.',
                        },
                        type: {
                            $ref: '#/definitions/uri',
                            description: "Enumerated value identifying the participant's role.",
                        },
                        date: {
                            $ref: '#/definitions/date',
                            description: 'The date of applicability of the role.',
                        },
                        details: {
                            type: 'string',
                            description: 'Details about the role of he participant in the group.',
                        },
                    },
                    required: ['person'],
                },
            ],
        },
        person: {
            title: 'Person',
            allOf: [
                { $ref: '#/definitions/subject' },
                {
                    properties: {
                        private: {
                            type: 'boolean',
                            description: 'Whether this instance of Person has been designated for limited distribution or display.',
                        },
                        gender: {
                            $ref: '#/definitions/gender',
                            description: 'The sex of the person as assigned at birth.',
                        },
                        names: {
                            items: { $ref: '#/definitions/name' },
                            description: 'The names of the person.',
                        },
                        facts: {
                            items: { $ref: '#/definitions/fact' },
                            description: 'The facts of the person.',
                        },
                    },
                },
            ],
        },
        relationship: {
            allOf: [
                { $ref: '#/definitions/subject' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/relationshipType' },
                                { $ref: '#/definitions/uri' },
                            ],
                            description: 'Enumerated value identifying the type of the relationship.',
                        },
                        person1: {
                            $ref: '#/definitions/resourceReference',
                            description: 'Reference to the first person in the relationship.',
                        },
                        person2: {
                            $ref: '#/definitions/resourceReference',
                            description: 'Reference to the second person in the relationship.',
                        },
                        facts: {
                            items: { $ref: '#/definitions/fact' },
                            description: 'The facts about the relationship.',
                        },
                    },
                    required: ['person1', 'person2'],
                },
            ],
        },
        relationshipType: {
            enum: [
                'http://gedcomx.org/Couple',
                'http://gedcomx.org/ParentChild',
                'http://gedcomx.org/EnslavedBy',
            ],
        },
        sourceDescription: {
            title: 'SourceDescription',
            properties: {
                id: {
                    type: 'string',
                    description: 'An identifier for the data structure holding the source description data.',
                },
                resourceType: {
                    anyOf: [
                        { $ref: '#/definitions/resourceTypes' },
                        { $ref: '#/definitions/uri' },
                    ],
                    description: 'Enumerated value identifying the type of resource being described.',
                },
                citations: {
                    items: { $ref: '#/definitions/sourceCitation' },
                    description: 'The citation(s) for this source.',
                },
                mediaType: {
                    type: 'string',
                    description: 'A hint about the media type of the resource being described.',
                },
                about: {
                    $ref: '#/definitions/uri',
                    description: 'A uniform resource identifier (URI) for the resource being described.',
                },
                mediator: {
                    $ref: '#/definitions/resourceReference',
                    description: 'A reference to the entity that mediates access to the described source.',
                },
                publisher: {
                    $ref: '#/definitions/resourceReference',
                    description: 'A reference to the entity responsible for making the described source available.',
                },
                sources: {
                    items: { $ref: '#/definitions/sourceReference' },
                    description: 'A list of references to any sources from which this source is derived.',
                },
                analysis: {
                    $ref: '#/definitions/resourceReference',
                    description: 'A reference to a document containing analysis about this source.',
                },
                componentOf: {
                    $ref: '#/definitions/sourceReference',
                    description: 'A reference to the source that contains this source, i.e. its parent context. Used when the description of a source is not complete without the description of its parent (or containing) source.',
                },
                titles: {
                    items: { $ref: '#/definitions/textValue' },
                    description: 'The display name(s) for this source.',
                },
                notes: {
                    items: { $ref: '#/definitions/note' },
                    description: 'A list of notes about a source.',
                },
                attribution: {
                    $ref: '#/definitions/attribution',
                    description: 'The attribution of this source description.',
                },
                rights: {
                    items: { $ref: '#/definitions/resourceReference' },
                    description: 'The rights for this resource.',
                },
                coverage: {
                    $ref: '#/definitions/coverage',
                    description: 'The coverage of the resource.',
                },
                descriptions: {
                    items: { $ref: '#/definitions/textValue' },
                    description: 'Human-readable descriptions of this source.',
                },
                identifiers: {
                    items: { $ref: '#/definitions/identifier' },
                    description: 'A list of identifiers for the resource being described.',
                },
                created: {
                    type: 'number',
                    description: 'Timestamp of when the resource being described was created.',
                },
                modified: {
                    type: 'number',
                    description: 'Timestamp of when the resource being described was modified.',
                },
                repository: {
                    $ref: '#/definitions/resourceReference',
                    description: 'A reference to the repository that contains the described resource.',
                },
            },
            required: ['citations'],
        },
        resourceTypes: {
            enum: [
                'http://gedcomx.org/Collection',
                'http://gedcomx.org/PhysicalArtifact',
                'http://gedcomx.org/DigitalArtifact',
                'http://gedcomx.org/Record',
            ],
        },
        agent: {
            title: 'Agent',
            properties: {
                id: { type: 'string' },
                identifiers: {
                    type: 'array',
                    items: { $ref: '#/definitions/identifier' },
                },
                names: {
                    type: 'array',
                    items: { $ref: '#/definitions/textValue' },
                },
                homepage: { $ref: '#/definitions/resourceReference' },
                openid: { $ref: '#/definitions/resourceReference' },
                accounts: {
                    type: 'array',
                    items: { $ref: '#/definitions/onlineAccount' },
                },
                emails: {
                    type: 'array',
                    items: { $ref: '#/definitions/resourceReference' },
                },
                phones: {
                    type: 'array',
                    items: { $ref: '#/definitions/resourceReference' },
                },
                addresses: {
                    type: 'array',
                    items: { $ref: '#/definitions/address' },
                },
                person: {
                    $ref: '#/definitions/resourceReference',
                },
            },
        },
        event: {
            allOf: [
                { $ref: '#/definitions/subject' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/eventTypes' },
                                { $ref: '#/definitions/uri' },
                            ],
                        },
                        date: { $ref: '#/definitions/date' },
                        place: { $ref: '#/definitions/placeReference' },
                        roles: {
                            type: 'array',
                            items: { $ref: '#/definitions/eventRole' },
                        },
                    },
                },
            ],
        },
        eventTypes: {
            enum: [
                'http://gedcomx.org/Adoption',
                'http://gedcomx.org/AdultChristening',
                'http://gedcomx.org/Annulment',
                'http://gedcomx.org/Baptism',
                'http://gedcomx.org/BarMitzvah',
                'http://gedcomx.org/BatMitzvah',
                'http://gedcomx.org/Birth',
                'http://gedcomx.org/Blessing',
                'http://gedcomx.org/Burial',
                'http://gedcomx.org/Census',
                'http://gedcomx.org/Christening',
                'http://gedcomx.org/Circumcision',
                'http://gedcomx.org/Confirmation',
                'http://gedcomx.org/Cremation',
                'http://gedcomx.org/Death',
                'http://gedcomx.org/Divorce',
                'http://gedcomx.org/DivorceFiling',
                'http://gedcomx.org/Education',
                'http://gedcomx.org/Engagement',
                'http://gedcomx.org/Emigration',
                'http://gedcomx.org/Excommunication',
                'http://gedcomx.org/FirstCommunion',
                'http://gedcomx.org/Funeral',
                'http://gedcomx.org/Immigration',
                'http://gedcomx.org/LandTransaction',
                'http://gedcomx.org/Marriage',
                'http://gedcomx.org/MilitaryAward',
                'http://gedcomx.org/MilitaryDischarge',
                'http://gedcomx.org/Mission',
                'http://gedcomx.org/MoveFrom',
                'http://gedcomx.org/MoveTo',
                'http://gedcomx.org/Naturalization',
                'http://gedcomx.org/Ordination',
                'http://gedcomx.org/Retirement',
            ],
        },
        document: {
            title: 'Document',
            allOf: [
                { $ref: '#/definitions/conclusion' },
                {
                    properties: {
                        type: {
                            anyOf: [
                                { $ref: '#/definitions/documentTypes' },
                                { $ref: '#/definitions/uri' },
                            ],
                        },
                        extracted: { type: 'boolean' },
                        textType: { type: 'string' },
                        text: { type: 'string' },
                        attribution: { $ref: '#/definitions/attribution' },
                    },
                    required: ['text'],
                },
            ],
        },
        documentTypes: {
            enum: [
                'http://gedcomx.org/Abstract',
                'http://gedcomx.org/Transcription',
                'http://gedcomx.org/Translation',
                'http://gedcomx.org/Analysis',
            ],
        },
        placeDescription: {
            title: 'PlaceDescription',
            allOf: [
                { $ref: '#/definitions/subject' },
                {
                    properties: {
                        names: {
                            items: { $ref: '#/definitions/textValue' },
                        },
                        type: { $ref: '#/definitions/uri' },
                        place: { $ref: '#/definitions/resourceReference' },
                        jurisdiction: {
                            $ref: '#/definitions/resourceReference',
                        },
                        latitude: { type: 'number' },
                        longitude: { type: 'number' },
                        temporalDescription: { $ref: '#/definitions/date' },
                        spatialDescription: { $ref: '#/definitions/resourceReference' },
                    },
                    required: ['names'],
                },
            ],
        },
        group: {
            allOf: [
                { $ref: '#/definitions/subject' },
                {
                    properties: {
                        names: {
                            type: 'array',
                            items: { $ref: '#/definitions/textValue' },
                        },
                        date: { $ref: '#/definitions/date' },
                        place: { $ref: '#/definitions/resourceReference' },
                        roles: {
                            type: 'array',
                            items: { $ref: '#/definitions/groupRole' },
                        },
                    },
                    required: ['names'],
                },
            ],
        },
    },
    type: 'object',
    properties: {
        persons: {
            type: 'array',
            items: { $ref: '#/definitions/person' },
        },
        relationships: {
            type: 'array',
            items: { $ref: '#/definitions/relationship' },
        },
        sourceDescriptions: {
            type: 'array',
            items: { $ref: '#/definitions/sourceDescription' },
        },
        agents: {
            type: 'array',
            items: { $ref: '#/definitions/agent' },
        },
        events: {
            type: 'array',
            items: { $ref: '#/definitions/event' },
        },
        documents: {
            type: 'array',
            items: { $ref: '#/definitions/document' },
        },
        places: {
            type: 'array',
            items: { $ref: '#/definitions/placeDescription' },
        },
        groups: {
            type: 'array',
            items: { $ref: '#/definitions/group' },
        },
        description: { $ref: '#/definitions/uri' },
        id: { type: 'string' },
        lang: { $ref: '#/definitions/localeTag' },
        attribution: { $ref: '#/definitions/attribution' },
    },
};
const data$b = {
    attribution: {
        contributor: {
            resource: '#A-1',
        },
        modified: 1398405600000,
    },
    persons: [
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'Samuel Ham',
                        },
                    ],
                },
            ],
            gender: {
                type: 'http://gedcomx.org/Male',
            },
            facts: [
                {
                    type: 'http://gedcomx.org/Residence',
                    date: {
                        original: '3 November 1828',
                        formal: '+1828-11-03',
                    },
                    place: {
                        original: 'parish of Honiton, Devon, England',
                    },
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-1',
        },
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'Elizabeth Spiller',
                        },
                    ],
                },
            ],
            gender: {
                type: 'http://gedcomx.org/Female',
            },
            facts: [
                {
                    type: 'http://gedcomx.org/Residence',
                    date: {
                        original: '3 November 1828',
                        formal: '+1828-11-03',
                    },
                    place: {
                        original: 'parish of Wilton, Somerset, England',
                    },
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-2',
        },
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'Jno. Pain',
                        },
                    ],
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-3',
        },
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'R.G. Halls',
                        },
                    ],
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-4',
        },
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'Peggy Hammet',
                        },
                    ],
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-5',
        },
        {
            names: [
                {
                    nameForms: [
                        {
                            fullText: 'David Smith Stone',
                        },
                    ],
                },
            ],
            extracted: true,
            sources: [
                {
                    description: '#S-2',
                },
            ],
            id: 'P-6',
        },
        {
            evidence: [
                {
                    resource: '#P-1',
                },
            ],
            analysis: {
                resource: '#D-2',
            },
            id: 'C-1',
        },
    ],
    relationships: [
        {
            type: 'http://gedcomx.org/Couple',
            extracted: true,
            facts: [
                {
                    type: 'http://gedcomx.org/Marriage',
                    date: {
                        original: '3 November 1828',
                        formal: '+1828-11-03',
                    },
                    place: {
                        original: 'Wilton St George, Wilton, Somerset, England',
                    },
                },
            ],
            person1: {
                resource: '#P-1',
            },
            person2: {
                resource: '#P-2',
            },
        },
    ],
    sourceDescriptions: [
        {
            description: [
                {
                    value: 'Marriage entry for Samuel Ham and Elizabeth in a copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837.',
                },
            ],
            resourceType: 'http://gedcomx.org/PhysicalArtifact',
            citations: [
                {
                    value: 'Joseph Houghton Spencer, transcriber, Church of England, Parish Church of Wilton (Somerset). A copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837; Marriage entry for Samuel Ham and Elizabeth Spiller (3 November 1828), (Taunton: Barnicott, 1890), p. 224, No. 86.',
                },
            ],
            titles: [
                {
                    value: 'Marriage entry for Samuel Ham and Elizabeth Spiller, Parish Register, Wilton, Somerset, England',
                },
            ],
            repository: {
                resource: '#A-2',
            },
            id: 'S-1',
        },
        {
            description: [
                {
                    value: 'Transcription of marriage entry for Samuel Ham and Elizabeth in a copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837.',
                },
            ],
            sources: [
                {
                    description: '#S-1',
                },
            ],
            resourceType: 'http://gedcomx.org/DigitalArtifact',
            citations: [
                {
                    value: 'Joseph Houghton Spencer, transcriber, Church of England, Parish Church of Wilton (Somerset). A copy of the registers of the baptisms, marriages, and burials at the church of St. George in the parish of Wilton : adjoining Taunton, in the county of Somerset from A.D. 1558 to A.D. 1837; Marriage entry for Samuel Ham and Elizabeth Spiller (3 November 1828), (Taunton: Barnicott, 1890), p. 224, No. 86.',
                },
            ],
            about: '#D-1',
            titles: [
                {
                    value: 'Transcription of marriage entry for Samuel Ham and Elizabeth Spiller, Parish Register, Wilton, Somerset, England',
                },
            ],
            id: 'S-2',
        },
    ],
    agents: [
        {
            names: [
                {
                    value: 'Jane Doe',
                },
            ],
            emails: [
                {
                    resource: 'mailto:example@example.org',
                },
            ],
            id: 'A-1',
        },
        {
            names: [
                {
                    value: 'Family History Library',
                },
            ],
            addresses: [
                {
                    city: 'Salt Lake City',
                    stateOrProvince: 'Utah',
                },
            ],
            id: 'A-2',
        },
    ],
    events: [
        {
            type: 'http://gedcomx.org/Marriage',
            date: {
                original: '3 November 1828',
                formal: '+1828-11-03',
            },
            place: {
                original: 'Wilton St George, Wilton, Somerset, England',
            },
            roles: [
                {
                    type: 'http://gedcomx.org/Principal',
                    person: {
                        resource: '#P-1',
                    },
                },
                {
                    type: 'http://gedcomx.org/Principal',
                    person: {
                        resource: '#P-2',
                    },
                },
                {
                    type: 'http://gedcomx.org/Witness',
                    person: {
                        resource: '#P-3',
                    },
                },
                {
                    type: 'http://gedcomx.org/Witness',
                    person: {
                        resource: '#P-4',
                    },
                },
                {
                    type: 'http://gedcomx.org/Witness',
                    person: {
                        resource: '#P-5',
                    },
                },
                {
                    type: 'http://gedcomx.org/Official',
                    person: {
                        resource: '#P-6',
                    },
                },
            ],
            extracted: true,
            id: 'E-1',
        },
    ],
    documents: [
        {
            type: 'http://gedcomx.org/Transcription',
            text: 'Samuel Ham of the parish of Honiton and Elizabeth Spiller\nwere married this 3rd day of November 1828 by David Smith\nStone, Pl Curate,\nIn the Presence of\nJno Pain.\nR.G. Halls.  Peggy Hammet.\nNo. 86.',
            sources: [
                {
                    description: '#S-1',
                },
            ],
            lang: 'en',
            id: 'D-1',
        },
        {
            text: '...Jane Doe`s analysis document...',
            id: 'D-2',
        },
    ],
};
const uischema$b = {
    type: 'Categorization',
    elements: [
        {
            type: 'Category',
            label: 'Persons',
            elements: [{ type: 'ListWithDetail', scope: '#/properties/persons' }],
        },
        {
            type: 'Category',
            label: 'Relationships',
            elements: [
                { type: 'ListWithDetail', scope: '#/properties/relationships' },
            ],
        },
        {
            type: 'Category',
            label: 'SourceDescriptions',
            elements: [
                { type: 'ListWithDetail', scope: '#/properties/sourceDescriptions' },
            ],
        },
        {
            type: 'Category',
            label: 'Agents',
            elements: [{ type: 'ListWithDetail', scope: '#/properties/agents' }],
        },
        {
            type: 'Category',
            label: 'Events',
            elements: [{ type: 'ListWithDetail', scope: '#/properties/events' }],
        },
        {
            type: 'Category',
            label: 'Documents',
            elements: [{ type: 'ListWithDetail', scope: '#/properties/documents' }],
        },
        {
            type: 'Category',
            label: 'Places',
            elements: [{ type: 'ListWithDetail', scope: '#/properties/places' }],
        },
        {
            type: 'Category',
            label: 'Generic',
            elements: [
                { type: 'Control', scope: '#/properties/description' },
                { type: 'Control', scope: '#/properties/lang' },
                { type: 'Control', scope: '#/properties/attribution' },
                { type: 'Control', scope: '#/properties/id' },
            ],
        },
    ],
};
registerExamples([
    {
        name: 'huge',
        label: 'Huge Test',
        data: data$b,
        schema: schema$b,
        uischema: uischema$b,
    },
]);

var huge = /*#__PURE__*/Object.freeze({
  __proto__: null,
  uischema: uischema$b
});

const schema$a = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            default: 'foo',
        },
        name_noDefault: {
            type: 'string',
        },
        description: {
            type: 'string',
            default: 'bar',
        },
        done: {
            type: 'boolean',
            default: false,
        },
        rating: {
            type: 'integer',
            default: 5,
        },
        cost: {
            type: 'number',
            default: 5.5,
        },
        dueDate: {
            type: 'string',
            format: 'date',
            default: '2019-04-01',
        },
    },
    required: ['name', 'name_noDefault'],
};
const uischema$a = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/name',
        },
        {
            type: 'Control',
            scope: '#/properties/name_noDefault',
        },
        {
            type: 'Control',
            label: false,
            scope: '#/properties/done',
        },
        {
            type: 'Control',
            scope: '#/properties/description',
            options: {
                multi: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/rating',
        },
        {
            type: 'Control',
            scope: '#/properties/cost',
        },
        {
            type: 'Control',
            scope: '#/properties/dueDate',
        },
    ],
};
const data$a = {
    name: 'Send email to Adrian',
    name_noDefault: 'Send email to Adrian',
    description: 'Confirm if you have passed the subject\nHereby ...',
    done: true,
    rating: 1,
    cost: 3.14,
    dueDate: '2019-05-01',
};
registerExamples([
    {
        name: 'default',
        label: 'Default',
        data: data$a,
        schema: schema$a,
        uischema: uischema$a,
    },
]);

var _default = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$a,
  uischema: uischema$a,
  data: data$a
});

const touchedProperties = {
    name: false,
    description: false,
};
const onChange = (dispatch) => (_) => ({ data, errors }) => {
    Object.keys(data).forEach((key) => (touchedProperties[key] = true));
    const newErrors = errors.filter((error) => {
        return touchedProperties[error.dataPath ?? error.instancePath];
    });
    if (newErrors.length < errors.length) {
        return dispatch(updateErrors(newErrors));
    }
};
const schema$9 = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
        },
        description: {
            type: 'string',
            minLength: 1,
        },
    },
    required: ['name', 'description'],
};
const uischema$9 = undefined;
const data$9 = {};
registerExamples([
    {
        name: 'onChange',
        label: 'On Change Listener',
        data: data$9,
        schema: schema$9,
        uischema: uischema$9,
    },
]);

var onChange$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  onChange: onChange,
  schema: schema$9,
  uischema: uischema$9,
  data: data$9
});

const schema$8 = {
    type: 'object',
    properties: {
        plainEnum: {
            type: 'string',
            enum: ['foo', 'bar'],
        },
        plainEnumSet: {
            type: 'string',
            enum: ['foo', 'bar'],
        },
        enumWithError: {
            type: 'string',
            enum: ['foo', 'bar'],
        },
        oneOfEnum: {
            type: 'string',
            oneOf: [
                { const: 'foo', title: 'Foo' },
                { const: 'bar', title: 'Bar' },
                { const: 'foobar', title: 'FooBar' },
            ],
        },
        oneOfEnumSet: {
            type: 'string',
            oneOf: [
                { const: 'foo', title: 'Foo' },
                { const: 'bar', title: 'Bar' },
                { const: 'foobar', title: 'FooBar' },
            ],
        },
        oneOfEnumWithError: {
            type: 'string',
            oneOf: [
                { const: 'foo', title: 'Foo' },
                { const: 'bar', title: 'Bar' },
                { const: 'foobar', title: 'FooBar' },
            ],
        },
        constEnum: {
            const: 'Const Value',
        },
    },
};
const uischema$8 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Group',
            label: 'Enums',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/constEnum',
                },
                {
                    type: 'Control',
                    scope: '#/properties/plainEnum',
                },
                {
                    type: 'Control',
                    scope: '#/properties/plainEnumSet',
                },
                {
                    type: 'Control',
                    scope: '#/properties/plainEnum',
                    options: {
                        autocomplete: false,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/plainEnumSet',
                    options: {
                        autocomplete: false,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/enumWithError',
                },
            ],
        },
        {
            type: 'Group',
            label: 'One of Enums',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/oneOfEnum',
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfEnumSet',
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfEnum',
                    options: {
                        autocomplete: false,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfEnumSet',
                    options: {
                        autocomplete: false,
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/oneOfEnumWithError',
                },
            ],
        },
    ],
};
const data$8 = {
    plainEnumSet: 'foo',
    enumWithError: 'bogus',
    oneOfEnumSet: 'bar',
    oneOfEnumWithError: 'bogus',
};
registerExamples([
    {
        name: 'enum',
        label: 'Enums',
        data: data$8,
        schema: schema$8,
        uischema: uischema$8,
    },
]);

var _enum = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$8,
  uischema: uischema$8,
  data: data$8
});

const data$7 = {};
const schema$7 = {
    type: 'object',
    properties: {
        exampleRadioEnum: {
            type: 'string',
            enum: ['One', 'Two', 'Three'],
        },
        exampleRadioOneOfEnum: {
            type: 'string',
            oneOf: [
                { const: 'foo', title: 'Foo' },
                { const: 'bar', title: 'Bar' },
                { const: 'foobar', title: 'FooBar' },
            ],
        },
    },
};
const uischema$7 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Group',
            label: 'Simple enum',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/exampleRadioEnum',
                    options: {
                        format: 'radio',
                        orientation: 'vertical',
                    },
                },
            ],
        },
        {
            type: 'Group',
            label: 'One of Enum',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/exampleRadioOneOfEnum',
                    options: {
                        format: 'radio',
                    },
                },
            ],
        },
    ],
};
registerExamples([
    {
        name: 'radio-group',
        label: 'Radio Group',
        data: data$7,
        schema: schema$7,
        uischema: uischema$7,
    },
]);

var radioGroup = /*#__PURE__*/Object.freeze({
  __proto__: null,
  data: data$7,
  schema: schema$7,
  uischema: uischema$7
});

const schema$6 = {
    type: 'object',
    properties: {
        oneOfMultiEnum: {
            type: 'array',
            uniqueItems: true,
            items: {
                oneOf: [
                    { const: 'foo', title: 'My Foo' },
                    { const: 'bar', title: 'My Bar' },
                    { const: 'foobar', title: 'My FooBar' },
                ],
            },
        },
        multiEnum: {
            type: 'array',
            uniqueItems: true,
            items: {
                type: 'string',
                enum: ['foo', 'bar', 'foobar'],
            },
        },
    },
};
const uischema$6 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/oneOfMultiEnum',
        },
        {
            type: 'Control',
            scope: '#/properties/multiEnum',
        },
    ],
};
const data$6 = { oneOfMultiEnum: ['foo'], multiEnum: ['bar'] };
registerExamples([
    {
        name: 'multi-enum',
        label: 'Enum - Multi selection',
        data: data$6,
        schema: schema$6,
        uischema: uischema$6,
    },
]);

var enumMulti = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$6,
  uischema: uischema$6,
  data: data$6
});

const schema$5 = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            plainEnum: {
                type: 'string',
                enum: ['foo', 'bar'],
            },
            oneOfEnum: {
                type: 'string',
                oneOf: [
                    { const: 'foo', title: 'Foo' },
                    { const: 'bar', title: 'Bar' },
                    { const: 'foobar', title: 'FooBar' },
                ],
            },
        },
    },
};
const uischema$5 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#',
        },
    ],
};
const data$5 = [];
registerExamples([
    {
        name: 'enumInArray',
        label: 'Array containing enums',
        data: data$5,
        schema: schema$5,
        uischema: uischema$5,
    },
]);

var enumInArray = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$5,
  uischema: uischema$5,
  data: data$5
});

const schema$4 = {
    type: 'object',
    properties: {
        readonly: {
            type: 'string',
            readOnly: true,
        },
        readonlyByUISchema: {
            type: 'string',
        },
        notReadonly: {
            type: 'string',
        },
    },
};
const uischema$4 = {
    type: 'VerticalLayout',
    elements: [
        {
            type: 'Control',
            scope: '#/properties/readonly',
            label: 'A readonly field',
        },
        {
            type: 'Control',
            scope: '#/properties/readonlyByUISchema',
            label: 'A readonly field by ui schema',
            options: {
                readonly: true,
            },
        },
        {
            type: 'Control',
            scope: '#/properties/notReadonly',
            label: 'A normal field',
        },
    ],
};
const data$4 = {
    readonly: 'readonly by schema',
    readonlyByUISchema: 'readonly by ui schema',
    notReadonly: 'normal field',
};
registerExamples([
    {
        name: 'Readonly Fields',
        label: 'Readonly examples',
        data: data$4,
        schema: schema$4,
        uischema: uischema$4,
    },
]);

var readonly = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$4,
  uischema: uischema$4,
  data: data$4
});

const data$3 = {
    'an-array-of-strings': ['foo', 'bar', 'foobar'],
};
const schema$3 = {
    type: 'object',
    properties: {
        'an-array-of-strings': {
            type: 'array',
            items: {
                type: 'string',
            },
        },
    },
};
const uischema$3 = {
    type: 'ListWithDetail',
    scope: '#/properties/an-array-of-strings',
};
registerExamples([
    {
        name: 'list-with-detail-primitive-string',
        label: 'List With Detail primitive (string)',
        data: data$3,
        schema: schema$3,
        uischema: uischema$3,
    },
]);
const data_number = {
    'an-array-of-numbers': [1, 2, 3],
};
const schema_number = {
    type: 'object',
    properties: {
        'an-array-of-numbers': {
            type: 'array',
            items: {
                type: 'number',
            },
        },
    },
};
const uischema_number = {
    type: 'ListWithDetail',
    scope: '#/properties/an-array-of-numbers',
};
registerExamples([
    {
        name: 'list-with-detail-primitive-number',
        label: 'List With Detail primitive (number)',
        data: data_number,
        schema: schema_number,
        uischema: uischema_number,
    },
]);

var listWithDetailPrimitives = /*#__PURE__*/Object.freeze({
  __proto__: null,
  data: data$3,
  schema: schema$3,
  uischema: uischema$3,
  data_number: data_number,
  schema_number: schema_number,
  uischema_number: uischema_number
});

const schema$2 = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1,
            description: "The task's name",
        },
        recurrence: {
            type: 'string',
            enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
        },
    },
    anyOf: [
        {
            if: {
                properties: {
                    recurrence: {
                        const: 'Never',
                    },
                },
            },
            then: {
                properties: {
                    lastname: {
                        type: 'string',
                    },
                    age: {
                        type: 'number',
                    },
                },
            },
        },
    ],
};
const uischema$2 = {
    type: 'HorizontalLayout',
    elements: [
        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Control',
                    scope: '#/properties/name',
                },
                {
                    type: 'Control',
                    scope: '#/properties/recurrence',
                },
                {
                    type: 'Control',
                    scope: '#/anyOf/0/then/properties/lastname',
                    rule: {
                        effect: 'SHOW',
                        condition: {
                            scope: '#/properties/recurrence',
                            schema: {
                                const: 'Never',
                            },
                        },
                    },
                },
                {
                    type: 'Control',
                    scope: '#/properties/age',
                    rule: {
                        effect: 'SHOW',
                        condition: {
                            scope: '#/properties/recurrence',
                            schema: {
                                const: 'Never',
                            },
                        },
                    },
                },
            ],
        },
    ],
};
const data$2 = {};
registerExamples([
    {
        name: 'conditional-schema-compositions',
        label: 'Conditional Schema Compositions',
        data: data$2,
        schema: schema$2,
        uischema: uischema$2,
    },
]);

var conditionalSchemaCompositions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$2,
  uischema: uischema$2
});

const additionalErrors = [];
const actions = [
    {
        label: 'Add additional error',
        apply: (props) => {
            additionalErrors.push({
                instancePath: '/personalData/age',
                message: `New error #${additionalErrors.length + 1}`,
                schemaPath: '',
                keyword: '',
                params: {},
            });
            return {
                ...props,
                additionalErrors: [...additionalErrors],
            };
        },
    },
];
registerExamples([
    {
        name: 'additional-errors',
        label: 'Additional errors',
        data: data$D,
        schema: schema$B,
        uischema: uischema$B,
        actions,
    },
]);

var additionalErrors$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  additionalErrors: additionalErrors,
  actions: actions
});

const schema$1 = {
    type: 'object',
    properties: {
        b: { type: 'boolean' },
        c: { type: 'string', minLength: 1 },
    },
    if: { properties: { b: { enum: [false] } } },
    then: { required: ['c'] },
};
const uischema$1 = undefined;
const data$1 = {};
registerExamples([
    {
        name: 'ifthenelse',
        label: 'If Then Else',
        data: data$1,
        schema: schema$1,
        uischema: uischema$1,
    },
]);

var if_then_else = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema$1,
  uischema: uischema$1,
  data: data$1
});

const schema = {
    type: 'object',
    properties: {
        foo: { type: 'string' },
        bar: { type: 'string' },
        baz: { type: 'string' },
        nested: {
            type: 'object',
            properties: {
                foo: { type: 'string' },
                bar: { type: 'string' },
            },
            allOf: [
                {
                    if: {
                        properties: {
                            foo: { const: 'bar' },
                        },
                    },
                    then: { required: ['bar'] },
                },
            ],
        },
    },
    allOf: [
        {
            if: {
                properties: {
                    foo: { const: 'bar' },
                },
            },
            then: { required: ['bar'] },
        },
        {
            if: {
                properties: {
                    foo: { const: 'baz' },
                },
            },
            then: { required: ['baz'] },
        },
        {
            allOf: [
                {
                    if: {
                        properties: {
                            foo: { pattern: 'foo.' },
                        },
                    },
                    then: {
                        required: ['baz', 'bar'],
                    },
                },
            ],
        },
    ],
};
const uischema = {
    type: 'VerticalLayout',
    elements: [
        {
            label: 'Foo',
            type: 'Control',
            scope: '#/properties/foo',
        },
        {
            type: 'Control',
            label: 'bar',
            scope: '#/properties/bar',
        },
        {
            type: 'Control',
            label: 'baz',
            scope: '#/properties/baz',
        },
        {
            type: 'Control',
            label: 'foo1',
            scope: '#/properties/nested/properties/foo',
        },
        {
            type: 'Control',
            label: 'bar1',
            scope: '#/properties/nested/properties/bar',
        },
    ],
};
const data = {};
registerExamples([
    {
        name: 'if-allOf',
        label: 'If AllOf',
        data,
        schema,
        uischema,
    },
]);

var ifAllOf = /*#__PURE__*/Object.freeze({
  __proto__: null,
  schema: schema,
  uischema: uischema
});

export { additionalErrors$1 as additionalErrors, allOf, ifAllOf as allOfIf, anyOf, anyOfOneOfAllOfResolve, arrays as array, arraysI18n as arrayI18n, arraysWithCustomElementLabel as arrayWithCustomChildLabel, arraysWithDefaults as arrayWithDefaults, arraysWithDetail as arrayWithDetail, arraysWithDetailAndRule as arrayWithDetailAndRule, arraysWithSorting as arrayWithSorting, categorization, conditionalSchemaCompositions as conditionalSchemaComposition, config$1 as config, controlOptions, dates, _default as defaultExample, _enum as enumExample, enumInArray, generateDynamic, generate as generateSchema, generateUI as generateUISchema, getExamples, huge, i18n, if_then_else as ifThenElse, _1884 as issue_1884, _1948 as issue_1948, layout, listWithDetail, listWithDetailPrimitives, listWithDetailRegistered, enumMulti as multiEnum, nestedArrays as nestedArray, nestedCategorization, numbers, object, onChange$1 as onChange, oneOf, oneOfArray, oneOfRecursive, person, radioGroup as radioGroupExample, readonly, registerExamples, rule, ruleInheritance, scope, categorizationStepper as stepper, categorizationStepperNavButtons as steppershownav, stringArray, text };
//# sourceMappingURL=jsonforms-examples.esm.js.map
