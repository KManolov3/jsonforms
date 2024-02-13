export declare const data: {
    orders: ({
        customer: {
            id: string;
            name: string;
            department: string;
        };
        title: string;
        ordered: boolean;
        processId: string;
        assignee: string;
        status: string;
        startDate: string;
        endDate: string;
    } | {
        customer: {
            id: string;
            name: string;
            department?: undefined;
        };
        title: string;
        processId: string;
        assignee: string;
        startDate: string;
        status: string;
        ordered?: undefined;
        endDate?: undefined;
    })[];
};
export declare const schema: {
    definitions: {
        order: {
            type: string;
            properties: {
                customer: {
                    type: string;
                    properties: {
                        id: {
                            type: string;
                        };
                        name: {
                            type: string;
                            format: string;
                        };
                        department: {
                            type: string;
                        };
                    };
                };
                title: {
                    type: string;
                    minLength: number;
                    title: string;
                };
                ordered: {
                    type: string;
                };
                processId: {
                    type: string;
                    minimum: number;
                };
                assignee: {
                    type: string;
                };
                startDate: {
                    type: string;
                    format: string;
                };
                endDate: {
                    type: string;
                    format: string;
                };
                status: {
                    type: string;
                    enum: string[];
                };
            };
            required: string[];
        };
    };
    type: string;
    properties: {
        orders: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
};
export declare const uischema: {
    type: string;
    scope: string;
    options: {
        labelRef: string;
        detail: {
            type: string;
            elements: ({
                type: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
                label?: undefined;
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    label: string;
                    scope: string;
                }[];
            } | {
                type: string;
                elements: {
                    type: string;
                    elements: ({
                        type: string;
                        elements: ({
                            type: string;
                            scope: string;
                            options: {
                                toggle: boolean;
                            };
                        } | {
                            type: string;
                            scope: string;
                            options?: undefined;
                        })[];
                        scope?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        elements?: undefined;
                    })[];
                }[];
                label?: undefined;
            })[];
        };
    };
};
export declare const uischemaNoLabelRef: {
    type: string;
    scope: string;
    options: {
        detail: {
            type: string;
            elements: ({
                type: string;
                elements: {
                    type: string;
                    scope: string;
                }[];
                label?: undefined;
            } | {
                type: string;
                label: string;
                elements: {
                    type: string;
                    label: string;
                    scope: string;
                }[];
            } | {
                type: string;
                elements: {
                    type: string;
                    elements: ({
                        type: string;
                        elements: ({
                            type: string;
                            scope: string;
                            options: {
                                toggle: boolean;
                            };
                        } | {
                            type: string;
                            scope: string;
                            options?: undefined;
                        })[];
                        scope?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        elements?: undefined;
                    })[];
                }[];
                label?: undefined;
            })[];
        };
    };
};
