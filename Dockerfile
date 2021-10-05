FROM 016091837043.dkr.ecr.us-west-2.amazonaws.com/panamax-app-cypress-included:Add-Report-12 as cypress

# USF custom cypress image includes all node_modules needed to run these tests.
# Simply copy in our test definitions and fixtures.
# The USF custom cypress image's ENTRYPOINT is "cypress run".
COPY . /app
