Startpage
============================================================================
A simple startpage. See a live version [here](https://fungiofdeath.github.io/startpage-dm01/).

![screenshot](screenshot.png)

Font used is [IBM Plex Sans Condensed](https://fonts.google.com/featured/Plex).

Inspiration and other startpages found [here](https://startpages.github.io/) or by searching [/wg/](https://boards.4chan.org/wg/catalog#s=startpage) for startpage threads. 

## Installation
Clone this repo via
```
git clone https://github.com/FungiOfDeath/startpage-dm01.git
```

### Setting This as your New Tab Page

First set up a webserver hosting the page. Two easy solutions I've used are python and docker (albeit docker is a bit
overkill, to say the least).

To start a webserver with python on port `<port-number>` whose root is in `<startpage-root>`, use the following script:
```bash
python3 -m http.server <port-number> -d <startpage-root> 
```

To start a webserver with docker, install the [nginx](https://hub.docker.com/_/nginx) image then run the following script:
```bash
sudo docker run -d -p <port-number>:80 --restart always -v <startpage-root>:/usr/share/nginx/html:ro nginx
```

This latter method will automatically start at boot, so you do not need to set that up.

#### Chrome
No clue ¯\\\_(ツ)\_/¯.

#### Firefox

Use the [New Tab Override](https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?src=search) plugin to set your
new tab page to `localhost:<port-number>`.

## Editing
To change which sites are shown, edit [sites.json](sites.json).

**Note**: All sites must have a `"subsites": [ ... ]` tag. If any site is missing this tag then it (and everything after it) will not be loaded. Subsites must also have that tag; however, the list must be empty or else things will break (namely, clicking on the `»` won't work correctly for subsites).

## License
This project is licensed under the [Unlicense](LICENSE).
