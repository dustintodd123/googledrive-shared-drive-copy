# Google Drive Folder copy 
Google made it nearly impossible to copy a folder structure from Mydrive to a Shared drive folder. Google Drive lacks a Copy function, so that's a challenge regardless. But even trying to use the Move function there are restrictions around files owned by user outside a Google Workspace domain. Along with a restriction on changing the owners of folder and files between domains. Problem solved with Google App Script and Google Drive API. 

This script will recursively copy folders and file from any source to any destination folder. You need only find the Folder ID of the source and optionally the destination ID. I used this to transfer a large number of files and folders from a Folder structure owned by an individual Google account to a Google Shared Drive owned by a Google Workspace domain. This does require the use of Google App Script (GAS). The GAS platform is very usually friendly. So if you don't feel comfortable deploying code fear not. This is a very simple process. 

Getting started with Google App Script https://developers.google.com/apps-script
1. https://script.google.com/
2. Click New Project
3. Delete the template code and paste in the code from [google-sharedrivecopy.gs](https://github.com/dustintodd123/googledrive-shared-drive-copy/blob/main/google-sharedrivecopy.gs) in this project
4. Edit the sourceFolderId to match the folder ID of the source of the copy (examine the folder URL, the ID is obvious) ` var sourceFolderId = "XXXX"; `
5. If you want the folder structured copied to the root of Mydrive leave the targetParentFolderId variable blank, otherwise provide the ID of the target folder `var targetParentFolderId = "";`
6. Click Services and add the Drive API
7. Click Save
8. Click Run
9. You will get a Authorization required prompt, click Review Permissions
10. It asks to verify your google acct 
11. Next comes the "Google hasn’t verified this app" warning. To get past this click "Advanced" then "Go to Untitled project (unsafe)"
12. Click "Allow" on the permission dialog

Code adapted from this article https://www.labnol.org/code/19979-copy-folders-drive . Thank you @labnol 
