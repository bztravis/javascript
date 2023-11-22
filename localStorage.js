// 3 main ways to store data in the browser:
//  local storage, session data, cookies

// all 3: single user data, not "important" since user can delete at any time
// stored in the browser, so it's just for that browser

/**
 * LOCAL STORAGE: 10mb
 * - accessible from any window
 * - expires never
 *
 * SESSION STORAGE: 5mb
 * - accessible from the same tab
 * - expires on tab close
 * - duplicating tab copies the session storage (ex keep scroll level on page)
 *
 * COOKIES: 4kb
 * - accessible from any window
 * - expires: manually set
 * - stored in the browser, but sent to the server every time a request is made
 * - good for example: remembering authentication
 */

localStorage.setItem('name', 'Bob') // persists even if commented out
console.log(localStorage.getItem('name')) // null if item not found
localStorage.removeItem('name')

// session storage works the same, all methods the same

sessionStorage.setItem('name', 'John')
console.log(sessionStorage.getItem('name'))

// make a date super far in the future like in year 9999 to denote no expire
document.cookie = 'name=Kyle; expires=' + new Date(2023, 0, 1).toUTCString()
document.cookie =
  'lastName=Smith; expires=' + new Date(9999, 0, 1).toUTCString()

console.log(document.cookie)  // literally a string you have to parse

// use a library if you need to work with cookies