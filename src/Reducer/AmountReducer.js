const profile = {
    username: 'Test',
    balance: 10000
}

export default function (initialState = profile, action) {
    switch (action.type) {
        case 'WITHDRAWN': {
            if (action.data > profile.balance) {
                alert('Withdraw amount is greater than balance')
                return { ...initialState }
            }
            profile.balance = parseInt(profile.balance) - parseInt(action.data)
            return { ...profile }
        }

        case 'DEPOSIT': {
            profile.balance = parseInt(profile.balance) + parseInt(action.data)
            return { ...profile }
        }

        default: {
            return { ...initialState }
        }
    }
}