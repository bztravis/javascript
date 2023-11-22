hoisted()
notHoisted()

function hoisted() {
  console.log('hosted')
}

const notHoisted = () => {
  console.log('notHoisted')
}
