const NovelCard = () => {
    return ( 

        <div className="col-xl-3 col-lg-4 col-md-6">
          <div className="gallery-item h-100">
            <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt=""/>
            <div className="gallery-links d-flex align-items-center justify-content-center">
              <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand"></i></a>
              <a href="gallery-single.html" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
    
     );
}
 
export default NovelCard;