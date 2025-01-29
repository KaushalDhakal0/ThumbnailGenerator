FROM node:22-alpine3.18

WORKDIR /app

COPY package*.json ./

# Install dependencies for LibreOffice
RUN apk update && apk add --no-cache \
    bash \
    libc6-compat \
    libreoffice \
    imagemagick \
    && rm -rf /var/cache/apk/*

# install the font format for pdfs and docs
RUN apk add --no-cache \
    ttf-dejavu \
    ttf-liberation \
    fontconfig
RUN apk add --no-cache msttcorefonts-installer && \
    update-ms-fonts && \
    fc-cache -f


RUN npm install

COPY . ./

CMD ["node", "index.js"]

