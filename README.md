# Testing git branches
## A repo used to test the features that Git offers!

## How we testes the git branches feature.
A template was made on the main branch that each feature would beanch out from.
```
git checkout feature-(header/body/footer)
```
When all features was completed, they were merged with the main branch.
```
git checkout main
git merge feature-(header/body/footer)
```
To deploy the project, we merged the prod branch with the main branch.
```
git checkout prod
git merge main
```
Netlify is conected via a pipeline to the prod branch, for automatic updates.

Netlify application: https://friendly-elion-95767d.netlify.app/
