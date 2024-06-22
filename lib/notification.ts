import { User } from 'next-auth';

export function createDiscordMessage(values: User) {
  return {
    username: values.name,
    avatar_url: values.image,
    content: `New user created!\nid: ${values.id}\nName: ${values.name}\nEmail: ${values.email}`,
  };
}

export async function newUserCreated(values: User) {
  const message = createDiscordMessage(values);
  if (process.env.NODE_ENV !== 'production') return;
  try {
    await fetch(process.env.NOTIFICATION_WEBHOOK as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  } catch (error) {
    console.error(error);
  }
}
