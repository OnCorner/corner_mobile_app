// @flow
import {
  ListView,
} from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as actionTypes from '../../actionTypes'
import Api from '../../modules/Api'

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

export const uploadGroup = (group) => {
  return {
    type: actionTypes.UPLOAD_GROUP,
    group: group,
  }
}

export const emptyGroupInputs = () => {
  return {
    type: actionTypes.EMPTY_GROUP_INPUTS,
  }
}
