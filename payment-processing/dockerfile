FROM python:3.12-alpine3.19
WORKDIR /app
COPY ./payment-processing /app/
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "run.py", "runserver","--host=0.0.0.0"]