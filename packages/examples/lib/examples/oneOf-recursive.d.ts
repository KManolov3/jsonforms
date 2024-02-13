export declare const schema: {
    $schema: string;
    definitions: {
        fileOrFolder: {
            title: string;
            oneOf: {
                $ref: string;
            }[];
        };
        file: {
            title: string;
            type: string;
            properties: {
                name: {
                    type: string;
                };
            };
        };
        folder: {
            type: string;
            title: string;
            properties: {
                name: {
                    type: string;
                };
                children: {
                    type: string;
                    items: {
                        $ref: string;
                    };
                };
            };
        };
    };
    type: string;
    properties: {
        root: {
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
};
