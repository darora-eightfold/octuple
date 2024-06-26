'use client';

import React, { Component } from 'react';

export interface DomWrapperProps {
  children: React.ReactElement | React.ReactNode;
}

/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
export class DomWrapper extends Component<DomWrapperProps> {
  render() {
    return this.props.children;
  }
}
