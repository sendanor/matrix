// Copyright (c) 2022. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { hasNoOtherKeys, isRegularObject, isString } from "../../../../../core/modules/lodash";
import { RepositoryItem } from "../../../../../core/simpleRepository/types/RepositoryItem";
import { Device, isDevice } from "./Device";
import { parseJson } from "../../../../../core/Json";
import { createStoredDeviceRepositoryItem, StoredDeviceRepositoryItem } from "./StoredDeviceRepositoryItem";

export interface DeviceRepositoryItem extends RepositoryItem<Device> {
    readonly id: string;
    readonly userId: string;
    readonly deviceId: string;
    readonly target: Device;
}

export function createDeviceRepositoryItem (
    id: string,
    target: Device
): DeviceRepositoryItem {
    return {
        id,
        userId: target?.userId,
        deviceId: target?.deviceId,
        target
    };
}

export function isDeviceRepositoryItem (value: any): value is DeviceRepositoryItem {
    return (
        isRegularObject(value)
        && hasNoOtherKeys(value, [
            'id',
            'userId',
            'deviceId',
            'target'
        ])
        && isString(value?.id)
        && isString(value?.userId)
        && isString(value?.deviceId)
        && isDevice(value?.target)
    );
}

export function stringifyDeviceRepositoryItem (value: DeviceRepositoryItem): string {
    return `HgHsDeviceRepositoryItem(${value})`;
}

export function parseDeviceRepositoryItem (id: string, unparsedData: any) : DeviceRepositoryItem | undefined {
    const data = parseJson(unparsedData);
    if ( !isDevice(data) ) return undefined;
    return createDeviceRepositoryItem(
        id,
        data
    );
}

export function toStoredDeviceRepositoryItem (
    item: DeviceRepositoryItem
) : StoredDeviceRepositoryItem | undefined {
    return createStoredDeviceRepositoryItem(
        item.id,
        item?.target?.userId,
        item?.target?.deviceId,
        JSON.stringify(item.target)
    );
}
