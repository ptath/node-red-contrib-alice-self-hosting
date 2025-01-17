import { Node } from 'node-red';
import NanoCache from 'nano-cache';
import { Express } from 'express';
export type NodeServiceType = Node & {
    cache: NanoCache;
    app: Express;
};
export type NodeDeviceType = Node & {
    config: any;
    cache: NanoCache;
    device: any;
    onState: (c: any) => void;
    findCapability: (type: string, instance: any) => any;
    setCapability: (c: any, type: string, instance: any) => void;
    removeCapability: (type: string, instance: any) => void;
    findProperty: (type: string, instance: any) => any;
    setProperty: (c: any, type: string, instance: any) => void;
    removeProperty: (type: string, instance: any) => void;
    updateState: (val: any, type: string, instance: any) => void;
    updateStateDevice: () => Promise<void>;
    updateInfoDevice: () => Promise<void>;
    on(event: 'onState', object: any): void;
};
