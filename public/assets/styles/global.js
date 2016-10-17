var Style = {
  grey: '#999999',
  fontSize1: 17.2
}

Style.text1 = {
  color: Style.grey,
  fontSize: Style.fontSize1
}

Style.container = {
  flex: 1,
  marginTop: 55,
}

Style.navbar = {
  alignItems: 'center',
  backgroundColor: 'black',
  borderBottomWidth: 0,
  height: 55,
  flex: 1,
  flexDirection: 'row',
}

Style.transNavbar = {
  backgroundColor: 'transparent',
  height: 55,
  borderBottomWidth: 0,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

Style.bgColor = {
  backgroundColor: 'black'
}

Style.separator = {
  height: 0.5,
  backgroundColor: '#D8D8D8',
}

Style.label = {
  color: '#AAAAAA',
  fontSize: 15,
  fontFamily: 'Helvetica Neue',
  flex: 2,
}

Style.buttonLabel = {
  color: '#AD985E',
  fontSize: 15,
  fontFamily: 'Helvetica Neue',
  flex: 1,
}

Style.rowContainer = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingTop: 15,
  paddingBottom: 15,
}

Style.topRowContainer = {
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 15,
}

Style.buttonContainerSilver = {
  borderWidth: 1,
  borderColor: '#AD985E',
  borderRadius: 5,
  height: 25,
  width: 125,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
}

Style.buttonTextSilver = {
  color: '#AD985E',
  fontSize: 13,
  fontFamily: 'Helvetica Neue',
}

module.exports = Style
