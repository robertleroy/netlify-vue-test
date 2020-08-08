## Github Pages

- 1 Keep working branch clean 

To make sure that the branch we are working from stays clean of any build files we are gonna add a .gitignore file to the root.
```
# .gitignore
dist/
```

- 2 Add a second branch 

We are not going to branch off master like how we would do it if we were to modify our code with the intention to merge it back to the main branch. Instead we are gonna create a squeaky clean new branch that will only ever hold the dist files. After all we will not ever need to merge these two branches together.

We do this by creating a new git repository inside the dist folder:
```
cd dist/
git init
git add .
git commit -m 'Deploying my awesome vue app'
```

- 3 Deploying

We are gonna force push our new git repository to a branch on GitHub. This might go against git best practices but since we won't ever checkout this branch we don't have to worry about that.
```
git push -f git@github.com:<username>/<repo>.git <branch>
```

Make sure you double or tripple check your destination branch! You don't want to accidentally overwrite your working branch. Using the branch gh-pages will most likely be a good idea.


- 5 Automating everything

If you don't mind doing this whole process (Step 2 and 3) every time you want to deploy you can stop now. If you're as lazy as me, here is the script I use to deploy with one command:

```
# deploy.sh

#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Linting..
npm run lint
echo Building. this may take a minute...
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'example.com' > CNAME

echo Deploying..
git init
git add -A
git commit -m 'deploy'

# deploy
git push -f git@github.com:<username>/<repo>.git <branch>

cd -
```
If your on windows look into the Windows Subsystem for Linus (WSL) it will be worth it.

