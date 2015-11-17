jest.dontMock('../Button');

jest.setMock('react-highlight-click', 'div');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let Button = require('../Button').default;
const noOp = function() {};
Button.prototype.componentDidUpdate = noOp;

describe('Button', function(){
  it('should support span and div tagNames', function() {
    let className = 'testClass';
    ['div', 'span'].forEach(function(tagName){
      let reactTree = TestUtils.renderIntoDocument(
        <Button
          className={className}
          tag={tagName}
          onClick={noOp} />
      );

      let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

      expect(ReactDOM.findDOMNode(el).tagName.toLowerCase()).toEqual(tagName.toLowerCase());
    });
  });

  it('should support anchor tags with the href prop', function() {
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        className={className}
        href='http://google.com/'
        onClick={noOp} />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(ReactDOM.findDOMNode(el).tagName.toLowerCase()).toEqual('a');
  });

  it('should support custom css classes', function() {
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        className={className}
        onClick={noOp} />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  it('should call the onClick prop when clicked', function() {
    let onClick = jest.genMockFunction();
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        className={className}
        onClick={onClick} />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(onClick).not.toBeCalled();
    TestUtils.Simulate.click(comp);
    expect(onClick).toBeCalled();
  });
});
