import YouTube from 'react-youtube';

function Video() {
  const opts = {
    playerVars: {
      modestbranding: 1, // Esconde o logo do YouTube
    },
    width: '100%',
    height: '100%',
  };

  const onReady = (event) => {
    // Acesso ao player no evento 'onReady'
    event.target.pauseVideo();
  };

  return (
    <div style={{
      position: 'relative', 
      width: '100%', 
      paddingTop: '56.25%', // Proporção para telas menores
      '@media (min-width:600px)': {
        paddingTop: '40%' // Proporção maior para telas médias e grandes
      },
      '@media (min-width:1200px)': {
        paddingTop: '30%' // Proporção ainda maior para telas grandes
      }
    }}>
      <YouTube
        videoId="BWoY-OFQxU0"
        opts={opts}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        onReady={onReady}
      />
    </div>
  );
}

export default Video;
