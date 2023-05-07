import React, { useState } from 'react'
import "./style.scss"

const Uesr = () => {

    const [gallery, setGalery] = useState([])
    const [loading, setLoading] = useState(false)

    fetch("https://api.escuelajs.co/api/v1/products")
        .then((response) => response.json())
        .then((result) => {
            setGalery(result)
            setLoading(true)
        })

    if (!loading) {
        return (
            <>
                <div class="loading">Loading&#8230;</div>
            </>

        )
    }
    return (
        <div className='user card mt-5  p-5 shadow'>
            <div className="wrapper">
                {
                    gallery.length > 0 ?
                        gallery.map((item) => {
                            return (
                                <div className="card">
                                    <div className="card-img-top" >
                                        <img src={item.images[0]} alt="" style={{ width: "290px", height: "300px" }} />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">{item.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                        : "Note found"
                }
            </div>
        </div>
    )
}

export default Uesr