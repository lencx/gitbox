import React from 'react';
import { render } from 'react-dom';
import BaseComment from './base_comment';
import { CommentOptions } from '../interface';

export default class Comment {
  options: CommentOptions;
  constructor(options: CommentOptions) {
    this.options = options;
  }
  render(containerId: string) {
    const _el: any = containerId || this.options.container;
    let node: any = null;
    if (!_el) throw new Error(`Container is required: ${_el}`);
    if (!(_el instanceof HTMLElement)) {
      node = window.document.getElementById(_el);
      if (!node) {
        throw new Error(
          `Container not found, window.document.getElementById: ${_el}`
        );
      }
    } else {
      node = _el;
    }
    return render(<BaseComment options={this.options} />, node);
  }
}
