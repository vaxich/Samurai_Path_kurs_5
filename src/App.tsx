


function App() {

  const tracks = [
    { title: "soundtrack", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3" },
    { title: "soundtrack instrumental", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3" },
  ]

  const newEl = tracks.map((track) => {
    return (
      <li key = {track.url}>
        <div>
          {track.title}
        </div>
        <audio src={track.url} controls>

        </audio>
      </li>
    )
  })

  return (
    <>
      <div>
        <h1>music player</h1>
        <ul>
          {newEl}
        </ul>
      </div>
    </>
  )
}

export default App
