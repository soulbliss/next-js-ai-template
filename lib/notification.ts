import {
  NOTIFICATION_WEBHOOK,
  RESEND_API,
  RESEND_AUDIENCE_ID,
} from '@/config/env';
import { ResendContact } from '@/types';
import { User } from 'next-auth';

export function createDiscordMessage(values: User) {
  return {
    username: values.name,
    avatar_url: values.image,
    content: `New user created!\nid: ${values.id}\nName: ${values.name}\nEmail: ${values.email}`,
  };
}

export async function afterUserCreated(values: User) {
  if (process.env.NODE_ENV !== 'production') return;
  try {
    let promises: Promise<Response>[] = [];

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

    // add to resend audience
    if (RESEND_API && RESEND_AUDIENCE_ID) {
      const body: ResendContact = {
        email: values.email!,
        first_name: values.name!,
        last_name: '',
        unsubscribed: false,
      };
      promises.push(
        fetch(
          `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.RESEND_API}`,
            },
            body: JSON.stringify(body),
          },
        ),
      );
    }

    const results = await Promise.all(promises);
    results.forEach(async (response, index) => {
      if (!response.ok) {
        const errorBody = await response.text();
        console.error(
          `Request ${index + 1} failed with status ${
            response.status
          }: ${errorBody}`,
        );
      } else {
        console.log(
          `Request ${index + 1} succeeded with status ${response.status}`,
        );
      }
    });
  } catch (error) {
    console.error('Error sending notifications:', error);
  }
}
export async function newUserCreated(values: User) {
  await afterUserCreated(values);
}
