/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Card from './Card';
import styles from './styles';

export default class Board extends Component {
  state = {
    icons: [
      'security',
      'auditing',
      'bcdr',
      'appdev',
      'strategy',
      'bigdata',
      'migrations',
      'devops',
    ],
    duplicatedIcons: [],
    randomizedIcons: [],
    finalizedIcons: [],
    openedIcons: [],
    finished: 0,
  }

  static propTypes = {
    resetGame: PropTypes.func.isRequired,
    addAttempt: PropTypes.func.isRequired,
    addCompletedPair: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.start();
  }

  shuffle = (array) => {
    const shuffledCards = array;
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = shuffledCards[currentIndex];
      shuffledCards[currentIndex] = shuffledCards[randomIndex];
      shuffledCards[randomIndex] = temporaryValue;
    }
    return shuffledCards;
  }

  start = () => {
    const { icons } = this.state;
    const pairedIcons = [];
    const duplicatedIcons = icons.concat(icons);
    const randomizedIcons = this.shuffle(duplicatedIcons);
    randomizedIcons.map(
      (name, index) => pairedIcons.push({
        index,
        name,
        close: true,
        complete: false,
        fail: false,
      }),
    );
    this.setState({
      duplicatedIcons,
      randomizedIcons,
      finalizedIcons: pairedIcons,
    });
  }

  handleClick = (name, index) => {
    const { openedIcons, finalizedIcons } = this.state;
    if (openedIcons.length === 2) {
      // setTimeout(() => {
      //   this.check();
      // }, 750);
    } else {
      const Icon = {
        name, index,
      };
      const pairedIcons = finalizedIcons;
      const Icons = openedIcons;
      pairedIcons[index].close = false;
      Icons.push(Icon);
      this.setState({
        openedIcons: Icons,
        finalizedIcons: pairedIcons,
      });
      if (openedIcons.length === 2) {
        setTimeout(() => {
          this.check();
        }, 750);
      }
    }
  }

  check = () => {
    const { finalizedIcons, openedIcons, finished } = this.state;
    const { resetGame, addAttempt, addCompletedPair } = this.props;
    const pairedIcons = finalizedIcons;
    let count = 0;
    if ((openedIcons[0].name === openedIcons[1].name)
      && (openedIcons[0].index !== openedIcons[1].index)) {
      pairedIcons[openedIcons[0].index].complete = true;
      pairedIcons[openedIcons[1].index].complete = true;
      addCompletedPair();
      count = 1;
    } else {
      pairedIcons[openedIcons[0].index].close = true;
      pairedIcons[openedIcons[1].index].close = true;
      if (openedIcons[0].index !== openedIcons[1].index) {
        addAttempt();
      }
    }
    if (finished === 7) {
      resetGame();
    }
    this.setState({
      finalizedIcons: pairedIcons,
      openedIcons: [],
      finished: finished + count,
    });
  }

  renderColumn = card => (
    <Col key={Math.random()} style={styles.col}>
      <Card
        icon={card.name}
        close={card.close}
        complete={card.complete}
        click={() => this.handleClick(card.name, card.index)}
      />
    </Col>
  )

  renderRow = (array) => {
    const cols = [];
    for (let i = 0; i < array.length; i += 1) {
      cols.push(this.renderColumn(array[i]));
    }
    return (
      <Row key={Math.random()} style={styles.row}>
        {cols}
      </Row>
    );
  };

  render() {
    const { finalizedIcons } = this.state;
    const rows = [];
    let i;
    let j;
    let temp;
    const chunk = 4;
    for (i = 0, j = finalizedIcons.length; i < j; i += chunk) {
      temp = finalizedIcons.slice(i, i + chunk);
      rows.push(this.renderRow(temp));
    }
    return (
      <Grid style={styles.board}>
        {rows}
      </Grid>
    );
  }
}
