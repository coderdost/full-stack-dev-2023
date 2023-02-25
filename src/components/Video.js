import './Video.css';

function Video({title,id,channel="Coder Dost",views,time,verified,children,levels}) {
   
  
  return (
      <>
      <div className='container' onClick={()=>levels.push('Video')}>
      <div className="pic">
      <img onClick={()=>levels.push('Image')} src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;
