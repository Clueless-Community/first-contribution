# First Contribution
<p>This project is for those who are new to open-source and looking for make their first contribution.<p>
<p>Follow the steps below :- </p>

_If you don't have GIT installed, [refer this tutorial](https://github.com/HITK-2025/first-contribution/blob/main/installation.md)_


***

# Git Setup Guide

## 1. Configure your local Git
```bash
git config --global user.name "github_username"
```

```bash
git config --global user.email "email_address"
```

## 2.  Go to the repository you want to contribute and Fork it.
* A fork is a rough copy of a repository. Forking a repository allows you to freely test and debug with changes without affecting the original project. One of the excessive use of forking is to propose changes for bug fixing.

  <img src="image/fork2.png"
     alt="Fork"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

* Click on Code Button and copy the URL of your forked Repository

  <img src="image/code_git.png"
     alt="Click on Code"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

  <img src="image/code_copy.png"
     alt="Copy the URL"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

## 3. Switch to your GitBash window, and enter the following :

* Clone the Forked project on your local system 

```bash
git clone repository_url
```

* Add origin URL
```bash
git remote add origin reo_url
```

* Make the change in the project you want !

## 4. Creating a Pull request
### Create a branch

* A branch is designed to encapsulate a group of changes. These changes might be thrown away, entirely rewritten or in the majority of cases they’ll be promoted into the main history of the codebase - via a merge.


* Creating a branch

```bash
git branch branch_name
```

* Checkout to the created branch

```bash
git checkout branch_name
```


* Now add the files using the git command

```bash
git add .
```
* Commit the changes to the local project

```bash
git commit -m "Changes_you_made"
```

* Make a pull request using the command
```bash
git push origin branch_name
```

## 5. Final Steps
* Open your forked git repository, you will get a message like as shown in the figure (if not then refresh the page).
###  Click on "Contribute"

  <img src="image/pull1.png"
     alt="Contribute"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

###  Now click on "Open pull request"

  <img src="image/pull2.png"
     alt="Open Pull Request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

###  Click on "Create pull request"

  <img src="image/pull3.png"
     alt="Create Pull Request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

###  Click on "Create pull request"
 You may add a Comment to your Pull Request

  <img src="image/pull4.png"
     alt="Comment your pull request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### You will get  message similar to as shown below in the picture which means that you have sucessfully made a pull request !

  <img src="image/pull5.png"
     alt="Confirmation message"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### You may Close the pull request you made (for any possible reason).

  <img src="image/pull6.png"
     alt="Close pull request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />