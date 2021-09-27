# Google Drive Folder copy 
Google made it nearly impossible to copy a folder structure from mydrive to a shared drive. Problem solved with Google App Script and Google Drive API. 

Getting started with Google App Script https://developers.google.com/apps-script
1. https://script.google.com/
2. New Project
3. Delete the sample code and paste in the code from this project
4. Edit the source folder ID and the destination folder ID to match your folders (One gotcha - this code is setup to copy to target Folder not the root of 
5. Click Services and add the Drive API
6. Click Save
7. Click Run
8. You will get a Authorization required prompt, click Review Permissions
9. It asks to verify your google acct 
10. Next comes the "Google hasn’t verified this app" warning. To get past this click "Advanced" then "Go to Untitled project (unsafe)"
11. Click "Allow" on the permission dialog

