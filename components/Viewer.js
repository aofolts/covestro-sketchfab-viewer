const Viewer = props => {

  const key = props.viewerKey,
        query = [
          frameBorder='0',
          allow='autoplay; fullscreen; vr',
        ],
        src = `https://sketchfab.com/models/${key}/?${query}`

  return (
    <div id='viewer'>
      <iframe src={src}/>
    </div>
  )
}