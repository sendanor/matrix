// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../../../../../core/modules/lodash";
import { RepositoryItem } from "../../../../../core/simpleRepository/types/RepositoryItem";
import { Event, isEvent } from "./Event";
import { parseJson } from "../../../../../core/Json";
import { createStoredEventRepositoryItem, StoredEventRepositoryItem } from "./StoredEventRepositoryItem";

export interface EventRepositoryItem extends RepositoryItem<Event> {
    readonly id: string;
    readonly target: Event;
}

export function createEventRepositoryItem (
    id: string,
    target: Event
): EventRepositoryItem {
    return {
        id,
        target
    };
}

export function isEventRepositoryItem (value: any): value is EventRepositoryItem {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'id',
            'target'
        ])
        && isString(value?.id)
        && isEvent(value?.target)
    );
}

export function stringifyEventRepositoryItem (value: EventRepositoryItem): string {
    return `HgHsEventRepositoryItem(${value})`;
}

export function parseEventRepositoryItem (id: string, unparsedData: any) : EventRepositoryItem | undefined {
    const data = parseJson(unparsedData);
    if ( !isEvent(data) ) return undefined;
    return createEventRepositoryItem(
        id,
        data
    );
}

export function toStoredEventRepositoryItem (
    item: EventRepositoryItem
) : StoredEventRepositoryItem | undefined {
    return createStoredEventRepositoryItem(
        item.id,
        JSON.stringify(item.target)
    );
}