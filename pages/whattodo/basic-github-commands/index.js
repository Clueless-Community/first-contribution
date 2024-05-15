import React from "react";
import Head from 'next/head'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GitCom from "../../components/GitCom";
import GitDiv from "../../components/GitDiv";
import Topfab from "../../components/Topfab";
import PageContentWrapper from '../../components/PageContentWrapper'

const index = () => {
  return (
    <>
      <Head>
        <title>GitHub commands</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <PageContentWrapper>
        <div className=' dark:bg-gray-700 dark:text-gray-50'>
          <h1 className='text-4xl text-center p-5'>
            Git commands one should know!
          </h1>
          <hr className='mx-auto w-2/5 pb-7 ' />
        </div>
        <GitCom heading='Viewing branches' />
        <GitDiv command='git branch --list' />
        <GitCom heading='Creating a branch' />
        <GitDiv command='git branch [branch name]' />
        <GitCom heading='Switching from one branch to another' />
        <GitDiv command='git checkout [branch name]  ' />
        <GitCom heading='Deleting a branch' />
        <GitDiv command='git branch -d branch_name' />
        <GitCom
          heading='Git config'
          para='• It sets the developer name and email address with pushed commits on github.'
        />
        <GitDiv command='git config --global user.name “[name]”  ' />
        <GitDiv command='git config --global user.email “[email address]”    ' />
        <GitCom
          heading='Git status'
          para='• Git status gives information about the branch & files'
        />
        <GitDiv command='git status' />
        <GitCom heading='To check push/fetch origin URL' />
        <GitDiv command='git remote -v' />
        <GitCom heading='git init'
        para='• Git init helps to start a new repository'
        />
        <GitDiv command='git init [repository name]' />
        <GitCom
          heading='Git pull'
          para='• To gets the updates from remote repository and immediately applies the latest changes in your local.'
        />
        <GitDiv command='git pull origin main/master' />
        <GitCom heading='Git clone'
        para='• Git clone helps us to download repository via URL from github.'
        />
        <GitDiv command='git clone [url]' />

        <GitCom heading='Git add'
        para='• Git add helps us to adds a file with filename or totalfile to the staging area.'
        />
        <GitDiv command='git add [filename]' />
        <GitDiv command='git add .' />

        <GitCom
          heading='To undo the changes'
          para='• We need to specify the hash code ( eg. 3321844 ) next to our commit that we would like to undo'
        />
        <GitDiv command='git revert hash_code' />

        <GitCom heading='To rename a git file' />
        <GitDiv command='git mv old_file_name  new_file_name' />

        <GitCom heading='Temporarily stores your modified files' />
        <GitDiv command='git stash' />
        <GitCom heading='View all of your stashes' />
        <GitDiv command='git stash list' />
        <GitCom heading='Apply a stash to a branch' />
        <GitDiv command='git stash apply' />
        <GitCom
          heading='To see all the previous commits'
          para='• Most recent will appear first'
        />
        <GitDiv command='git log' />
        <GitCom heading='To see commits of other group authors.' />
        <GitDiv command='git shortlog' />

        <GitCom heading='To see details about a specific commit' />
        <GitDiv command='git show your_commit_hash_code' />

        <GitCom heading='To delete tracked file from the current directory' />
        <GitDiv command='git rm file_name' />
        <GitCom heading='To merge a specific branch feature to your directory' />
        <GitDiv command='git merge branch_name' />
        <GitCom heading='To integrates two branches into a single branch' />
        <GitDiv command='git rebase base_name' />

        <GitCom
          heading='To find a good/bad commit'
          para='• Initiate git bisect'
        />
        <GitDiv command='git bisect start' />
        <GitCom heading='To know about a good commit' />
        <GitDiv command='git bisect good a123' />
        <GitCom heading='To know about a bad commit' />
        <GitDiv command='git bisect bad z123' />

        <GitCom heading='To apply a commit from any branch and apply it to any other branch' />
        <GitDiv command='git cherry-pick commmit_hash_code' />
        <GitCom
          heading='To compare two Git files'
          para='• To compare working directory with the local repo'
        />

        <GitDiv command='git diff HEAD file_name' />
        <GitCom heading='To compare two branches' />
        <GitDiv command='git diff source_branch target_branch' />

        <GitCom heading='To  compact all commits in one commit' />
        <GitDiv command='$ git rebase -i HEAD~3' />
        <GitDiv command='pick 3123cb90
squash 8560f5fb
squash 70644096' />

        <GitCom
          heading='There are many commands in Git'
          para='• To compare working directory with the local repo'
        />

        <GitDiv command='git help' />
      </PageContentWrapper>
      <Footer />
      <Topfab />
    </>
  );
};


export default index
