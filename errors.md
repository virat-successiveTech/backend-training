## Table of Contents

1. [HTTP Status Codes](#http-status-codes)
2. [Operating System Errors](#operating-system-errors)
3. [Application-Specific Errors](#application-specific-errors)
4. [Database Errors](#database-errors)

---

## HTTP Status Codes

### 1xx: Informational
- **100 Continue**: The initial part of a request has been received and the client should continue.
- **101 Switching Protocols**: Server is switching protocols as requested by the client.

### 2xx: Success
- **200 OK**: The request has succeeded.
- **201 Created**: The request has been fulfilled and has resulted in a new resource being created.
- **204 No Content**: The server successfully processed the request, but is not returning any content.

### 3xx: Redirection
- **301 Moved Permanently**: The requested resource has been assigned a new permanent URI.
- **302 Found**: Temporary redirection to a different URI.
- **304 Not Modified**: The resource has not been modified since last requested.

### 4xx: Client Errors
- **400 Bad Request**: The request was malformed or cannot be processed.
- **401 Unauthorized**: Authentication is required and has failed or has not yet been provided.
- **403 Forbidden**: The server understood the request but refuses to authorize it.
- **404 Not Found**: The server has not found anything matching the request URI.
- **429 Too Many Requests**: The user has sent too many requests in a given amount of time.

### 5xx: Server Errors
- **500 Internal Server Error**: A generic error occurred on the server.
- **502 Bad Gateway**: The server received an invalid response from the upstream server.
- **503 Service Unavailable**: The server is not ready to handle the request.
- **504 Gateway Timeout**: The upstream server failed to send a request in time.

---

## Operating System Errors

### Common POSIX/Linux Error Codes
- **EACCES (13)**: Permission denied.
- **ENOENT (2)**: No such file or directory.
- **ENOMEM (12)**: Not enough space/cannot allocate memory.
- **EEXIST (17)**: File already exists.
- **EIO (5)**: Input/output error.

### Windows System Error Codes
- **ERROR_ACCESS_DENIED (5)**: Access is denied.
- **ERROR_FILE_NOT_FOUND (2)**: The system cannot find the file specified.
- **ERROR_DISK_FULL (112)**: There is not enough space on the disk.
- **ERROR_INVALID_HANDLE (6)**: The handle is invalid.

---

## Application-Specific Errors

> Customize this section based on your own application.

### Example
- **APP001 InvalidToken**: The provided authentication token is invalid or expired.
- **APP002 MissingParameter**: A required parameter is missing in the request.
- **APP003 UserNotFound**: The specified user does not exist in the system.
- **APP004 PaymentFailed**: The payment process did not complete successfully.

---

## Database Errors

### SQL-Based Errors
- **ER_DUP_ENTRY (1062)**: Duplicate entry for a key (MySQL).
- **ER_PARSE_ERROR (1064)**: SQL syntax error.
- **SQLITE_CONSTRAINT (19)**: Constraint failed (SQLite).
- **ORA-00001**: Unique constraint violated (Oracle).

### Connection Errors
- **DB_CONN_TIMEOUT**: Connection to the database timed out.
- **DB_CONN_REFUSED**: Database refused the connection.
- **DB_AUTH_FAILED**: Authentication with the database failed.

---

## Contributing

To contribute new error codes or corrections, please submit a pull request or contact the maintainer.

