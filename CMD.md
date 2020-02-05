# Command

```bash
# watch package
PKG=<pkg_name> yarn lw

# build package
PKG=<pkg_name> yarn lb

# clean node_modules
yarn clean

# examples & examples build
yarn demo
yarn demo:build

# https://github.com/lerna/lerna/issues/2011
# https://github.com/lerna/lerna/tree/master/commands/add
# Install @gitbox/utils to @gitbox/comment
# --dev: devDependencies; --peer: peerDependencies
# step 1.
lerna add @gitbox/utils --scope=@gitbox/comment [dev|peer]
# step 2.
lerna link convert
# step 3.
lerna bootstrap
```
