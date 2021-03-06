# cs-615-project

Course project for the umb's cs-615

Instructions for basic interactions with this repo via git on command line.

<ul>
  <li>Install[git](https://git-scm.com)</li>
  <li>On the command line, navigate to the directory you'll be keeping this repo in.  I use <user>/repos/ for all of my repos</li>
  <li>Open the repo in a web browser, click on the "code" button, and copy the url in the https box</li>
  <li>On the command line, enter `git clone <url>`, where <url> is the link you copied in the previous step.  You may be prompted to login or setup an access token here to link your git installation to your github account</li>
  <li>A local copy of your repo will now be in your directory, be default you'll be on the `main` branch</li>
  <li>To update your local git with all the project updates, use `git fetch` from the command line inside the repo</li>
  <li>To check the status of your branch against the source (whether you're up to date, ahead, or behind), use `git status`</li>
  <li>To add all new files to git's tracking, use `git add -A`</li>
  <li>To commit all local changes to git's tracking (lock in a change to git's tracking system), use `git commit -a -m "message describing changes here"`</li>
  <li>To push a change so that the source repository's branch will now be up to date with all your local branch changes, use "git push"</li>
</ul>

These commands will be fine for now if we're just uploading files to github, but later on when we start coding we'll probably want to address branching. 
    
Basic branching commands:
    
<ul>
  <li>To create a new branch based on the `main` branch, from within the repo, enter the command `git checkout -b <branch_name> main`</li>
    <li>To check what branch you're on, use `git status`</li>
  <li>Make whatever changes you want to.  Make your changes, then do the usual add and commit process.  Since the remote repo doesn't have your branch yet, you'll have to create the upstream (repo) branch matching your local branch with the push command `git push --set-upstream origin <branch_name></li>
  <li>Now when you push, you won't be pushing directly to the `main` branch</li>
  <li>To combine your changes with the `main` branch, go to github and find your branch.  Then click on the "pull request" button.  This will open a request to merge your changes with `main`</li>
  <li>Ideally someone else should review your pull requests, that way there's another set of eyes looking for mistakes.  To share a pull request, copy the url for the request and post it in the discord so someone else can review it.</li>
  <li>Once someone else has reviewed it, go back to the pull request page and click the merge button.</li>
</ul>
