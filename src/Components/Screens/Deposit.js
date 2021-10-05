import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import * as Thunk from './../../Actions/APIProxyAction'
export default function Deposit() {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0)
    const history = useHistory()
    return (
        <>
            <header>Deposit</header>
            <main>
                <section className={'input_container'}>
                    <h6>Enter the amount you want to deposit</h6>
                    <input style={{ marginLeft: 25 }} type="number" onChange={(e) => { setAmount(e.target.value) }} value={amount} />
                </section>
            </main>
            <section className={'section_container'}>
                <button onClick={() => {
                    dispatch(Thunk.handle_ProxyMiddle("DEPOSIT", amount))
                    history.push("/")
                }}>Approve</button>
            </section>
        </>
    )
}
