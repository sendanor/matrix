// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../../../../../core/modules/lodash";
import { RepositoryItem } from "../../../../../core/simpleRepository/types/RepositoryItem";
import { Room, isRoom } from "./Room";
import { parseJson } from "../../../../../core/Json";
import { createStoredRoomRepositoryItem, StoredRoomRepositoryItem } from "./StoredRoomRepositoryItem";

export interface RoomRepositoryItem extends RepositoryItem<Room> {
    readonly id: string;
    readonly target: Room;
}

export function createRoomRepositoryItem (
    id: string,
    target: Room
): RoomRepositoryItem {
    return {
        id,
        target
    };
}

export function isRoomRepositoryItem (value: any): value is RoomRepositoryItem {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'id',
            'target'
        ])
        && isString(value?.id)
        && isRoom(value?.target)
    );
}

export function stringifyRoomRepositoryItem (value: RoomRepositoryItem): string {
    return `HgHsRoomRepositoryItem(${value})`;
}

export function parseRoomRepositoryItem (id: string, unparsedData: any) : RoomRepositoryItem | undefined {
    const data = parseJson(unparsedData);
    if ( !isRoom(data) ) return undefined;
    return createRoomRepositoryItem(
        id,
        data
    );
}

export function toStoredRoomRepositoryItem (
    item: RoomRepositoryItem
) : StoredRoomRepositoryItem | undefined {
    return createStoredRoomRepositoryItem(
        item.id,
        JSON.stringify(item.target)
    );
}