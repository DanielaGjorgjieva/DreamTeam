# Github (a pseudo-guide most taken from internet by alecrav)

## Branches (terminal commands)

### Git push -> upload local content to remote repository

#### Usage

**git push <remote> <branch>** -> push specified branch to remote branch

**git push --all** -> push all branches

#### What to do normally

To push on the "local branch", **git push origin <local_branch>** should work





### Git branch -> list, create or delete branch

#### Usage

**git branch --list || git branch** || *git branch** -> list the local branches

**git branch <branch>** -> create new branch with name <branch> (the new branch is *not* checked out, see below)

**git branch <branch> <existing_branch>** -> create new branch with name <branch> off the <existing_branch>

**git branch -d <branch>** -> delete the branch with name <branch>, but only if it has not unmerged changes

**git branch -D <branch>** -> delete the branch with name <branch>, even if it has unmerged changes

**git branch -m <branch>** -> rename the current branch to <branch>

**git branch -a** -> list all remote branches


### Git checkout -> navigate between branches

#### Usage

**git checkout <existing_branch>** -> switch to the *already existing* branch named <existing_branch>

**git checkout -b <new_branch>** -> creates a new branch and switch to it

**git checkout -b <new_branch> <existing_branch>** -> creates a new branch off the <existing_branch>; default **git checkout -b** creates
new branch of the current HEAD., and switch to it.

**What's head?** -> HEAD is a pointer to the currently checked out repository. Head references the latest commit done at that particular repo

**git checkout <existing_branch>** -> switches to existing branch, it can be used both for local and remote branches

### Git status

#### Usage

**git status** -> to see the branch you are on now, it also let you see which changes have been staged and 
which files aren't tracked by git


### Git merge

#### Usage

**git merge** -> merge branches, they could be fast-forward merge or three way merged


**fast forward merge** -> git only needs to combine the histories of two branches that have a "linear path" between them

_____Main_____additional_features___

##### Example snippet

###### Start a new feature

git checkout -b new-feature main

###### Edit some files

git add <file>

git commit -m "Start a feature"

###### Edit some files

git add <file>

git commit -m "Finish a feature"

###### Merge in the new-feature branch

git checkout main

git merge new-feature

git branch -d new-feature


**three-way merge** -> a common scenario when multiple people are working on the same project

      _____additional_features_____

_____/_____________________________\_____Main____

##### Example snippet

###### Start a new feature

git checkout -b new-feature main

###### Edit some files

git add <file>

git commit -m "Start a feature"

###### Edit some files

git add <file>

git commit -m "Finish a feature"

###### Develop the main branch

git checkout main

###### Edit some files

git add <file>

git commit -m "Make some super-stable changes to main"

###### Merge in the new-feature branch

git merge new-feature

git branch -d new-feature


### For complete terminal-cheat-sheet:

[Complete Git terminal cheat-sheet] (https://gist.github.com/cferdinandi/ef665330286fd5d7127d)


## Our projext structure

_____main_____

              \_____dev_____
                            
                            \_____local-branches[...]______

1) work on main is committed and pushed **only** when a feature is finished and works correctly, must be approved

2) work on dev is committed and pushed when a feature has been improved in a significant way

3) local-branches are the working branches for everyone's single work