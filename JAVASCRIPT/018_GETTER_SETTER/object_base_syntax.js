const User = {
  _name: "John Doe",
  age: 30,

  get name() {
    return this._name.toUpperCase();
  },

  /**
   * @param {{ toUppercase: () => any; }} val
   */
  set name(val) {
    this._name = val;
  },
};

const tea=Object.create(User)
console.log(tea.name)