#!/bin/bash

# Taken from Nat Tuck notes 12 on lens project
export NODEBIN='pwd'/assets/node_modules/.bin
export PATH="$PATH:$NODEBIN"

source ./prod-env.sh

# Build Elixir Code
mix deps.get
mix compile

# Build Assets
mkdir -p priv/static
(cd assets && npm install)
# Normal command, but was producing error "webpack command not found"
#(cd assets && webpack --mode production)
(cd assets && ./node_modules/.bin/webpack --mode production)
mix phx.digest

# Migrate DB
mix ecto.migrate

# Generate the release
mix release
