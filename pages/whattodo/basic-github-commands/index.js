import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GitCom from "../../components/GitCom";
import GitDiv from "../../components/GitDiv";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className=" dark:bg-gray-700 dark:text-gray-50">
        <h1 className="text-4xl text-center p-5 mt-3 ">
          Git commands one should know!
        </h1>
        <hr className="mx-auto w-2/5 pb-7 " />
      </div>
      <GitCom heading="Viewing branches" />
      <GitDiv command="git branch --list" />
      <GitCom heading="Deleting a branch" />
      <GitDiv command="git branch -d branch_name" />
      <GitCom
        heading="Git status"
        para="• Git status gives information about the branch & files"
      />
      <GitDiv command="git status" />
      <GitCom heading="To check push/fetch origin URL" />
      <GitDiv command="git remote -v" />
      <GitCom
        heading="Git pull"
        para="• To gets the updates from remote repository and immediately applies the latest changes in your local."
      />
      <GitDiv command="git pull origin main/master" />
      <GitCom
        heading="To undo the changes"
        para="• We need to specify the hash code ( eg. 3321844 ) next to our commit that we would like to undo"
      />
      <GitDiv command="git revert hash_code" />
      <GitCom heading="To rename a git file" />
      <GitDiv command="git mv old_file_name  new_file_name" />
      <GitCom heading="Temporarily stores your modified files" />
      <GitDiv command="git stash" />
      <GitCom heading="View all of your stashes" />
      <GitDiv command="git stash list" />
      <GitCom heading="Apply a stash to a branch" />
      <GitDiv command="git stash apply" />
      <GitCom
        heading="To see all the previous commits"
        para="• Most recent will appear first"
      />
      <GitDiv command="git log" />
      <GitCom heading="To see commits of other group authors." />
      <GitDiv command="git shortlog" />
      <GitCom heading="To see details about a specific commit" />
      <GitDiv command="git show your_commit_hash_code" />
      <GitCom heading="To delete tracked file from the current directory" />
      <GitDiv command="git rm file_name" />
      <GitCom heading="To merge a specific branch feature to your directory" />
      <GitDiv command="git merge branch_name" />
      <GitCom heading="To integrates two branches into a single branch" />
      <GitDiv command="git rebase base_name" />
      <GitCom
        heading="To find a good/bad commit"
        para="• Initiate git bisect"
      />
      <GitDiv command="git bisect start" />
      <GitCom heading="To know about a good commit" />
      <GitDiv command="git bisect good a123" />
      <GitCom heading="To know about a bad commit" />
      <GitDiv command="git bisect bad z123" />
      <GitCom heading="To apply a commit from any branch and apply it to any other branch" />
      <GitDiv command="git cherry-pick commmit_hash_code" />
      <GitCom
        heading="To compare two Git files"
        para="• To compare working directory with the local repo"
      />
      <GitDiv command="git diff HEAD file_name" />
      <GitCom heading="To compare two branches" />
      <GitDiv command="git diff source_branch target_branch" />
      <GitCom
        heading="There are many commands in Git"
        para="• To compare working directory with the local repo"
      />
      <GitDiv command="git help" />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default index;
