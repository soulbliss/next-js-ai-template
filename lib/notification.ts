import { EMAIL_PROVIDER_TOKEN, NOTIFICATION_WEBHOOK } from '@/config/env';
import { EmailContact } from '@/types';
import { User } from 'next-auth';

export function createDiscordMessage(values: User) {
  return {
    username: values.name,
    avatar_url: values.image,
    content: `New user created!\nid: ${values.id}\nName: ${values.name}\nEmail: ${values.email}`,
  };
}

export async function addContact(contact: EmailContact) {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${EMAIL_PROVIDER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  };

  const response = await fetch(
    'https://app.loops.so/api/v1/contacts/create',
    options,
  );
  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to add contact: ${response.status} ${errorBody}`);
  }
  return response.json();
}

export async function afterUserCreated(values: User) {
  if (process.env.NODE_ENV !== 'production') return;
  try {
    let promises: Promise<any>[] = [];

    // send update on discord, if webhook is set
    if (NOTIFICATION_WEBHOOK) {
      promises.push(
        fetch(NOTIFICATION_WEBHOOK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(createDiscordMessage(values)),
        }),
      );
    }

    // add to email provider audience
    if (EMAIL_PROVIDER_TOKEN) {
      const contact: EmailContact = {
        email: values.email!,
        firstName: '',
        lastName: '',
        source: 'next-js-ai-tool-layout-1',
        subscribed: true,
      };
      promises.push(addContact(contact));
    }

    const results = await Promise.allSettled(promises);
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`Request ${index + 1} succeeded`);
      } else {
        console.error(`Request ${index + 1} failed:`, result.reason);
      }
    });
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
}

export async function newUserCreated(values: User) {
  await afterUserCreated(values);
}
