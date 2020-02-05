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

# https://github.com/lerna/lerna/tree/master/commands/add
# Install @gitbox/utils to @gitbox/comment
# --dev: devDependencies; --peer: peerDependencies
lerna add @gitbox/utils --scope=@gitbox/comment [dev|peer]
```
