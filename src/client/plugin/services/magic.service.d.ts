export declare class MagicService {
    static TEMPLATE_URL(path: string, platformSpecific?: boolean): string;
    static STYLE_URLS(paths: string[], platformSpecific?: boolean): string[];
    static IS_NATIVESCRIPT(): boolean;
    static IS_IOS(): boolean;
    static IS_ANDROID(): boolean;
}
