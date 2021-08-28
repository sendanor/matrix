// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { isString } from "../../../ts/modules/lodash";
import { assertMatrixSyncResponseRoomsDTO } from "../response/sync/types/MatrixSyncResponseRoomsDTO";

export type MatrixRoomId = string;

export function isMatrixRoomId (value: any): value is MatrixRoomId {
    return (
        isString(value)
        && !!value
        && value[0] === '!'
    );
}

export function assertMatrixRoomId (value: any): void {

    if (!( isString(value) )) {
        throw new TypeError(`value was not string: "${value}"`);
    }

    if (!( !!value )) {
        throw new TypeError(`value was empty: "${value}"`);
    }

    if (!( value[0] === '!' )) {
        throw new TypeError(`value did not start with !: "${value}"`);
    }

}

export function explainMatrixRoomId (value : any) : string {
    try {
        assertMatrixRoomId(value);
        return 'No errors detected';
    } catch (err) {
        return err.message;
    }
}


export function stringifyMatrixRoomId (value: MatrixRoomId): string {
    return `MatrixRoomId(${value})`;
}

export function parseMatrixRoomId (value: any): MatrixRoomId | undefined {
    if ( isMatrixRoomId(value) ) return value;
    return undefined;
}

export default MatrixRoomId;