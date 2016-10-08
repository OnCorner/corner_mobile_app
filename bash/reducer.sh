#!/usr/local/bin/bash
reducer=$1
reducerFileName="${reducer,}Reducer"
folderPath="js/reducers/"

echo "Creating Module with name: $reducer"
echo "..."

if [ -f "$folderPath/$reducerFileName.js" ]; then
  echo "!!! The path $folderPath already exists!"
  echo "!!! You must delete this folder to run the script."
  exit
fi

echo "$folderPath/"

cat >"$folderPath/$reducerFileName.js" <<EOF
// @flow weak
import * as actionTypes from '../actionTypes'

const DEFAULT_STATE = {

}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.ACTION_TYPE:
      return {
        ...state,
      }

    default:
      return state
  }
}

export const get$reducer = (state) => ({

})
EOF

echo "└──$reducer.js"

echo "..."
echo "Success"
