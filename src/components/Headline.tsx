import React, { Component } from 'react';
import { HeadlineContainer } from '../styles/HeadlineStyles';

export interface HeadlineProps {
  header?: string;
  description: string;
}

class Headline extends Component<HeadlineProps> {
  render() {
    const { header, description } = this.props;
    if (!header) return null;
    return (
      <HeadlineContainer data-test='headline'>
        <h1 data-test='headlineTitle'>{header}</h1>
        <p data-test='headlineDesc'>{description}</p>
      </HeadlineContainer>
    );
  }
}

export default Headline;
