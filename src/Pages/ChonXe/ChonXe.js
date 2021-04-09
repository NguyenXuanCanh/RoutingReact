import React, { useState } from 'react'

export default function ChonXe() {

    const [imgXe, setImgXe] = useState('img/car/products/black-car.jpg');
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Chọn màu</h1>
                    <div className=" row">
                        <div className="col-3">
                            <button onClick={() => {
                                setImgXe('img/car/products/black-car.jpg')
                            }}><img className="w-100" src="img/car/icons/icon-black.jpg"></img></button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                setImgXe('img/car/products/red-car.jpg')
                            }}><img className="w-100" src="img/car/icons/icon-red.jpg"></img></button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                setImgXe('img/car/products/silver-car.jpg')
                            }}><img className="w-100" src="img/car/icons/icon-silver.jpg"></img></button>
                        </div>
                        <div className="col-3">
                            <button onClick={() => {
                                setImgXe('img/car/products/steel-car.jpg')
                            }}><img className="w-100" src="img/car/icons/icon-steel.jpg"></img></button>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className='w-100' src={imgXe}></img>
                </div>
            </div>
        </div>
    )
}
