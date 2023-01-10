# First Contribution

<p>This project is for those who are new to open-source and looking for make their first contribution.<p>
<p>Follow the steps below :- </p>

_If you don't have GIT installed, [refer this tutorial](https://github.com/HITK-2025/first-contribution/blob/main/installation.md)_

---

# Git Setup Guide

## To initialise Git, write

```bash
git init
```

## 1. Configure your local Git

```bash
git config --global user.name "github username"
```

```bash
git config --global user.email "email address"
```

## 2. Go to the first-contribution repository and Fork it.

- A fork is a rough copy of a repository. Forking a repository allows you to freely test and debug with changes without affecting the original project. One of the excessive use of forking is to propose changes for bug fixing.

  <img src="guide image/fork2.png"
     alt="Fork"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

- Click on Code Button and copy the URL of your forked Repository

  <img src="guide image/code_git.png"
     alt="Click on Code"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

  <img src="guide image/code_copy.png"
     alt="Copy the URL"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

## 3. Switch to your Git bash window, and enter the following :

- Clone the Forked project on your local system

```bash
git clone https://github.com/HITK-2025/first-contribution.git
```

- Make the changes

```bash
cd first-contribution/data/
```

Open contributors.js in your favourite text editor and add a new object below the existing objects in the format given below.

```json
 {
        name : "Your Name",
        branch : "Your stream/branch",
        college : "College Name",
        year : 2025, //Year of Pass Out
        linkedin : "LinkedIn Profile URL",
        github : "GitHub Profile URL",
        gender : "Your Gender"
    },
```

Now open Contributors.md in a text editor and add your name and your github link below the exisiting one in given format

```bash
   - [Sumit Sharma](https://github.com/sumit-sharma-02)
```

## 4. Creating a Pull request

### Create a branch

- A branch is designed to encapsulate a group of changes. These changes might be thrown away, entirely rewritten or in the majority of cases they’ll be promoted into the main history of the codebase - via a merge.

- Creating a branch

```bash
git branch branch_name
```

- Checkout to the created branch

```bash
git checkout branch_name
```

- Now add the files using the git command

```bash
git add .
```

- Commit the changes to the local project

```bash
git commit -m "Added my data"
```

- Push the changes to your forked github repo

```bash
git push origin branch_name
```

## 5. Final Steps

- Open your forked git repository, you will get a message like as shown in the figure (if not then refresh the page).

### Click on "Contribute"

<img src="guide image/pull1.png"
     alt="Contribute"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### Now click on "Open pull request"

<img src="guide image/pull2.png"
     alt="Open Pull Request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### Click on "Create pull request"

<img src="guide image/pull3.png"
     alt="Create Pull Request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### Click on "Create pull request"

You may add a Comment to your Pull Request

<img src="guide image/pull4.png"
     alt="Comment your pull request"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

### You will get message similar to as shown below in the picture which means that you have sucessfully made a pull request !

<img src="guide image/pull5.png"
     alt="Confirmation message"
     style="float: ; margin-right: 10px; width: 890px; height: 460px" />

- Now, you can see your data into Contributors.md and contributors.js

# Want to Setup Project locally? Follow this ⬇️

[Refer to this](./SetUp.md)
