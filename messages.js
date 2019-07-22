/* eslint-disable no-template-curly-in-string */
const FIRST_TIME_MESSAGES = [
  'Постов в канале не было уже ${daysCount} дней.',
  [
    'Поставьте пост в телеграм.',
    { message: 'Уже ${daysCount} дней не было.', timeout: 2000 }
  ],
  'Надо что-нибудь опубликовать в канале.',
  'Пора что-нибудь поставить в телеграм.',
  'Пришло время опубликовать новый пост в канале.',
  'Нам надо опубликовать что-нибудь новое.',
  'В канале ${daysCountCount} дней ничего не было, поставьте пост.',
  'Напишите что-нибудь для телеграма.',
  [
    'Привет.',
    { message: 'Поставите что-нибудь?', timeout: 5000 }
  ],
  [
    'Сделайте пост в телеграме.',
    { message: '${RANDOM_EMOJI}', timeout: 1000 }
  ]
];

const EVIL_EMOJI = '😡🦍🤨☹️😤🤬😡🥵😑😐🥴👿😾';
const SAD_EMOJI = '😓🤥😞😒😔😟😕🙁☹️😣😖😫😩🥺😢😭😧😦😯😬🤕😿';
const RANDOM_EMOJI = '😒😅😘🙄😊😇😏😒🤨😚😈💩👊☝️🌝🌚🦍';

module.exports = {
  FIRST_TIME_MESSAGES,
  EVIL_EMOJI,
  SAD_EMOJI,
  RANDOM_EMOJI
};
