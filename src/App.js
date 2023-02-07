import React from "react";
// import './index.css'

const App = () => {
  let currentDate = new Date(2023, 2, 3, 1)
  currentDate = currentDate.getHours()
  let greeting = ''
  const cssstyle = {};

  if (currentDate >= 1 && currentDate < 12) {
    greeting = 'Good Morning'
    cssstyle.color = 'green'
  } else if (currentDate >= 12 && currentDate < 19) {
    greeting = 'Good Afternoon'
    cssstyle.color = 'orange'
  } else {
    greeting = 'Good Night'
    cssstyle.color = 'black'
  }

  return (
    <div>
      <h1>Hello Sir, <span style={cssstyle}>{greeting}</span></h1>
    </div>
  )
}

export default App