import { HttpStatus } from "./HttpCodes";

export class HttpException extends Error {
  constructor(public data: any, public statusCode: HttpStatus) {
    super(data);
  }
}

export class BadRequestException extends HttpException {
  constructor(public data = "Bad request") {
    super(data, HttpStatus.BAD_REQUEST);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(public data = "Unauthorized") {
    super(data, HttpStatus.UNAUTHORIZED);
  }
}

export class ForbiddenException extends HttpException {
  constructor(public data = "Forbidden") {
    super(data, HttpStatus.FORBIDDEN);
  }
}

export class NotFoundException extends HttpException {
  constructor(public data = "Not found") {
    super(data, HttpStatus.NOT_FOUND);
  }
}

export class InternalServerException extends HttpException {
  constructor(public data = "Internal server error") {
    super(data, HttpStatus.SERVER_ERROR);
  }
}

export class UnprocessableEntityException extends HttpException {
  constructor(public data = "Unprocessable entity") {
    super(data, HttpStatus.UNPROCESSABLE_ENTITY);
  }
}