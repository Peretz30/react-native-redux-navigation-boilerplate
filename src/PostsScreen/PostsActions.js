import RNFetchBlob from 'rn-fetch-blob'

function fetchPostsAPI() {
    return RNFetchBlob
        .config({
            trusty: true
        })
        .fetch('GET', 'https://jsonplaceholder.typicode.com/posts', {
        })
}

function fetchPostsRequest() {
    return {
        type: "FETCH_REQUEST"
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}

function fetchPostsError() {
    return {
        type: "FETCH_ERROR"
    }
}

export function fetchPosts() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPostsAPI()
            .then((res) => {
                let status = res.info().status;

                if (status == 200) {
                    // the conversion is done in native code
                    //let base64Str = res.base64()
                    // the following conversions are done in js, it's SYNC
                    let text = res.text()
                    console.log(text)
                    let json = res.json()
                    console.log(json)
                    dispatch(fetchPostsSuccess(json))
                } else {
                    // handle other status codes
                    dispatch(fetchPostsError())
                }
            })
            // Something went wrong:
            .catch((errorMessage, statusCode) => {
                // error handling
                console.log(statusCode)
                console.log(errorMessage)
                dispatch(fetchPostsError())
            })
    }
}