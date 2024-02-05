import { readFileSync, writeFileSync } from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load() {
    const contacts = readFileSync(__dirname + "/contacts.json");
    this.data = contacts;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id) {
    const contact = this.data.find((c) => c.id == id);
    return contact;
  }
}
export { ContactsCollection };
