#!/usr/local/bin/bash
component=$1
componentAction="${component,}Action"
folderPath="js/components/$component"

echo "Creating Component with name: $component"
echo "..."

if [ -d "$folderPath" ]; then
  echo "!!! The path $folderPath already exists!"
  echo "!!! You must delete this folder to run the script."
  exit
fi

mkdir "$folderPath"
echo "$folderPath/"

cat >"$folderPath/$component.js" <<EOF
// @flow
import React, { Component } from 'react'
import {
  Text,
  View,
  Stylesheet,
  TouchableHighlight
} from 'react-native'

export default class $component extends Component {
  static propTypes = {
    dummy: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    var pr = this.props;
    var st = this.state;

    return (
      <View style={styles.container}>
        <Text>
          $component
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    padding: 15
  }
})
EOF

echo "├──$component.js"

cat >"$folderPath/actions.js" <<EOF
// @flow
// import { Actions } from 'react-native-router-flux'

// import * as actionTypes from '../../actionTypes'
// import { getLogin } from '../../reducers/rootReducer'

// Action creators
export const $componentAction = () => {
  console.log('$component')
}
EOF

echo "├──actions.js"

cat >"$folderPath/index.js" <<EOF
// @flow
import { connect } from 'react-redux'

import $component from './$component'
import * as actions from './actions' // mapDispatchToProps
import { getNav } from '../../reducers/rootReducer'

// Combining 1 or + actionCreators
// const mapDispatchToProps = {
//   ...actionsDuplicate,
//   ...actions,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)

const mapStateToProps = (state) => ({
  ...getNav(state),
})

export default connect(mapStateToProps, actions)($component)

EOF

echo "└──index.js"

echo "..."
echo "Success"
