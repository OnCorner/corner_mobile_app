// @flow
import {
  ListView,
} from 'react-native'
import Api from '../../modules/Api'
import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'

// Action creators
export const updateGroupName = (text) => {
  return {
    type: actionTypes.UPDATE_GROUP_NAME,
    name: text,
  }
}

export const updateGroupDetail = (text) => {
  return {
    type: actionTypes.UPDATE_GROUP_DETAIL,
    detail: text,
  }
}

export const updateGroupCategory = (text) => {
  return {
    type: actionTypes.UPDATE_GROUP_CATEGORY,
    category: text,
  }
}

export const updateGroupRelatedGroups = (text) => {
  return {
    type: actionTypes.UPDATE_GROUP_RELATED_GROUPS,
    relatedGroups: text,
  }
}

export const updateGroupPrivate = (value) => {
  return {
    type: actionTypes.UPDATE_GROUP_PRIVATE,
    private: value,
  }
}

export const updateGroupPrivateConditions = (text) => {
  return {
    type: actionTypes.UPDATE_GROUP_PRIVATE_CONDITIONS,
    privateConditions: text,
  }
}

export const updateGroupImg = (value) => {
  return {
    type: actionTypes.UPDATE_GROUP_IMG_ONE,
    imgOne: value,
  }
}

export const updateGroups = (groups) => {
  return {
    type: actionTypes.UPDATE_GROUPS,
    groups: groups,
  }
}

export const createGroup = (group, user) => {
  return dispatch => {
    return Api.server.create('group', group)
    .then(group => {
      console.log("group created", group)
      Actions.discover(direction='vertical')
      return dispatch(uploadGroup(group))
    })
    .catch(err => {
      console.log("err", err)
    })
  }
}

//FOR TESTING PURPOSES
export const uploadGroup = (group) => {
  return {
    type: actionTypes.UPLOAD_GROUP,
    group: group,
  }
}

//ADD COMPONENT WILL MOUNT THAT WILL FETCH ALL THE ARRAY OF GROUPS AT THE MOMENT, CREATE GROUP JUST ADDS IT TO THE ARRAY FOR TIME BEING

export const emptyGroupInputs = () => {
  return {
    type: actionTypes.EMPTY_GROUP_INPUTS,
  }
}
