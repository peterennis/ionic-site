import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'ui-floating-input',
  styleUrl: 'floating-input.scss',
  shadow: false
})
export class FloatingInput {
  @Prop() label = '';
  @Prop() disabled = false;
  @Prop() value = '';
  @Prop() name: string;
  @Prop() inputId: string;
  @Prop() type = 'text';
  @Prop() message = '';
  @Prop() inputTabIndex: number;
  @Prop() required: boolean;
  @Prop() autocomplete: string;
  @Prop() onChange: (e) => void = (_e) => {};

  @State() focused = false;

  @Method()
  async setFocus(focused) {
    this.focused = focused;
  }

  checkChange = (e) => {
    this.onChange && this.onChange(e);
  }

  handleInput = (e) => {
    this.checkChange(e);
  }

  handleChange = (e) => {
    this.checkChange(e);
  }

  handleKeyUp = (e) => {
    this.checkChange(e);
  }

  handlePaste = (e) => {
    this.checkChange(e);
  }

  handleClick = (e) => {
    this.checkChange(e);
  }

  render() {
    const { label, type, name, inputId, inputTabIndex,
            required, value, disabled, autocomplete, message } = this;

    const classes = ['ui-floating-input'];

    if (this.focused) {
      classes.push('focused');
    }

    if (this.value) {
      classes.push('has-value');
    }

    return [
      <div class={classes.join(' ')}>
        <input
          id={inputId}
          type={type}
          name={name}
          tabindex={inputTabIndex}
          required={required}
          value={value}
          disabled={disabled}
          autocomplete={autocomplete}
          onInput={this.handleInput}
          onPaste={this.handlePaste}
          onKeyUp={this.handleKeyUp}
          onClick={this.handleClick}
          onFocus={_e => this.setFocus(true)}
          onBlur={_e => this.setFocus(false)}
          />
        <label>{label}</label>
      </div>,
      message ? <div class="form-message form-message--small">{message}</div> : null
    ];
  }
}