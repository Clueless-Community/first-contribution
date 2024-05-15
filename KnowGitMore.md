# Git commands one should know !

## Viewing branches
```bash
git branch --list
```

## Deleting a branch
```bash
git branch -d branch_name
```

## Git status
  * Git status gives information about the branch & files
```bash
git status
```

## To check push/fetch origin URL
```bash
git remote -v
```

## Git Pull
  * To gets the updates from remote repository and immediately applies the latest changes in your local.
```bash
git pull origin main/master
```

## To undo the changes
  * We need to specify the hash code ( eg. 3321844 ) next to our commit that we would like to undo
```bash
git revert hash_code
```
## To rename a git file
```bash
git mv old_file_name  new_file_name
```

## Temporarily stores your modified files

```bash
git stash
```

* View all of your stashes
```bash
git stash list
```

* Apply a stash to a branch
```bash
git stash apply
```

## To see all the previous commits
* Most recent will appear first
```bash
git log
```

## To see commits of other group authors.
```bash
git shortlog
```

## To see details about a specific commit
```bash
git show your_commit_hash_code
```

## To delete tracked file from the current directory
```bash
git rm file_name
```

## To merge a specific branch feature to your directory
```bash
git merge branch_name
```

## To integrates two branches into a single branch.
```bash
git rebase base_name
```

## To find a good/bad commit
* Initiate git bisect
```bash
git bisect start
```

* To know about a good commit
```bash
git bisect good a123
```

* To know about a bad commit
```bash
git bisect bad z123
```

## To apply a commit from any branch and apply it to any other branch
```bash
git cherry-pick commmit_hash_code
```

## To compare two Git files
* To compare working directory with the local repo
```bash
git diff HEAD file_name
```

* To compare two branches
```bash
git diff source_branch target_branch
```

# There are many commands in Git
* Use the following command in the terminal to check other Git commands
```bash
git help
```