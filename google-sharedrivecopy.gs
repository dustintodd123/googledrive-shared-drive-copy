function startv2() {
  // Google App Script to the rescue
  // Code adapted from this artcile https://www.labnol.org/code/19979-copy-folders-drive
  // Thank you Amit Agarwal https://github.com/labnol
  // This script will copy all files and folders from the source Folder ID to a Destination Folder ID
  // The Source Folder name will be created in the destination folder
  // If you have been driven insane by Google Drives inability to copy a folder structure from MyDrive to a Shared drive BOOM!
  // 

  var sourceFolderId = "XXXX"; //Folder ID of the folder structure you want to copy
  var targetParentFolderId = "XXXX";  //Target parent folder ID where the source folder will be copied
  
  var sourceFolder = DriveApp.getFolderById(sourceFolderId); //Source Folder
  var targetParent = DriveApp.getFolderById(targetParentFolderId); //Parent Folder (target)
  var target = targetParent.createFolder(sourceFolder.getName()); //Create the source folder we are copying

  //Here we go
  copyFolder(sourceFolder, target);

}

function copyFolder(source, target) {

  var folders = source.getFolders();
  var files   = source.getFiles();

  while(files.hasNext()) {
    var file = files.next();
    file.makeCopy(file.getName(), target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }

}
