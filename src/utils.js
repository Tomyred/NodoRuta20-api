export const defaultResponse = (req, res, data, error = null) => {

    if (error) {

        const errorMessage = error.stack ? error.stack : (error.message ? error.message : error);

        console.error(error);

        res.json({
            error: true,
            data: data == null ? {} : data,
            message: errorMessage
        });

    } else {
        res.json({
            count: data.lenght,
            error: false,
            data,
            message: ""
        });
    }
};
