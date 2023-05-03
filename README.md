# Dotfiles

This is a Dotfiles repository. Checkout [http://dotfiles.github.io/](http://dotfiles.github.io/) for more information. There are [many dotfiles utilities](http://dotfiles.github.io/utilities/) available. Inspired by the Blogpost [Automating the Setup of a New Mac With All Your Apps, Preference, and Development Tools](https://www.moncefbelyamani.com/automating-the-setup-of-a-new-mac-with-all-your-apps-preferences-and-development-tools/) by Moncef Belyamani, I've chosen [Chezmoi](https://www.chezmoi.io/).

# Installation

From a new machine, execute the ````install.sh```` script from my dotfiles repository.

````bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/krisvandebroek/dotfiles/main/install.sh)"
````

This script requires `curl` which should be installed by default on your Mac. The script will install `homebrew` and uses homebrew to install `git` and `chezmoi`. Finally it initializes Chezmoiz using the dotfiles repository `https://github.com/krisvandebroek/dotfiles`.

# Automation

Using Chezmoi, the following is automated: 

- Installation of almost all MacOS Apps and Command-line tools, using `homebrew` and `mas`. [Script](home/run_once_before_install-packages.darwin.sh.tmpl)
- Tweaking of MacOS according to my preferences. [Script](home/run_once_before_configure_macos.sh.tmpl)
- Configuration of ZSH, the default MacOS shell, with Oh-My-Zsh. I use the [Pure](https://github.com/sindresorhus/pure) prompt. I use [Hyper](https://hyper.is/) as replacement for the Terminal and iTerm2 app.
- In all other places, like in Vim and SublimeText, I use the [Dracula](https://draculatheme.com/) theme.
- Installation of my favourite command-line [**aliases**](home/dot_aliases) and [**functions**](home/dot_functions).
- I've configured SublimeText with the FileBrowser plugin which is activated by pressing `f1`.
- I've added 3 Automator workflows. They can be used to convert iPhone photos in HEIC format to JPG, MOV movies to MP4 and that can downscale images.

# Manual Actions

Open the following URLs in Chrome to add the Tampermonkey Scripts
- [trello-reduce-zoom.user.js](https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-reduce-zoom.user.js)
- [trello-markdown-cards.user.js](https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/trello-markdown-cards.user.js)
- [tmetric-shortcuts.user.js](https://github.com/krisvandebroek/dotfiles/raw/main/userscripts/tmetric-shortcuts.user.js)

[Reference](https://simply-how.com/enhance-and-fine-tune-any-web-page-the-complete-user-scripts-guide) for creating User Scripts.


