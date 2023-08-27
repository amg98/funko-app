// This is secret info, used here to speed up the development time. Use a backend in production to send notifications
const SERVER_KEY =
  'AAAA8lR9baQ:APA91bE6JU59FmzUfxhs_k__71GQd6qJBqaIJp4rqm6yhQaHR8Z4Zh-ISrOhBqFqIiFOTc-AE82dN_Cskf78g7FJaQrufr9n11DPkwj7ZGL7OcjE5_JoRNcG1H9b1E6VMZFi_rwfF0hZ';

type FCMInput = {
  to: string;
  notification: {
    title: string;
    body: string;
  };
  // More unneeded fields for this use case
};

type Input = {
  topic: string;
  title: string;
  subtitle: string;
};

export const sendPushNotification = async ({title, subtitle, topic}: Input) => {
  try {
    const input: FCMInput = {
      to: `/topics/${topic}`,
      notification: {
        title,
        body: subtitle,
      },
    };

    // This endpoint is deprecated and will be removed in June 2024, but it works for the sake of this test
    await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        Authorization: `key=${SERVER_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
  } catch {}
};
