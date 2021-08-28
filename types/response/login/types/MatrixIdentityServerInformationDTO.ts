// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../../../../../ts/modules/lodash";

export interface MatrixIdentityServerInformationDTO {
    readonly base_url: string;
}

export function isMatrixIdentityServerInformationDTO (value: any): value is MatrixIdentityServerInformationDTO {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, ['base_url'])
        && isString(value?.base_url)
    );
}

export function stringifyMatrixIdentityServerInformationDTO (value: MatrixIdentityServerInformationDTO): string {
    if ( !isMatrixIdentityServerInformationDTO(value) ) throw new TypeError(`Not MatrixIdentityServerInformationDTO: ${value}`);
    return `MatrixIdentityServerInformationDTO(${value})`;
}

export function parseMatrixIdentityServerInformationDTO (value: any): MatrixIdentityServerInformationDTO | undefined {
    if ( isMatrixIdentityServerInformationDTO(value) ) return value;
    return undefined;
}

export default MatrixIdentityServerInformationDTO;