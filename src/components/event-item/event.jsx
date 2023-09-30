const event = ({
    title,
    attending,
    start,
    image,
    tags,
    liked,
    handleLiked
}) => {
  return (
  <div className="col ">
    <div className="card h-100">
      <img src={image} className="card-img-top rounded-2" alt="..." />
      <div className="card-body position-relative">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-danger">{start}</p>
        <div className="card-text d-flex flex-row gap-2">{tags.map((tag) => {
            
            return (
            <div key={tag} className="border rounded-pill px-2 bg-secondary-subtle">
                {tag}
            </div>                
                )
            })}</div>
        <div className="buttonsLiked">
        <div className="bg-light p-2 rounded-circle"><i className="fa fa-user"></i>{attending}</div>
        <button className={`rounded-circle me-3 ${liked ? "btn btn-danger" : "btn btn-light"}`} onClick={()=>handleLiked(title)}><i className="fa fa-heart"></i></button>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default event