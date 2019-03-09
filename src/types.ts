export interface PartialLookup<T> {
	[key: string]: T | undefined;
	[key: number]: T | undefined;
}