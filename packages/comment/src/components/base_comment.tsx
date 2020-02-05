import React from 'react';
import styled from 'styled-components';
import { CommentOptions } from '../interface';

export default function BaseComment({ options }: { options: CommentOptions }) {
  if (!options) return null;
  const { container, ...rest } = options;
  return (
    <BaseCommentContainer className="gitbox-comment">
      <pre>{JSON.stringify(rest)}</pre>
    </BaseCommentContainer>
  );
}

const BaseCommentContainer = styled.div`
  background-color: #aaa;
`;
