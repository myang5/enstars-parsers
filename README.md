### Deployment

- Create a branch called `gh-pages` and push to the remote repo
- Go to the repo's Settings > Pages and insure that GitHub Pages recognizes the branch
- Whenever commits are pushed to the remote's `main` branch, `.github/workflows/deploy.yml` will take care of deploying the `dist` folder to GitHub Pages

### TODO

- oissu formatter
- engirls wiki formatter
  - [x] Details tab
  - [x] Story nav tab
    - main story
      https://ensemble-girls.fandom.com/wiki/Template:BeginPrevNext2
      https://ensemble-girls.fandom.com/wiki/Template:EndPrevNextMS
    - regular
      https://ensemble-girls.fandom.com/wiki/Template:BeginPrevNext
      https://ensemble-girls.fandom.com/wiki/Template:EndPrevNext
    - used on both (it was the easy way of making our navigation look nice at the time)
      https://ensemble-girls.fandom.com/wiki/Template:PrevNext
  - [x] Add templates for main story nav
  - [ ] Redesign Story nav tab so it's not a bunch of inputs lol
  - [x] Renders tab
  - [x] Automatically add categories
  - [x] Ensure basic text conversion still works
  - [x] Convert HTML formatting Markdown formatting
  - [ ] Handle styling on name labels
  - [ ] TL notes tab
