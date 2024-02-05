import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/
  const options = require("minimist")(argv.slice(2));

  return {
    action: options.action,
    params: JSON.parse(options.params),
  };
}

function main() {
  const options = parseaParams(process.argv);
  const contactController = new ContactsController();
  console.log(contactController.processOptions(options));
}

main();
