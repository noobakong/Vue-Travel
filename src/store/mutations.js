export default {
  MchangeCity (state, city) {
    state.city = city
    // localStorage.city = city // 使用localStorage记录选择的城市
    try {
      localStorage.city = city
    } catch (e) { }
  }
}
