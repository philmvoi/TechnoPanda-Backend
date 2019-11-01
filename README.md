# TechnoPanda-Backend

Hola.

Stack: Sequelize, Graphql & mysql

To launch the server:
  - run the 'yarn install' command in the terminal (for mac), or command line (for windows)
  - open the models directory and then navigate to the index.js file
  - enter you db name, root and password in the three single quotes to the right of the 'sequelize' const.
  - run the 'yarn start' command
  - go to localhoat:4000/graphiql in your browser

If it runs....Tremendous!!!
if not hmu

# To test update fubctionality

mutation {
	updateState(state_id:3, state_name: "iowa") {
    state_name,
    state_id
  }
}
