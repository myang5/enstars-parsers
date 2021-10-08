### Deployment

- Create a branch called `gh-pages` and push to the remote repo
- Go to the repo's Settings > Pages and insure that GitHub Pages recognizes the branch
- Whenever commits are pushed to the remote's `main` branch, `.github/workflows/deploy.yml` will take care of deploying the `dist` folder to GitHub Pages

### TODO

- [ ] mashiro formatter
  - [x] Add bubble for images
  - [x] Handle mid-dialoge images and notes (need to close bubbles)
  - [x] Convert italics and bold formatting in dialogue
    - Bubbles use Markdown
    - Italicizing like `*this*` is fine but mid word italics should be handled like `th<em>is</em>` and spaces between italic markers should be removed
    - Same for Markdown bold with `**this**`
  - [ ] Get CKEditor to not erase custom HTML tags
  - [ ] Figure out why CKEditor component causes memory leaks
  - [ ] Add How To page
- [ ] story header formatter
- [ ] jay formatter
  - [ ] handle removing jp lines in between eng lines
    - =REGEXMATCH(B1,"[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[ａ-ｚＡ-Ｚ０-９]+|[々〆〤]+|[、-〻]+|[！-～]")
