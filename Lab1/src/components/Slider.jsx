import React from 'react'
// import "../css/slider.css"
export function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://img.freepik.com/premium-photo/jewelry-panoramic-banner-collage_23-2151262915.jpg?w=1380" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/jewelry-panoramic-banner-collage_23-2151262902.jpg?w=1380" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://img.freepik.com/premium-photo/jewelry-panoramic-banner-collage_23-2151262917.jpg?w=1380" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}