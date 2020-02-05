import React from 'react';
import styled from 'styled-components';
import { sayHi } from '@gitbox/utils';
import { CommentOptions } from '../interface';

export default function BaseComment({ options }: { options: CommentOptions }) {
  if (!options) return null;
  const { container, ...rest } = options;
  return (
    <BaseCommentContainer className="gitbox-comment">
      {sayHi('lencx')}
      <pre>{JSON.stringify(rest)}</pre>
    </BaseCommentContainer>
  );
}

const BaseCommentContainer = styled.div`
  background-color: #aaa;
`;
