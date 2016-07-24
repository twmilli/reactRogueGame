var React = require('react');
var Cell = require('../components/Cell');
import Item from './Item';

export default class Key extends Item {
  constructor(x,y,bounds) {
    super(x,y,bounds);
    this.type = 'key';
  }
}
