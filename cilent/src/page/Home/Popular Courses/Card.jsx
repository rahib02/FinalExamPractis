import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
function Card() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:5000/users/")
            .then(res => setdata(res.data))
    }, [])
    const DeleteId = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
    }
    return (
        <div className='cards_data'>
            <h1>Popular Course</h1>
            <div className='cards'>
                {
                    data.map(x => (
                        <div key={x.id} className='card'>
                            <div className='card_product_img'>
                                <img src={x.productImg} alt="" />
                            </div>
                            <div className='card_product_text'>
                                <Link>{x.productTitle}</Link>
                                <span>{x.productText}</span>
                            </div>
                            <div className='card_product_user'>
                                <div className='user'>
                                    <img src={x.userImg} alt="" />
                                    <span className='userName'>{x.userName}</span>
                                    <span className='userWork'>{x.userWork}</span>
                                </div>
                                <div className='prices'>
                                    <span className='price'>${x.price}</span>
                                </div>

                            </div>
                            <div className='card_delete'>
                                <button onClick={() => DeleteId(x._id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Card