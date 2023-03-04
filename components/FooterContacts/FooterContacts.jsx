import { contacts } from '@/data/contacts';
import { List, Text, Item, Contact } from './FooterContacts.styled';

export const FooterContacts = () => {
  return (
    <List>
      {contacts.map(({ type, contact }, ind) => (
        <Item key={ind}>
          <Text>{type}:</Text>
          <Contact>{contact}</Contact>
        </Item>
      ))}
    </List>
  );
};
