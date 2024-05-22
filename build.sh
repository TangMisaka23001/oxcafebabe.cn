git pull

docker build -t oxcafebabe-home .

(docker stop oxcafebabe-home && docker rm oxcafebabe-home) || true

docker run --name oxcafebabe-home -d --network traefik-public --restart=always oxcafebabe-home