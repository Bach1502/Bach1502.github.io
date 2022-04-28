import Carousel from './Carousel';




export default function CommunitySocialSlider (prop) {
  let social = prop.socialData.map(function (data) {
    return (
      <div className="socialSlot">
        <img className="postImage" src={process.env.PUBLIC_URL + '/images/'+data.image} />
        <p className="postContent">{data.content}</p>
        <img className="fb" src={process.env.PUBLIC_URL + '/images/facebook.png'} />
        <div className="shareSocial">
        <img className="circle" src={process.env.PUBLIC_URL + '/images/circle.svg'} />
        <img className="shareIcon" src={process.env.PUBLIC_URL + '/images/share.svg'} />
 
        </div>

      </div>
    

    )
});

  return (
    <div>
        <Carousel show={5}  infiniteLoop={true}>
        {social}
        </Carousel>
    </div>
)
}