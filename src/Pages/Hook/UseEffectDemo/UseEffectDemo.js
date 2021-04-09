import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {

    const [number, setNumber] = useState(1);

    //useEffect thay thế cho lifeCycleComponentDidmount
    useEffect(() => {//tự động kích hoạt và chạy lần đầu tiên
        //call API
        //sử carousel, thư viện khác...
        console.log('componentdidmount');
        return () => {
            //hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentwillunmount');
        }
    }, []);//tham số là mảng rỗng

    useEffect(() => {
        //gọi sau mỗi lần render kể cả lần đầu tiên
        console.log('thay thế 2 lifecycle componentdidmount và componentupdate');
        //hạn chế setState ở đây
    })//không có tham số thứ 2

    useEffect(() => {
        //hạn chế setState ở đây
        console.log('componentdidupdate bởi 1 state nào đó');
        //gọi nếu thằng tham số thứ 2 thay đổi, sẽ k gọi nếu tham số đấy giữ nguyên
    }, [number])//tham số thứ 2 là state

    return (
        <div>
            <h1>{number}</h1>
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1)
            }}>
                +
            </button>
        </div>
    )
}
