const apiSuccess = (res:any , result:any, message = "success") => {
    res.status(200).json({
        error: false,
        message: message,
        data: result,
        errors: []
    });
}

const apiError = (res: any, message = "Unable to process request", result = null, err:any, errorCode = 400) => {
    console.log(err);
    res.status(errorCode).json({
        error: true,
        message: message,
        data: result,
        errors: [err.parent ? err.parent.code : err || null]
    });
}

export default {
    apiError,
    apiSuccess
}