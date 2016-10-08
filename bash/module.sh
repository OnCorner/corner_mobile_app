#!/usr/local/bin/bash
module=$1
folderPath="js/modules/"

echo "Creating Module with name: $module"
echo "..."

if [ -d "$folderPath/$module.js" ]; then
  echo "!!! The path $folderPath already exists!"
  echo "!!! You must delete this folder to run the script."
  exit
fi

echo "$folderPath/"

cat >"$folderPath/$module.js" <<EOF
module.exports = {
  myFunc() {
    return;
  },
};
EOF

echo "└──$module.js"

echo "..."
echo "Success"
