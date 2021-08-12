FROM cypress/included:7.7.0 as cypress

WORKDIR /app
COPY . /app  
RUN npm install --force
ENTRYPOINT npm run test-report


