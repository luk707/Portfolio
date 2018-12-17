export default newTheme => ({
  type: '@@theme/CHANGE',
  payload: newTheme || {},
})
