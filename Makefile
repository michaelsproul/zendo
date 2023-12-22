DOCKER=docker run -v ".:/srv/app" -ti --rm -w /srv/app -e /usr/bin/npm node:alpine

build:
	$(DOCKER) npm run build

dev:
	$(DOCKER) npm run dev

.PHONY: build dev
