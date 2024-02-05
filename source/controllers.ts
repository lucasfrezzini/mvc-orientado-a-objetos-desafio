import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;

  constructor() {
    this.contacts = new ContactsCollection();
    this.contacts.load();
  }
  processOptions(options: ContactsControllerOptions) {
    if (options.action == "get") {
      let res;
      options.params.id != null
        ? (res = this.contacts.getOneById(options.params.id))
        : (res = this.contacts.getAll());
      return res;
    } else if (options.action == "save") {
      this.contacts.addOne(options.params);
      this.contacts.save();
    }
  }
}

export { ContactsController };
