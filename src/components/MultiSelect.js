import React from 'react';
import Downshift from 'downshift';
import {
  Menu,
  ControllerButton,
  Item,
  ArrowIcon,
  css,
  getItems,
} from './DownshiftComponents';

import * as COLORS from '../constants/colors';

class MultiDownshift extends React.Component {
  state = { selectedItems: [] };

  stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          isOpen: false,
        };
      default:
        return changes;
    }
  };

  callOnChange = () => {
    const { onSelect, onChange } = this.props;
    const { selectedItems } = this.state;
    if (onSelect) {
      onSelect(selectedItems);
    }
    if (onChange) {
      onChange(selectedItems);
    }
  };

  handleSelection = (selectedItem, downshift) => {
    if (this.state.selectedItems.includes(selectedItem)) {
      this.removeItem(selectedItem, this.callOnChange);
    } else {
      this.addSelectedItem(selectedItem, this.callOnChange);
    }
  };

  removeItem = (item, cb) => {
    this.setState(({ selectedItems }) => {
      return {
        selectedItems: selectedItems.filter(i => i !== item),
      };
    }, cb);
  };

  addSelectedItem(item, cb) {
    this.setState(
      ({ selectedItems }) => ({
        selectedItems: selectedItems.map(item => item.id).includes(item.id)
          ? selectedItems
          : [...selectedItems, item],
      }),
      cb
    );
  }

  getRemoveButtonProps = ({ onClick, item, ...props } = {}) => {
    return {
      onClick: e => {
        onClick && onClick(e);
        e.stopPropagation();
        this.removeItem(item, this.callOnChange);
      },
      ...props,
    };
  };

  getStateAndHelpers(downshift) {
    const { selectedItems } = this.state;
    const { getRemoveButtonProps, removeItem, callOnChange } = this;
    return {
      getRemoveButtonProps,
      removeItem,
      callOnChange,
      selectedItems,
      ...downshift,
    };
  }

  render() {
    const { render, children = render, ...props } = this.props;
    return (
      <Downshift
        {...props}
        stateReducer={this.stateReducer}
        onChange={this.handleSelection}
        selectedItem={null}
      >
        {downshift => children(this.getStateAndHelpers(downshift))}
      </Downshift>
    );
  }
}

class MultiSelect extends React.Component {
  input = React.createRef();
  itemToString = item => (item ? item.name : '');
  render() {
    const { items } = this.props;

    return (
      <div
        {...css({
          display: 'flex',
          flexDirection: 'column',
          margin: '20px 0 50px',
        })}
      >
        <MultiDownshift
          onChange={this.props.onChange}
          itemToString={this.itemToString}
        >
          {({
            getInputProps,
            getToggleButtonProps,
            getMenuProps,
            getRemoveButtonProps,
            removeItem,
            callOnChange,
            isOpen,
            inputValue,
            selectedItems,
            getItemProps,
            highlightedIndex,
            toggleMenu,
          }) => (
            <div
              style={{
                width: '100%',
                maxWidth: 500,
                margin: 'auto',
                position: 'relative',
              }}
            >
              <div
                {...css({
                  cursor: 'pointer',
                  position: 'relative',
                  borderRadius: '6px',
                  borderTopRadius: 6,
                  borderBottomRightRadius: isOpen ? 0 : 6,
                  borderBottomLeftRadius: isOpen ? 0 : 6,
                  padding: 10,
                  paddingRight: 50,
                  boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
                  background: 'white',
                  borderColor: '#96c8da',
                  borderTopWidth: '1',
                  borderRightWidth: 1,
                  borderBottomWidth: 1,
                  borderLeftWidth: 1,
                  borderStyle: 'solid',
                })}
                onClick={() => {
                  toggleMenu();
                  !isOpen && this.input.current.focus();
                }}
              >
                <div
                  {...css({
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  })}
                >
                  {selectedItems.length > 0
                    ? selectedItems.map(item => (
                        <div
                          key={item.id}
                          {...css({
                            margin: 2,
                            paddingTop: 2,
                            paddingBottom: 2,
                            paddingLeft: 8,
                            paddingRight: 8,
                            display: 'inline-block',
                            wordWrap: 'none',
                            backgroundColor: COLORS.BRAND,
                            color: 'white',
                            borderRadius: 2,
                          })}
                        >
                          <div
                            {...css({
                              display: 'grid',
                              gridGap: 6,
                              gridAutoFlow: 'column',
                              alignItems: 'center',
                            })}
                          >
                            <span>{item.name}</span>
                            <button
                              {...getRemoveButtonProps({ item })}
                              {...css({
                                cursor: 'pointer',
                                lineHeight: 0.8,
                                border: 'none',
                                backgroundColor: 'transparent',
                                padding: '0',
                                fontSize: '16px',
                                color: 'white',
                              })}
                            >
                              𝘅
                            </button>
                          </div>
                        </div>
                      ))
                    : null}
                  <input
                    {...getInputProps({
                      ref: this.input,
                      onKeyUp(event) {
                        if (event.key === 'Backspace' && !inputValue) {
                          removeItem(
                            selectedItems[selectedItems.length - 1],
                            callOnChange
                          );
                        }
                      },
                      ...css({
                        border: 'none',
                        marginLeft: 6,
                        flex: 1,
                        fontSize: 14,
                        minHeight: 27,
                        backgroundColor: 'transparent',
                      }),
                    })}
                  />
                </div>
                <ControllerButton
                  {...getToggleButtonProps({
                    // prevents the menu from immediately toggling
                    // closed (due to our custom click handler above).
                    onClick(event) {
                      event.stopPropagation();
                    },
                  })}
                >
                  <ArrowIcon isOpen={isOpen} />
                </ControllerButton>
              </div>
              <Menu {...getMenuProps({ isOpen })}>
                {isOpen
                  ? getItems(items, inputValue).map((item, index) => (
                      <Item
                        key={item.id}
                        {...getItemProps({
                          item,
                          index,
                          isActive: highlightedIndex === index,
                          isSelected: selectedItems.includes(item),
                        })}
                      >
                        {item.name}
                      </Item>
                    ))
                  : null}
              </Menu>
            </div>
          )}
        </MultiDownshift>
      </div>
    );
  }
}

export default MultiSelect;
