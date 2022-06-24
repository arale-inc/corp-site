FROM node:lts-buster

RUN groupadd vscode
RUN useradd -m -g vscode vscode
RUN usermod --shell /bin/bash vscode

RUN umask 0002 && npm install -g http-server @vue/cli @vue/cli-service-global

USER vscode
RUN sed -i -e 's/^\(.*PS1=.*\)@\\h\(.*\)$/\1\2/g' ~/.bashrc

EXPOSE 8080
