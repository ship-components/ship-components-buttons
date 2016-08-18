jest.dontMock('../Button');

// Don't need to test these and they currently throw errors
jest.setMock('react-highlight-click', 'div');
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let Button = require('../Button').default;
const noOp = function() {};
Button.prototype.componentDidUpdate = noOp;

const shipBtnClass = 'ship-components-btn';

describe('Button', function(){
  it('should support button and a tagNames', function() {
    let className = 'testClass';
    ['button', 'a'].forEach(function(tagName){
      let reactTree = TestUtils.renderIntoDocument(
        <Button
          className={className}
          tag={tagName}
          onClick={noOp} />
      );

      let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

      expect(ReactDOM.findDOMNode(el).childNodes[0].tagName.toLowerCase()).toEqual(tagName.toLowerCase());
    });
  });

  it('should support anchor tags with the href prop', function() {
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        className={className}
        tagName='a'
        href='http://google.com/'
        onClick={noOp} />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(ReactDOM.findDOMNode(el).childNodes[0].tagName.toLowerCase()).toEqual('a');
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

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        onClick={onClick}
      />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, shipBtnClass);

    expect(onClick).not.toBeCalled();
    TestUtils.Simulate.click(comp);
    expect(onClick).toBeCalled();
  });

  it('should set the pressed state when clicked', function() {
    let onClick = jest.genMockFunction();

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        onClick={onClick} />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, Button);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, shipBtnClass);

    expect(comp.state.pressed).toBe(false);
    expect(onClick).not.toBeCalled();
    TestUtils.Simulate.click(node);
    expect(comp.state.pressed).toBe(true);
    expect(onClick).toBeCalled();
    jest.runAllTimers();
    expect(comp.state.pressed).toBe(false);
  });

  it('should track if the mouse is over the button', function() {
    let reactTree = TestUtils.renderIntoDocument(
      <Button
        onClick={noOp} />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, Button);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, shipBtnClass);

    expect(comp.state.hover).toBe(false);
    TestUtils.Simulate.mouseEnter(node);
    expect(comp.state.hover).toBe(true);
    TestUtils.Simulate.mouseLeave(node);
    expect(comp.state.hover).toBe(false);
  });

  it('should not respond to events when disabled', function() {
    let onClick = jest.genMockFunction();

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        disabled
        onClick={onClick} />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, Button);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, shipBtnClass);

    // Hovers
    expect(comp.state.hover).toBe(false);
    TestUtils.Simulate.mouseEnter(node);
    expect(comp.state.hover).toBe(false);
    TestUtils.Simulate.mouseLeave(node);
    expect(comp.state.hover).toBe(false);

    // Click
    expect(onClick).not.toBeCalled();
    TestUtils.Simulate.click(node);
    expect(onClick).not.toBeCalled();
  });

  it('should not trigger the hover events when disableHover is true', function() {
    let onClick = jest.genMockFunction();
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        disableHover
        className={className}
        onClick={onClick} />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, Button);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    // Hovers
    expect(comp.state.hover).toBe(false);
    TestUtils.Simulate.mouseEnter(node);
    expect(comp.state.hover).toBe(false);
    TestUtils.Simulate.mouseLeave(node);
    expect(comp.state.hover).toBe(false);

    // Click
    expect(onClick).not.toBeCalled();
    TestUtils.Simulate.click(node);
    expect(onClick).not.toBeCalled();
  });

  it('should render children', function() {
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <Button
        className={className}
        onClick={noOp}>
         <div className='className'/>
      </Button>
    );

    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);
    expect(node).toBeDefined()
  });


  it('should render an icon', function() {
    let reactTree = TestUtils.renderIntoDocument(
      <Button
          onClick={noOp}
          icon='add'/>
    );

    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, 'icon-add');
    expect(node).toBeDefined()
  });
});
