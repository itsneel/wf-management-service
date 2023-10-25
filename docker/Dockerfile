FROM nodejs:latest

WORKDIR /usr/src/app
USER 0
COPY --chown=1001:0 package*.json ./
COPY --chown=1001:0 dist/app-local.js ./
COPY --chown=1001:0 node_modules/ ./node_modules
EXPOSE 4400
ENTRYPOINT [ "node", "--max-http-header-size", "16000",  "app-local.js"]
