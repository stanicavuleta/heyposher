FROM python:3.7

ENV PATH="/scripts:${PATH}"

ADD . /usr/src/app

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

COPY ./scripts /scripts
RUN chmod +x /scripts/*

RUN mkdir -p /vol/web/media
RUN mkdir -p /vol/web/static

CMD ["entrypoint.sh"]