call ncc build src/index.js --license licenses.txt
git add *
git commit -m "update %*"
git tag -a -m "release: " %*
git push --follow-tags


