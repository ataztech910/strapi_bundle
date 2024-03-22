import type { Schema, Attribute } from '@strapi/strapi';

export interface AnswerAnswer extends Schema.Component {
  collectionName: 'components_answer_answers';
  info: {
    displayName: 'Answer';
    icon: 'bulletList';
  };
  attributes: {
    Answer: Attribute.String;
    Correct: Attribute.Boolean;
    Explanation: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'answer.answer': AnswerAnswer;
    }
  }
}
