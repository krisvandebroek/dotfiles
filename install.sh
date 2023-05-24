#!/bin/sh

# Inspired by https://github.com/twpayne/dotfiles/blob/master/install.sh

set -e # -e: exit on error

if [ ! "$(command -v curl)" ]; then 
  echo "The install script requires curl, which is not installed."
  echo "Execute the following steps manually:"
  echo "1. Install Homebrew"
  echo "2. Install Git:"
  echo "       $ brew install git"
  echo "3. Install Chezmoi: 'brew install chezmoi'"
  echo "       $ brew install chezmoi"
  echo "4. Let Chezmoi checkout the dofiles repo and apply it to your machine:"
  echo "       $ exec \"\$chezmoi\" init --apply \"--source=\$script_dir\""
  exit 1;
fi

if [ ! "$(command -v brew)" ]; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

if [ ! "$(command -v git)" ]; then
  brew install git
fi

if [ ! "$(command -v chezmoi)" ]; then
  brew install chezmoi
fi

# exec: replace current process with chezmoi init
exec chezmoi init --apply krisvandebroek
