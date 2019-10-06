Initialize a new local repository in the project folder with:

### git init

Then, add all the files to the staging status with:

### git add .

Finally, commit all the files to save in the repository:

### git commit -m "Calculator"

Create a new remote repository in GitHub called Ironhack Web App. Copy the link to the remote repository and open the terminal to execute:

### git remote origin ###<link to the remote repository>

Now that we have linked the repositories, the final step is to update the remote repository with the files we have in the local repository. Execute:

### git push origin master

In your GitHub profile inside github.com, open your remote repository Calculator. Now, open the remote repository settings in the right panel.
Then, scroll down until you see the GitHub Pages section.

Select Custome site, create a new branch calculator-pages

### git checkout -b calculator-pages

change to that branch

### git branch

Since the brances are created based on the status of the current commit in the branch we were, in this case master, we already have the project ready in the branch calculator-page

Last step is to deploy the project, pushing everything to the right branch:


###  git push origin calculator-page

If we want to access to the online project we have, we must go to the next location:

https://usernameongithub.GitHub.io/calculator-page




