// Type definitions for git-rev-sync 1.12.0
// Project: https://github.com/kurttheviking/git-rev-sync-js
// Definitions by: David Enke <https://github.com/davidenke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function short(filePath?: string, length?: number): string;

export function long(filePath?: string): string;

export function branch(filePath?: string): string;

export function count(): number;

export function date(): Date;

export function isDirty(): boolean;

export function isTagDirty(): boolean;

export function message(): string;

export function remoteUrl(): string;

export function tag(markDirty?: boolean): string;
