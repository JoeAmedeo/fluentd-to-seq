#TODO: Test stage

FROM golang:alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY ./src ./src
RUN go build -o ./bin/app ./src

FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/bin/ .
CMD ["./app", "-logtostderr=true", "-v=2"]


