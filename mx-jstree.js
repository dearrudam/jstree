class Node {
  constructor(
    item = {},
    rawData = [],
    idAttribute = "id",
    parentIdAttribute = "parentId"
  ) {
    this.item = item;
    this.rawData = rawData;
    this.idAttribute = idAttribute;
    this.parentIdAttribute = parentIdAttribute;
  }

  getChildren() {
    return this.rawData
      .filter(item => {
        return this.item[this.idAttribute] === item[this.parentIdAttribute];
      })
      .map(child => {
        return new Node(
          child,
          this.rawData,
          this.idAttribute,
          this.parentIdAttribute
        );
      });
  }

  getChildrenCount() {
    let children = this.getChildren();

    const counter =
      children.length +
      (children.length > 0
        ? children
            .map(item => {
              return item.getChildrenCount();
            })
            .reduce((total, num) => {
              return total + num;
            })
        : 0);
    return counter;
  }
}

export default class Tree {
  constructor(items = [], idAttribute = "id", parentIdAttribute = "parentId") {
    this.rawData = items;
    this.idAttribute = idAttribute;
    this.parentIdAttribute = parentIdAttribute;
  }

  count(id) {
    if (id == null) return 0;

    let items = this.rawData.filter(item => {
      return item[this.idAttribute] === id;
    });

    const counter =
      items.length +
      (items.length > 0
        ? items
            .map(item => {
              return new Node(
                item,
                this.rawData,
                this.idAttribute,
                this.parentIdAttribute
              ).getChildrenCount();
            })
            .reduce((total, num) => {
              return total + num;
            })
        : 0);

    return counter;
  }
}
