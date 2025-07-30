.PHONY: build
build:
	bun build ./src/index.ts --compile --outfile dist/nest

.PHONY: run
run:
	bun run start

.PHONY: deps
deps:
	bun install

.PHONY: prettify
prettify:
	bun run prettify
