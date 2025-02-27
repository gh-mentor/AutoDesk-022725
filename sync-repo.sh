# This bash script uses git to synchronize changes between the local and remote GitHub repository.

# steps:
# 1. stage all changes
# 2. commit changes with message 'Updated'
# 3. pull changes from remote repository
# 4. push changes to remote repository on branch 'main'.

# stage all changes
git add .

# commit changes
git commit -m "Updated"

# pull changes from remote repository
git pull origin main

# push changes to remote repository
git push origin main

# Echo synchronization complete message
echo "Synchronization complete"



