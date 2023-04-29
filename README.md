# Dotfiles

This is a Dotfiles repository. Checkout [http://dotfiles.github.io/](http://dotfiles.github.io/) for more information. There are [many dotfiles utilities](http://dotfiles.github.io/utilities/) available. Inspired by the Blogpost [Automating the Setup of a New Mac With All Your Apps, Preference, and Development Tools](https://www.moncefbelyamani.com/automating-the-setup-of-a-new-mac-with-all-your-apps-preferences-and-development-tools/) by Moncef Belyamani, I've chosen [Chezmoi](https://www.chezmoi.io/).

# Installation

From a new machine, execute the ````install.sh```` script from my dotfiles repository.

````bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/krisvandebroek/dotfiles/main/install.sh)"
````

This script requires `curl` which should be installed by default on your Mac. The script will install `homebrew` and uses homebrew to install `git` and `chezmoi`. Finally it initializes Chezmoiz using the dotfiles repository `https://github.com/krisvandebroek/dotfiles`.
