import React from 'react';
import CommentContainer from 'theme/containers/CommentContainer';


const URL = 'https://github.com/adriano-lemos-dev/adrianolemos.dev/issues/new';

export default () => (
  <CommentContainer>
    <p>
      Perguntas, Comentários, Sugestões?
      <a rel="noopener noreferrer" target="__blank" href={URL}>
        Abra uma issue
      </a>
    </p>
  </CommentContainer>
);
