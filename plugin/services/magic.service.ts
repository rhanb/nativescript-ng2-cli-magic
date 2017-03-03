declare var NSObject, NSString, android, java;
import * as fs from 'file-system';
const documents = fs.knownFolders.documents();

const pathParser = function (filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
    filePath = filePath.replace("./", "./app/");
    filePath = fixExtension(filePath, platformSpecific, fileExtension);
    let fileNameTab: string[] = filePath.split('/'),
        fileName: string = fileNameTab[fileNameTab.length - 1],
        rootFolder: string = "app/app",
        completeFilePath: string = fs.path.join(documents.path, rootFolder, "/", fileName),
        fileExistsInCurrentFolder: boolean = fs.File.exists(completeFilePath);
    if (!fileExistsInCurrentFolder) {
        filePath = findFolder(rootFolder, filePath, fileName);
    }
    return filePath;
};

const findFolder = function (rootFolderName: string, filePath: string, fileName: string): string {
    let entities: any = documents.getFolder(rootFolderName).getEntitiesSync(),
        entity: any,
        currentEntityPath: string,
        i: number = 0,
        fileFound: boolean = false;
    while (i < entities.length && !fileFound) {
        entity = entities[i];
        currentEntityPath = [documents.path, "/", rootFolderName, "/", entity.name].join("");
        if (fs.Folder.exists(currentEntityPath)) {
            if (fs.File.exists([currentEntityPath, "/", fileName].join(""))) {
                let tempPath: any = rootFolderName.split("app/app");
                tempPath = tempPath[tempPath.length - 1];
                filePath = ["./app", tempPath, "/", entity.name, "/", fileName].join("");
                fileFound = true;
            } else {
                i++;
            }
        } else {
            i++;
        }
    }
    if (!fileFound) {
        let newRootFolderName: string = [rootFolderName, "/", entity.name].join("");
        filePath = MagicService.findFolder(newRootFolderName, filePath, fileName);
    }
    return filePath;
};

const fixExtension = function (filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
    let parts: string[] = filePath.split('.');
    if (!fileExtension) {
        fileExtension = parts[parts.length - 1];
    }
    parts.splice(-1);
    let platform: any = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
    return [parts.join("."), '.', platform, '.', fileExtension].join("");
};

export class MagicService {

    public static TEMPLATE_URL(filePath: string, platformSpecific?: boolean): string {
        let newTemplateUrl: string = filePath;
        if (MagicService.IS_NATIVESCRIPT()) {
            newTemplateUrl = pathParser(filePath, platformSpecific);
        }
        return newTemplateUrl;
    }

    public static STYLE_URLS(filePaths: string[], platformSpecific?: boolean): string[] {
        let newStyleUrls: string[] = filePaths;
        if (MagicService.IS_NATIVESCRIPT()) {
            let currentStyleUrl: string;
            newStyleUrls = filePaths.map((currentStyleUrl) => {
                return pathParser(currentStyleUrl, platformSpecific, 'css');
            });
        }
        return newStyleUrls;
    }

    public static IS_NATIVESCRIPT() {
        return (MagicService.IS_IOS() || MagicService.IS_ANDROID());
    }

    public static IS_IOS() {
        return (typeof NSObject !== 'undefined' && typeof NSString !== 'undefined');
    }

    public static IS_ANDROID() {
        return (typeof android !== 'undefined' && typeof java !== 'undefined');
    }
}
