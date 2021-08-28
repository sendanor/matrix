// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import {
    hasNoOtherKeys,
    isBooleanOrUndefined,
    isRegularObject,
    isString, isStringOrUndefined, isUndefined
} from "../../../../ts/modules/lodash";
import MatrixPreviousRoomDTO, { isMatrixPreviousRoomDTO } from "./types/MatrixPreviousRoomDTO";

export interface MatrixRoomCreateEventDTO {

    type           ?: string;
    creator         : string;
    'm.federate'   ?: boolean;
    room_version   ?: string;
    predecessor    ?: MatrixPreviousRoomDTO;

}

export function isMatrixCreationContentDTO (value: any): value is MatrixRoomCreateEventDTO {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'creator',
            'm.federate',
            'room_version',
            'predecessor'
        ])
        && isString(value?.creator)
        && isBooleanOrUndefined(value['m.federate'])
        && isStringOrUndefined(value?.room_version)
        && ( isUndefined(value?.predecessor) || isMatrixPreviousRoomDTO(value?.predecessor) )
    );
}

export function isPartialMatrixCreationContentDTO (value: any): value is Partial<MatrixRoomCreateEventDTO> {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'creator',
            'm.federate',
            'room_version',
            'predecessor'
        ])
        && isStringOrUndefined(value?.creator)
        && isBooleanOrUndefined(value['m.federate'])
        && isStringOrUndefined(value?.room_version)
        && ( isUndefined(value?.predecessor) || isMatrixPreviousRoomDTO(value?.predecessor) )
    );
}

export function stringifyMatrixCreationContentDTO (value: MatrixRoomCreateEventDTO): string {
    return `MatrixCreationContentDTO(${value})`;
}

export function parseMatrixCreationContentDTO (value: any): MatrixRoomCreateEventDTO | undefined {
    if ( isMatrixCreationContentDTO(value) ) return value;
    return undefined;
}

export default MatrixRoomCreateEventDTO;