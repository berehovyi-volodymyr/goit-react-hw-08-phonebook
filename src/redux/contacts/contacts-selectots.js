export const getAllContacts = store => store.contacts;

export const selectAllContacts = ({ contacts }) => contacts.items;

export const filteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name }) => {
    return name.toLowerCase().includes(normalizedFilter);
  });

  return result;
};

export const isContactLoading = ({ contacts }) => contacts.isLoading;
