// @flow weak
import * as actionTypes from '../actionTypes'
import { ListView } from 'react-native'

const DEFAULT_STATE = {
  imgOne: require('../../public/assets/img/dummy/kawsGroup.jpg'),
  dataSource: [],
}

export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.UPDATE_GROUP_NAME:
      return {
        ...state,
        name: action.name
      }

    case actionTypes.UPDATE_GROUP_DETAIL:
      return {
        ...state,
        detail: action.detail
      }

    case actionTypes.UPDATE_GROUP_CATEGORY:
      return {
        ...state,
        category: action.category
      }

    case actionTypes.UPDATE_GROUP_RELATED_GROUPS:
      return {
        ...state,
        relatedGroups: action.relatedGroups
      }

    case actionTypes.UPDATE_GROUP_PRIVATE:
      return {
        ...state,
        private: action.private
      }

    case actionTypes.UPDATE_GROUP_PRIVATE_CONDITIONS:
      return {
        ...state,
        privateConditions: action.privateConditions
      }

    case actionTypes.UPDATE_GROUP_IMG_ONE:
      return {
        ...state,
        imgOne: action.imgOne
      }

    case actionTypes.UPLOAD_GROUP:
      console.log('THIS I SADDING RIGHT NOW', state.dataSource)
      return {
        ...state,
        dataSource: [action.group, ...state.dataSource]
      }

    case actionTypes.EMPTY_GROUP_INPUTS:
      return {
        ...state,
        name: '',
        detail: '',
        category: '',
        relatedGroups: '',
        private: null,
        privateConditions: '',
        imgOne: null,
      }

    default:
      return state
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export const getCreateGroup = (state) => ({
  groupName: state.name,
  groupDetail: state.detail,
  groupCategory: state.category,
  groupRelatedGroups: state.relatedGroups,
  groupPrivate: state.private,
  groupPrivateConditions: state.privateConditions,
  groupImgOne: state.imgOne,
  groupsDataSource: ds.cloneWithRows(state.dataSource),
})
