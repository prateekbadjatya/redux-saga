//S =>N=> A => 
//always same syntax it follow
export const blockActionMiddleware = store => next =>action => {
    console.log('Hitting Middleware')
    if(action.type === 'products/BOXING_DAY_OFFERS') {
        return
    } else {
        return next(action)
    }
}