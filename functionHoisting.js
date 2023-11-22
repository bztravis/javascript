hoisted()
notHoisted()

// will be hoisted, uses the function keyword in declaration
function hoisted() {
  console.log('hosted')
}

// will not be hoisted, does not use the function keyword in declaration
const notHoisted = () => {
  console.log('notHoisted')
}
