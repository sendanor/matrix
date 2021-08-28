// Copyright (c) 2021. Sendanor <info@sendanor.fi>. All rights reserved.

import { isInteger, isRegularObjectOf } from "../../../../../ts/modules/lodash";
import MatrixEventType, { isMatrixEventType } from "../../../event/MatrixEventType";

export type MatrixEventPowerLevelsDTO = {
    [K in MatrixEventType]: number;
}

export function isMatrixEventPowerLevelsDTO (value: any): value is MatrixEventPowerLevelsDTO {
    return (
        isRegularObjectOf<MatrixEventType, number>(value, isMatrixEventType, isInteger)
    );
}

export function stringifyMatrixEventPowerLevelsDTO (value: MatrixEventPowerLevelsDTO): string {
    return `MatrixEventPowerLevelsDTO(${value})`;
}

export function parseMatrixEventPowerLevelsDTO (value: any): MatrixEventPowerLevelsDTO | undefined {
    if ( isMatrixEventPowerLevelsDTO(value) ) return value;
    return undefined;
}

export default MatrixEventPowerLevelsDTO;