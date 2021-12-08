# Web Atelier Project - Dream Team

## Group Members

Daniela Gjorjieva

Francesco Casarella

Alessandro Cravioglio

Andrea Prato

Samuel Corecco

## Basic Web App Features

Work in Progress


# Github (a pseudo-guide by alecrav)

## Branches (terminal commands)

### Git branch -> list, create or delete branch

#### Usage

**git branch --list || git branch** || *git branch** -> list the local branches

**git branch <branch>** -> create new branch with name <branch> (the new branch is *not* checked out, see below)

**git branch -d <branch>** -> delete the branch with name <branch>, but only if it has not unmerged changes

**git branch -D <branch>** -> delete the branch with name <branch>, even if it has unmerged changes

**git branch -m <branch>** -> rename the current branch to <branch>

**git branch -a** -> list all remote branches


### Git

**git status** -> to see the branch you are on now, it also let you see which changes have been staged and 
which files aren't tracked by git


**git checkout** -> to navigate between branches