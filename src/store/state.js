let defaultCity = '南阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) { }

export default {
  city: defaultCity
}
