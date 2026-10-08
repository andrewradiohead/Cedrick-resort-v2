# Cedrick's Resort v2

Multi-page tourism website (HTML, CSS, JavaScript) for the Applied Business Tools and Technologies in Tourism final exam. Fictional business.

## Structure
```
index.html  about.html  rooms.html  packages.html  gallery.html
getting-here.html  travel-guide.html  booking.html  contact.html
css/style.css   js/main.js   images/*.svg
```

## Run in Visual Studio Code
1. File > Open Folder > select `Cedrick-resort-v2`.
2. Install the **Live Server** extension (VS Code suggests it).
3. Right-click `index.html` > **Open with Live Server**.

## Publish to GitHub (one repository, GitHub Pages)
With the GitHub CLI (`gh auth login` first):
```bash
git init && git add . && git commit -m "Cedrick's Resort v2"
git branch -M main
gh repo create Cedrick-resort-v2 --public --source=. --push
```
Without the CLI: create an empty public repo named `Cedrick-resort-v2` on github.com, then
```bash
git remote add origin https://github.com/YOUR-USERNAME/Cedrick-resort-v2.git
git push -u origin main
```
Then Settings > Pages > Deploy from a branch > `main` / root. The site is live at
`https://YOUR-USERNAME.github.io/Cedrick-resort-v2/` after about a minute. Make the QR code from that link.

## Photos
`images/` has original illustrations made with Claude (AI). To use real photos, save them in `images/` with the same file names but `.jpg` and change `.svg` to `.jpg` in the HTML/CSS (search and replace), and credit the photographer on the Gallery page.
