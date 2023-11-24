export class BaseResponse {
    constructor({ message, status, data = {} }) {
        this.message = message;
        this.status = status;
        this.data = data;
    }

    send(res) {
        return res.status(this.status).json(this);
    }
}

export class SuccessResponse extends BaseResponse {
    constructor({ message = "Action success", status = 200, data }) {
        super({ message, status, data });
    }
}

export class ClientErrorResponse extends BaseResponse {
    constructor({ message = "Client error occurred", status = 400, data = {} }) {
        super({ message, status, data });
    }
}

export class ServerErrorResponse extends BaseResponse {
    constructor({ message = "Internal Server Error", status = 500, data = {} }) {
        super({ message, status, data });
    }
}
