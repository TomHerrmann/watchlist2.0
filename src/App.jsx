const React, { useState } = require('react');
const ReactDom = require('react-dom');

const watchList = ({ title, index }) => {
  <div className="media">
    {media.text}
  </div>
}

const App = () => {
  const [watchList, setWatchList] = useState([
    {
      text: 'test react hooks',
      isComple: false,
    },
    {
      text: 'this is hooks hooking',
      isComple: false,
    },
    {
      text: 'just look at it hook',
      isComple: false,
    }
  ]);

  return (
    <div className="app">
      <div className="watch-list">
        <h1>APPPPPPPPP</h1>
        {watchList.forEach((elem, index) => {
          <Media key={index} index={index} media={elem} />
        })}
      </div>
    </div>
  )
}

export default App;