// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString, isStringOrUndefined } from "../../../../../core/modules/lodash";

export interface User {
    readonly id        : string;
    readonly username  : string;
    readonly password  : string;
    readonly email    ?: string;
}

export function createUser (
    id        : string,
    username  : string,
    password  : string,
    email    ?: string
): User {
    return {
        id,
        username,
        password,
        email
    };
}

export function isUser (value: any): value is User {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'id',
            'username',
            'password',
            'email'
        ])
        && isString(value?.id)
        && isString(value?.username)
        && isString(value?.password)
        && isStringOrUndefined(value?.email)
    );
}

export function stringifyUser (value: User): string {
    return `User(${value})`;
}

export function parseUser (value: any): User | undefined {
    if ( isUser(value) ) return value;
    return undefined;
}
