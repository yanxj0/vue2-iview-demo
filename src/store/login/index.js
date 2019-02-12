export default {
    actions: {
        checkLogin({ dispatch }) {
            /* eslint-disable */
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    dispatch('logOk')
                    resolve()
                }, 1000)
            })
        },
    },
}