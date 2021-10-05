import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import  * as Thunk  from './../../Actions/APIProxyAction'
import './common.css'
export default function Withdrawn() {
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <>
            <header>Withdrawn</header>
            <main>
                <section className={'input_container'}>
                    <h6>Enter the amount you want to withdraw</h6>
                    <input style={{ marginLeft: 25 }} type="number" onChange={(e) => { setAmount(e.target.value) }} value={amount} />
                </section>
                <section className={'section_container'}>
                    <button onClick={() => {
                        // dispatch({
                        //     type: 'WITHDRAWN',
                        //     data: amount
                        // })
                        dispatch(Thunk.handle_ProxyMiddle('WITHDRAWN', amount))
                        history.push("/")
                    }}>Approve</button>
                </section>
            </main>
        </>
    )
}
