import React, { useState } from 'react'

//useState là hàm từ thư viện react, thay thế cho this.state và this.setState của rcc (hook dùng rfc)
export default function UseStateDemo() {

    const [state, setstate] = useState({ number: 1 });  //useState trả về 2 giá trị, 1 là state 1 là setState, thích đặt tên sao cũng được nhưng nếu đặt như thế này thì quen thuộc hơn
    // ngang với viết thế này
    // this.state={number:1}

    const [number, setNumber] = useState(1);

    return (
        <div className="container">
            <h1 className="text-danger">Number: {number}</h1>
            <h1>{state.number}</h1>
            <button className="btn btn-success" onClick={() => {
                const newState = { number: state.number + 1, }
                setstate(
                    newState,
                );
                setNumber(
                    number + 1,
                )
            }}>+</button>
        </div >
    )
}
