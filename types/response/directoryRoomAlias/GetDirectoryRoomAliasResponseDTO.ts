// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    hasNoOtherKeys,
    isRegularObject,
    isString,
    isStringArray
} from "../../../../ts/modules/lodash";

export interface GetDirectoryRoomAliasResponseDTO {
    readonly room_id : string;
    readonly servers : string[];
}

export function isGetDirectoryRoomAliasResponseDTO (value: any): value is GetDirectoryRoomAliasResponseDTO {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'room_id',
            'servers'
        ])
        && isString(value?.room_id)
        && isStringArray(value?.servers)
    );
}

export function stringifyGetDirectoryRoomAliasResponseDTO (value: GetDirectoryRoomAliasResponseDTO): string {
    return `GetDirectoryRoomAliasResponseDTO(${value})`;
}

export function parseGetDirectoryRoomAliasResponseDTO (value: any): GetDirectoryRoomAliasResponseDTO | undefined {
    if ( isGetDirectoryRoomAliasResponseDTO(value) ) return value;
    return undefined;
}

export default GetDirectoryRoomAliasResponseDTO;